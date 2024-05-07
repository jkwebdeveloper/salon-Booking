import React from "react";
import Label from "@/components/ui/form/label";
import Button from "@/components/ui/button";
import { POST } from "@/app/api/post";
import { useSelector } from "react-redux";
import { Error, Spinner } from "@/components";
import { set } from "date-fns";

const CustomerModal = ({ setAddCustomer, setCustomers, customers }) => {
  const vendor = useSelector((state) => state.vendorAuth.vendor);

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const addCustomer = async (e) => {
    e.preventDefault();
    setLoading(true);
    const resp = await POST.request({ url: "/vendor/add-new-customer", form: e.target, token: vendor?.api_token });
    setLoading(false);
    if (resp && resp?.code == 200) {
      setCustomers([resp.data, ...customers]);
      setAddCustomer(false);
    } else {
      setError(resp.message);
    }
  };
  return (
    <form className="space-y-3" noValidate onSubmit={e => addCustomer(e)}>
      <div className="flex flex-col w-full gap-3 lg:flex-row">
        <div className="w-full space-y-1 text-left lg:w-1/2">
          <Label htmlFor="first_name" text="First Name" />
          <input
            type="text"
            name="first_name"
            className="input_field"
            placeholder="Enter First Name"
            pattern="[A-Za-z]{4,20}"
            required
          />
          <p className="error">Min 4 Character Required</p>
        </div>
        <div className="w-full space-y-1 text-left lg:w-1/2">
          <Label htmlFor="last_name" text="Last Name" />
          <input
            type="text"
            name="last_name"
            className="input_field"
            placeholder="Enter Last Name"
            pattern="[A-Za-z]{4,20}"
            required
          />
          <p className="error">Min 4 Character Required</p>
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
            pattern="[0-9]{10}"
            maxLength={10}
            required
          />
          <p className="error">Enter Valid Phone number</p>
        </div>
        <div className="w-full space-y-1 text-left lg:w-1/2">
          <Label htmlFor="email" text="E-mail" />
          <input
            type="text"
            name="email"
            className="input_field"
            placeholder="Enter E-mail"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required
          />
          <p className="error">Enter Valid Email id</p>
        </div>
      </div>
      <div className="flex flex-col w-full gap-3 lg:flex-row">
        <div className="w-full space-y-1 text-left lg:w-1/2">
          <Label htmlFor="gender" text="Gender" />
          <select name="gender" className="bg-white h-9 input_field">
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
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="first_name" text="Status" />
        <div className="flex items-center justify-start">
          <li class="w-full list-none">
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
          <li class="w-full list-none">
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
          <li class="w-full list-none">
            <div class="flex items-center">
              <input
                id="pending"
                type="radio"
                value="Pending"
                name="status"
              />
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
        />
      </div>
      <Button variant="primary" type="submit" className="w-full mx-auto" disabled={loading}>
        <Spinner
          show={loading}
          width="25"
          height="25"
          text="Submit"
        />
      </Button>
      {error && <Error error={error} />}
    </form>
  );
};

export default CustomerModal;
