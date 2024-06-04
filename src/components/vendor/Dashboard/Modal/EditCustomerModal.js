import React from "react";
import Label from "@/components/ui/form/label";
import Button from "@/components/ui/button";
import { POST } from "@/app/api/post";
import { useSelector } from "react-redux";
import { Error, Spinner } from "@/components";
import Validation from "@/constants/validation";

const EditCustomerModal = ({
  setEditDialog,
  setEditCustomer,
  setCustomers,
  editCustomer,
  customers,
}) => {
  const vendor = useSelector((state) => state.vendorAuth.vendor);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const updateCustomer = async (e) => {
    e.preventDefault();
    setLoading(true);
    const resp = await POST.request({
      url: "/vendor/update-customer",
      form: e.target,
      token: vendor?.api_token,
    });
    setLoading(false);
    if (resp && resp.code == 200) {
      const oldCustomers = customers.filter(
        (customer) => customer.id !== editCustomer.id
      );
      setCustomers([resp.data, ...oldCustomers]);
      setEditDialog(false);
      setEditCustomer("");
    }
  };

  return (
    <form className="space-y-3" onSubmit={(e) => updateCustomer(e)} noValidate>
      <div className="flex flex-col w-full gap-3 lg:flex-row">
        <div className="w-full space-y-1 text-left lg:w-1/2">
          <Label htmlFor="first_name" text="First Name" />
          <input
            type="text"
            name="first_name"
            className="input_field"
            placeholder="Enter First Name"
            pattern={Validation.firstname.pattern}
            defaultValue={editCustomer.first_name}
          />
          <p className="error">{Validation?.firstname?.msg}</p>
        </div>
        <div className="w-full space-y-1 text-left lg:w-1/2">
          <Label htmlFor="last_name" text="Last Name" />
          <input
            type="text"
            name="last_name"
            className="input_field"
            placeholder="Enter Last Name"
            pattern={Validation.lastname.pattern}
            defaultValue={editCustomer.last_name}
          />
          <p className="error">{Validation?.lastname?.msg}</p>
        </div>
      </div>
      <div className="flex flex-col w-full gap-3 lg:flex-row">
        <div className="w-full space-y-1 text-left lg:w-1/2">
          <Label htmlFor="phone_number" text="Mobile Number" />
          <input
            type="text"
            name="phone_number"
            className="input_field"
            placeholder="Enter Mobile Number"
            pattern={Validation.phone.pattern}
            maxLength={10}
            defaultValue={editCustomer.phone_number}
          />
          <p className="error">{Validation?.phone?.msg}</p>
        </div>
        <div className="w-full space-y-1 text-left lg:w-1/2">
          <Label htmlFor="email" text="E-mail" />
          <input
            type="email"
            name="email"
            className="input_field"
            placeholder="Enter E-mail"
            pattern={Validation.email.pattern}
            defaultValue={editCustomer.email}
          />
          <p className="error">{Validation?.email?.msg}</p>
        </div>
      </div>
      <div className="flex flex-col w-full gap-3 lg:flex-row">
        <div className="w-full space-y-1 text-left lg:w-1/2">
          <Label htmlFor="gender" text="Gender" />
          <select
            name="gender"
            className="bg-white h-9 input_field"
            defaultValue={editCustomer.gender}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="w-full space-y-1 text-left lg:w-1/2">
          <Label htmlFor="dob" text="Date of Birth" />
          <input
            type="date"
            name="dob"
            className="input_field"
            placeholder="Enter Date of Birth"
            defaultValue={editCustomer.dob}
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="first_name" text="Status" />
        <div className="flex flex-wrap items-center justify-start gap-5">
          <li class="list-none">
            <div class="flex items-center">
              <input
                type="radio"
                value="Active"
                id="active"
                name="status"
                defaultChecked
              />
              <label
                for="active"
                class="w-full ms-2 text-sm font-medium text-gray-900 "
              >
                Active
              </label>
            </div>
          </li>
          <li class="list-none">
            <div class="flex items-center">
              <input
                id="inactive"
                type="radio"
                value="Inactive"
                name="status"
              />
              <label
                for="inactive"
                class="w-full ms-2 text-sm font-medium text-gray-900 "
              >
                Inactive
              </label>
            </div>
          </li>
          <li class="list-none">
            <div class="flex items-center">
              <input id="pending" type="radio" value="Pending" name="status" />
              <label
                for="pending"
                class="w-full ms-2 text-sm font-medium text-gray-900 "
              >
                Pending
              </label>
            </div>
          </li>
        </div>
      </div>
      <div className="w-full space-y-1 text-left">
        <Label htmlFor="comments" text="Comment" />
        <textarea
          type="textarea"
          rows="4"
          name="comments"
          className="input_field"
          placeholder="Type here..."
          defaultValue={editCustomer.comments}
        />
      </div>
      <input type="hidden" name="customers_id" value={editCustomer.id} />
      <Button
        variant="primary"
        type="submit"
        className="flex items-center justify-center w-full mx-auto"
        disabled={loading}
      >
        <Spinner show={loading} width="25" height="25" text="Save" />
      </Button>
      {error && <Error error={error} />}
    </form>
  );
};

export default EditCustomerModal;
