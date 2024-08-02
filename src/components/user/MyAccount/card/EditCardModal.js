import * as React from "react"

import { POST } from "@/app/api/post"
import { Button, Spinner, Error } from "@/components"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { v4 } from "uuid";
import { useSelector } from "react-redux";
import Validation from "@/constants/validation";

const EditCardModal = ({ setAddCard, setCards, editCard, cards }) => {
  const user = useSelector(state => state.userAuth.user);
  const [month, setMonth] = React.useState({ value: '', error: false });
  const [year, setYear] = React.useState({ value: '', error: false });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [submited, setSubmited] = React.useState(false);

  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();
  const years = Array.from(new Array(10), (val, index) => currentYear + index);
  const months = Array.from(new Array(12), (val, index) => index < 9 ? `0${index + 1}` : `${index + 1}`);

  const addCard = async (e) => {
    e.preventDefault();

    const monthVal = e.target.expried_on.value.split('/')[0];
    const yearVal = e.target.expried_on.value.split('/')[1];
    (!monthVal) && setMonth({ value: '', error: true });
    (!yearVal) && setYear({ value: '', error: true });

    setLoading(true);
    const resp = await POST.request({ url: editCard && "/edit-card" || "/add-card", form: e.target, token: user?.api_token });
    setLoading(false);
    setSubmited(false);
    if (resp && resp.code == 200) {
      if (editCard) {
        const removeOldCard = cards.filter(card => card.id != resp.data.id);
        setCards([resp.data, ...removeOldCard]);
      } else {
        setCards([resp.data, ...cards]);
      }
      setSubmited(true);
      setAddCard(false);
      return;
    }
    setError(resp.message);
  };

  return (
    <>
      <form noValidate onSubmit={e => addCard(e)}>
        <div className="space-y-2">
          <div className="w-full space-y-1 text-left">
            <label htmlFor="city" className="label_text text-[#000D23] text-sm">
              Card holder name
            </label>
            <input
              type="text"
              name="card_holder_name"
              className="input_field"
              placeholder="Your name"
              pattern={Validation?.cardholder?.pattern}
              defaultValue={editCard?.card_holder_name || ''}
            />
            <p className="error">{Validation?.cardholder?.msg}</p>
          </div>
          <div className="w-full space-y-1 text-left">
            <label htmlFor="state" className="label_text text-[#000D23] text-sm">
              Card number
            </label>
            <input
              type="text"
              name="card_number"
              className="input_field"
              placeholder="Card number"
              pattern={Validation?.cardnumber?.pattern}
              required
              defaultValue={editCard?.card_number || ''}
            />
            <p className="error">{Validation?.cardnumber?.msg}</p>
          </div>
          <div className="flex flex-col w-full gap-3 lg:flex-row">
            <div className="flex-1 w-full space-y-1 text-left">
              <label htmlFor="city" className="label_text text-[#000D23] text-sm">
                Expire on
              </label>
              <div className="flex gap-3 select">
                <Select key={month.value} onValueChange={value => {
                  setMonth({ value, error: false });
                  document.querySelector('input[name="expried_on"]').dispatchEvent(new Event('change'));
                }}>
                  <SelectTrigger
                    selected={month.value || (editCard && editCard.expried_on && editCard.expried_on.split('/')[0]) || ''} className={`w-auto [4.2rem] ${(month.error) && 'border-red-500 text-red-500'}`}
                  >
                    {month.value
                      || (editCard && editCard.expried_on && editCard.expried_on.split('/')[0])
                      || <SelectValue className="text-red-500" placeholder="MM" />}
                  </SelectTrigger>
                  <SelectContent className="text-black bg-white">
                    <SelectGroup>
                      <SelectLabel>Select Month</SelectLabel>
                      {months.map((month) => {
                        return <SelectItem
                          key={v4()}
                          value={month}
                          disabled={year.value == currentYear && (month <= currentMonth) && true || false}>
                          {month}
                        </SelectItem>
                      })}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Select onValueChange={value => {
                  currentYear == value && (month.value <= currentMonth) && setMonth({ value: '', error: true });
                  setYear({ value, error: false });
                  document.querySelector('input[name="expried_on"]').dispatchEvent(new Event('change'));
                }}>
                  <SelectTrigger selected={year.value || (editCard && editCard.expried_on && editCard.expried_on.split('/')[1]) || ''} className={`w-auto ${(year.error) && 'border-red-500 text-red-500'}`}>
                    {year.value
                      || (editCard && editCard.expried_on && editCard.expried_on.split('/')[1])
                      || <SelectValue placeholder="YYYY" />}
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectGroup>
                      {years.map((year) => <SelectItem key={v4()} value={year}>{year}</SelectItem>)}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <input
                type="hidden"
                name="expried_on"
                className="input_field"
                placeholder="MM/YYYY"
                defaultValue={`${month.value || editCard.expried_on && editCard.expried_on.split('/')[0] || ''}/${year.value || editCard.expried_on && editCard.expried_on.split('/')[1] || ''}`}
                pattern="\w{1,2}\/\w{2,4}"
                required
              />
              <p className="error">{Validation?.cardexpiry?.msg}</p>
            </div>
            <div className="w-full space-y-1 text-left">
              <label htmlFor="state" className="label_text text-[#000D23] text-sm"> CVV </label>
              <input
                type="text"
                name="cvv"
                className="input_field"
                placeholder="CVV"
                pattern={Validation?.cvv?.pattern}
                required
                defaultValue={editCard?.cvv || ''}
              />
              <p className="error">{Validation?.cvv?.msg}</p>
            </div>
          </div>
        </div>
        <p className="text-lg text-[#25324B] font-semibold mt-4 mb-2">Billing Address</p>
        <div className="space-y-2">
          <div className="flex flex-col w-full gap-3 lg:flex-row">
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <label htmlFor="city" className="label_text text-[#000D23] text-sm">
                First name
              </label>
              <input
                type="text"
                name="first_name"
                className="input_field"
                placeholder="First Name"
                pattern={Validation?.firstname?.pattern}
                required
                defaultValue={editCard?.first_name || ''}
              />
              <p className="error">{Validation?.firstname?.msg}</p>
            </div>
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <label
                htmlFor="state"
                className="label_text text-[#000D23] text-sm"
              >
                Last name
              </label>
              <input
                type="text"
                name="last_name"
                className="input_field"
                placeholder="Last Name"
                pattern={Validation?.lastname?.pattern}
                required
                defaultValue={editCard?.last_name || ''}
              />
              <p className="error">{Validation?.lastname?.msg}</p>
            </div>
          </div>
          <div className="flex flex-col w-full gap-3 lg:flex-row">
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <label htmlFor="city" className="label_text text-[#000D23] text-sm">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="input_field"
                placeholder="Email"
                pattern={Validation?.email?.pattern}
                required
                defaultValue={editCard?.email || ''}
              />
              <p className="error">{Validation?.email?.msg}</p>
            </div>
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <label
                htmlFor="state"
                className="label_text text-[#000D23] text-sm"
              >
                Phone
              </label>
              <input
                type="text"
                name="phone"
                className="input_field"
                placeholder="Phone"
                pattern={Validation?.phone?.pattern}
                maxLength={10}
                required
                defaultValue={editCard?.phone || ''}
              />
              <p className="error">{Validation?.phone?.msg}</p>
            </div>
          </div>
          <div className="w-full space-y-1 text-left">
            <label htmlFor="country" className="label_text">
              Address line 1
            </label>
            <input
              type="text"
              name="address_line_one"
              className="input_field"
              placeholder="Enter your Address"
              pattern={Validation?.address?.pattern}
              required
              defaultValue={editCard?.address_line_one || ''}
            />
            <p className="error">{Validation?.address?.msg}</p>
          </div>
          <div className="w-full space-y-1 text-left">
            <label htmlFor="country" className="label_text">
              Address line 2
            </label>
            <input
              type="text"
              name="address_line_two"
              className="input_field"
              placeholder="Enter your Address"
              defaultValue={editCard?.address_line_two || ''}
            />
          </div>
          <div className="flex flex-col w-full gap-3 lg:flex-row">
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <label htmlFor="city" className="label_text">
                City
              </label>
              <input
                type="text"
                name="city"
                className="input_field"
                placeholder="Enter your city"
                pattern={Validation?.city?.pattern}
                required
                defaultValue={editCard?.city || ''}
              />
              <p className="error">{Validation?.city?.msg}</p>
            </div>
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <label htmlFor="state" className="label_text">
                Postcode
              </label>
              <input
                type="text"
                name="postcode"
                className="input_field"
                placeholder="Postcode"
                pattern={Validation?.postcode?.pattern}
                maxlength="6"
                required
                defaultValue={editCard?.postcode || ''}
              />
              <p className="error">{Validation?.postcode?.msg}</p>
            </div>
          </div>
          <div className="flex flex-col items-stretch justify-start gap-2 pt-3 mx-auto">
            <input type="hidden" name="user_id" value={user?.id} />
            {editCard && <input type="hidden" name="id" value={editCard?.id} />}
            <Button type="submit" variant='primary' className="md:w-full" disabled={loading}>
              <Spinner show={loading} width='35' height='35' text="Save" />
            </Button>
            {error && <Error error={error} />}
          </div>
        </div>
      </form>
    </>
  );
};

export default EditCardModal;
