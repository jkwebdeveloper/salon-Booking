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

const EditCardModal = () => {

  const currentYear = new Date().getFullYear();
  const [month, setMonth] = React.useState({ value: '', error: false });
  const [year, setYear] = React.useState({ value: '', error: false });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [submited, setSubmited] = React.useState(false);

  const years = Array.from(new Array(10), (val, index) => currentYear + index);
  const months = Array.from(new Array(12), (val, index) => index + 1);

  const addCard = async (e) => {
    e.preventDefault();

    const monthVal = e.target.expried_on.value.split('/')[0];
    const yearVal = e.target.expried_on.value.split('/')[1];
    (!monthVal) && setMonth({ value: '', error: true });
    (!yearVal) && setYear({ value: '', error: true });

    setLoading(true);
    const userLocal = localStorage.getItem("user");
    const user = userLocal && JSON.parse(userLocal);
    const resp = await POST.request({ url: "/add-card", form: e.target, token: user?.api_token });
    setLoading(false);
    setSubmited(false);
    if (resp) {
      if (resp.status != 'Error' && Object.keys(resp.data).length > 0) {
        dispatch(login(resp.data));
        return;
      }
      setError(resp.message);
    }

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
              pattern="[A-Za-z]{4,20}"
            />
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
              pattern="[0-9]{16}"
              required
            />
          </div>
          <div className="flex flex-col w-full gap-3 lg:flex-row">
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <label htmlFor="city" className="label_text text-[#000D23] text-sm">
                Expire on
              </label>
              <div className="flex gap-3 select">
                <Select onValueChange={value => setMonth({ value, error: false })}>
                  <SelectTrigger className={`w-[180px] ${(month.error) && 'border-red-500 text-red-500'}`}>
                    {month.value || <SelectValue placeholder="MM" />}
                  </SelectTrigger>
                  <SelectContent className="text-black bg-white">
                    <SelectGroup>
                      <SelectLabel>Select Month</SelectLabel>
                      {months.map((month) => <SelectItem key={v4()} value={month}>{month}</SelectItem>)}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Select onValueChange={value => setYear({ value, error: false })}>
                  <SelectTrigger className={`w-[180px] ${(year.error) && 'border-red-500 text-red-500'}`}>
                    {year.value || <SelectValue placeholder="YYYY" />}
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
                defaultValue={month.value && year.value ? `${month.value}/${year.value}` : ""}
                required
              />
            </div>
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <label htmlFor="state" className="label_text text-[#000D23] text-sm"> CVV </label>
              <input
                type="text"
                name="cvv"
                className="input_field"
                placeholder="CVV"
                pattern="[0-9]{3,}"
                required
              />
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
                name="firstname"
                className="input_field"
                placeholder="Type here..."
              />
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
                name="lastname"
                className="input_field"
                placeholder="Type here"
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-3 lg:flex-row">
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <label htmlFor="city" className="label_text text-[#000D23] text-sm">
                Email
              </label>
              <input
                type="email"
                name="firstname"
                className="input_field"
                placeholder="Type here..."
              />
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
                name="lastname"
                className="input_field"
                placeholder="Type here"
              />
            </div>
          </div>
          <div className="w-full space-y-1 text-left">
            <label htmlFor="country" className="label_text">
              Address line 1
            </label>
            <input
              type="text"
              name="state"
              className="input_field"
              placeholder="Type here..."
            />
          </div>
          <div className="w-full space-y-1 text-left">
            <label htmlFor="country" className="label_text">
              Address line 2
            </label>
            <input
              type="text"
              name="state"
              className="input_field"
              placeholder="Type here..."
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
              />
            </div>
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <label htmlFor="state" className="label_text">
                Postcode
              </label>
              <input
                type="text"
                name="state"
                className="input_field"
                placeholder="Type here..."
              />
            </div>
          </div>
          <div className="flex flex-col items-stretch justify-start gap-2 pt-3 mx-auto">
            <Button type="submit" variant='primary' className="md:w-full" disabled={loading}>
              <Spinner show={loading} width='35' height='35' text="Login" />
            </Button>
            {error && <Error error={error} />}
          </div>
        </div>
      </form>
    </>
  );
};

export default EditCardModal;
