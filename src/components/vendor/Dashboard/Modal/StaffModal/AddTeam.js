import Button from "@/components/ui/button";
import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";

import Image from "next/image";
import Label from "@/components/ui/form/label";
import { DatePicker } from "@/components/user/Home/FindNearByForm/datepicker";
import { POST } from "@/app/api/post";
import { Error, Spinner } from "@/components";
import { useSelector } from "react-redux";

const AddTeam = () => {
  const [basic, setBasic] = useState(false);
  const [services, setServices] = useState(true);
  const [publicProfile, setPublicProfile] = useState(false);
  const [staff, setStaff] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const vendor = useSelector((state) => state.vendorAuth.vendor);

  const addStaff = async (e) => {
    e.preventDefault();
    setLoading(true);
    const resp = await POST.request({
      url: "/vendor/add-new-staffs",
      form: e.target,
      token: vendor.api_token,
    });
    setLoading(false);
    if (resp && resp.code == 200) {
      setStaff(resp.data);
      setBasic(false);
      setServices(true);
    } else {
      setError(resp.message);
    }
  };

  const updateStaff = async (e) => {
    e.preventDefault();
    setLoading(true);
    const resp = await POST.request({
      url: "/vendor/update-staffssss",
      form: e.target,
    });
    setLoading(false);
    if (resp && resp.code == 200) {
      setStaff(resp.data);
      setBasic(false);
      setServices(true);
    } else {
      setError(resp.message);
    }
  };

  const handleBasicClick = () => {
    setBasic(true);
    setServices(false);
    setPublicProfile(false);
  };

  const handleServicesClick = () => {
    setBasic(false);
    setServices(true);
    setPublicProfile(false);
  };

  const handleProfileClick = () => {
    setBasic(false);
    setServices(false);
    setPublicProfile(true);
  };

  <Button variant="secondary">Basic Info</Button>;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Button
          variant={basic ? "secondary" : "disable"}
          onClick={handleBasicClick}
        >
          Basic Info
        </Button>
        <Button
          variant={services ? "secondary" : "disable"}
          onClick={handleServicesClick}
          // disabled={Object.keys(staff).length === 0}
        >
          Services
        </Button>
        <Button
          variant={publicProfile ? "secondary" : "disable"}
          onClick={handleProfileClick}
          // disabled={Object.keys(staff).length === 0}
        >
          Public Profile
        </Button>
      </div>
      {basic && (
        <form className="space-y-3" onSubmit={(e) => addStaff(e)} noValidate>
          <div className="border relative border-1 border-[#0AADA4] rounded-full p-1 w-[3.5rem] h-[3.5rem] mb-2">
            <Image
              src="/static/images/user.webp"
              alt="profile"
              loading="lazy"
              className="object-cover w-full h-full rounded-full z-1"
              width={50}
              height={50}
            />
            <input
              type="file"
              className="absolute top-0 bottom-0 left-0 right-0 mt-2 cursor-pointer rounded-full max-w-[3.5rem] mx-auto opacity-0 z-2"
              name="photo"
            />
            <FaCamera className="absolute top-4 left-4  p-[4px] text-2xl text-white rounded-full bottom-0" />
          </div>
          <div className="flex flex-col w-full gap-3 lg:flex-row">
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <Label htmlFor="first_name" text="First name" />
              <input
                type="text"
                name="first_name"
                className="input_field"
                placeholder="Enter your First name"
                pattern="[A-Za-z0-9]{3,20}"
                required
              />
            </div>
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <Label htmlFor="last_name" text="Last name" />
              <input
                type="text"
                name="last_name"
                className="input_field"
                placeholder="Enter your Last name"
                pattern="[A-Za-z0-9]{3,20}"
                required
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-3 lg:flex-row">
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <Label htmlFor="email" text="Email" />
              <input
                type="email"
                name="email"
                className="input_field"
                placeholder="Enter your email"
                pattern="[A-Za-z]{4,20}"
                required
              />
            </div>
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <Label htmlFor="phone_number" text="Phone Number" />
              <input
                type="text"
                name="phone_number"
                className="input_field"
                placeholder="Enter your Phone Number"
                pattern="[0-9]{10}"
                required
              />
            </div>
          </div>
          <div className="space-y-1 ">
            <Label htmlFor="dob" text="Date of Birth" />
            <div className="w-full rounded-md border-[#eae9e9]">
              <input
                type="date"
                name="dob"
                className="w-full input_field sm:max-w-[200px]"
                placeholder="Enter your Phone Number"
                required
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="disable" disabled={loading}>
              Cancel
            </Button>
            <Button variant="primary" type="submit" disabled={loading}>
              <Spinner show={loading} width="25" height="25" text="Save" />
            </Button>
          </div>
          {error && <Error error={error} />}
        </form>
      )}
      {services && (
        <form className="space-y-2" onSubmit={(e) => updateStaff(e)} noValidate>
          <p className="text-xl text-[#1D1B23] font-semibold">
            What service can be booked for this employee ?
          </p>
          <li class="w-full list-none">
            <div class="flex items-center">
              <input id="list-radio-license" type="checkbox" value="" />
              <label
                for="list-radio-license"
                class="w-full ms-2 text-sm font-medium text-gray-900 "
              >
                All Services
              </label>
            </div>
          </li>
          <div className="border space-y-3 rounded-lg border-[#D8DAE5] bg-[#FAFAFA] p-3">
            <li class="w-full list-none">
              <div class="flex items-center">
                <input
                  id="lMassage"
                  type="checkbox"
                  value="Massage"
                  name="services[]"
                  class=""
                />
                <label
                  for="Massage"
                  class="w-full ms-2 text-base font-semibold"
                >
                  Massage
                </label>
              </div>
            </li>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <li class="w-full list-none">
                <div class="flex items-center">
                  <input
                    id="list-radio-license"
                    type="checkbox"
                    value="Acupuncture Massage"
                    name="services[]"
                    class=""
                  />
                  <label
                    for="list-radio-license"
                    class="w-full ms-2 text-sm font-normal"
                  >
                    Acupuncture Massage
                  </label>
                </div>
              </li>
              <li class="w-full list-none">
                <div class="flex items-center">
                  <input
                    id="list-radio-license"
                    type="checkbox"
                    value="Aromatherapy Massage"
                    name="services[]"
                    class=""
                  />
                  <label
                    for="list-radio-license"
                    class="w-full ms-2 text-sm font-normal"
                  >
                    Aromatherapy Massage
                  </label>
                </div>
              </li>
              <li class="w-full list-none">
                <div class="flex items-center">
                  <input
                    id="list-radio-license"
                    type="checkbox"
                    value="Back, Neck & Shoulders"
                    name="services[]"
                    class=""
                  />
                  <label
                    for="list-radio-license"
                    class="w-full ms-2 text-sm font-normal"
                  >
                    Back, Neck & Shoulders
                  </label>
                </div>
              </li>
              <li class="w-full list-none">
                <div class="flex items-center">
                  <input
                    id="list-radio-license"
                    type="checkbox"
                    value="Chair Massage"
                    name="services[]"
                    class=""
                  />
                  <label
                    for="list-radio-license"
                    class="w-full ms-2 text-sm font-normal"
                  >
                    Chair Massage
                  </label>
                </div>
              </li>
              <li class="w-full list-none">
                <div class="flex items-center">
                  <input
                    id="list-radio-license"
                    type="checkbox"
                    value="Biodynamic Massage"
                    name="services[]"
                    class=""
                  />
                  <label
                    for="list-radio-license"
                    class="w-full ms-2 text-sm font-normal"
                  >
                    Biodynamic Massage
                  </label>
                </div>
              </li>
              <li class="w-full list-none">
                <div class="flex items-center">
                  <input
                    id="list-radio-license"
                    type="checkbox"
                    value="Body Scrub Massage"
                    name="services[]"
                    class=""
                  />
                  <label
                    for="list-radio-license"
                    class="w-full ms-2 text-sm font-normal"
                  >
                    Body Scrub Massage
                  </label>
                </div>
              </li>
            </div>
          </div>
          <div className="border space-y-3 rounded-lg border-[#D8DAE5] bg-[#FAFAFA] p-3">
            <li class="w-full list-none">
              <div class="flex items-center">
                <input
                  id="list-radio-license"
                  type="checkbox"
                  value="Nail Salons"
                  name="services[]"
                  class=""
                />
                <label
                  for="list-radio-license"
                  class="w-full ms-2 text-base font-semibold"
                >
                  Nail Salons
                </label>
              </div>
            </li>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <li class="w-full list-none">
                <div class="flex items-center">
                  <input
                    id="list-radio-license"
                    type="checkbox"
                    value="Acupuncture Massage"
                    name="services[]"
                    class=""
                  />
                  <label
                    for="list-radio-license"
                    class="w-full ms-2 text-sm font-normal"
                  >
                    Acupuncture Massage
                  </label>
                </div>
              </li>
              <li class="w-full list-none">
                <div class="flex items-center">
                  <input
                    id="list-radio-license"
                    type="checkbox"
                    value="Aromatherapy Massage"
                    name="services[]"
                    class=""
                  />
                  <label
                    for="list-radio-license"
                    class="w-full ms-2 text-sm font-normal"
                  >
                    Aromatherapy Massage
                  </label>
                </div>
              </li>
              <li class="w-full list-none">
                <div class="flex items-center">
                  <input
                    id="list-radio-license"
                    type="checkbox"
                    value="Back, Neck & Shoulders"
                    name="services[]"
                    class=""
                  />
                  <label
                    for="list-radio-license"
                    class="w-full ms-2 text-sm font-normal"
                  >
                    Back, Neck & Shoulders
                  </label>
                </div>
              </li>
              <li class="w-full list-none">
                <div class="flex items-center">
                  <input
                    id="list-radio-license"
                    type="checkbox"
                    value="Chair Massage"
                    name="services[]"
                    class=""
                  />
                  <label
                    for="list-radio-license"
                    class="w-full ms-2 text-sm font-normal"
                  >
                    Chair Massage
                  </label>
                </div>
              </li>
              <li class="w-full list-none">
                <div class="flex items-center">
                  <input
                    id="list-radio-license"
                    type="checkbox"
                    value="Biodynamic Massage"
                    name="services[]"
                    class=""
                  />
                  <label
                    for="list-radio-license"
                    class="w-full ms-2 text-sm font-normal"
                  >
                    Biodynamic Massage
                  </label>
                </div>
              </li>
              <li class="w-full list-none">
                <div class="flex items-center">
                  <input
                    id="list-radio-license"
                    type="checkbox"
                    value="Body Scrub Massage"
                    name="services[]"
                    class=""
                  />
                  <label
                    for="list-radio-license"
                    class="w-full ms-2 text-sm font-normal"
                  >
                    Body Scrub Massage
                  </label>
                </div>
              </li>
            </div>
          </div>
          <div className="border space-y-3 rounded-lg border-[#D8DAE5] bg-[#FAFAFA] p-3">
            <li class="w-full list-none">
              <div class="flex items-center">
                <input
                  id="list-radio-license"
                  type="checkbox"
                  value="Hair Removal"
                  name="services[]"
                  class=""
                />
                <label
                  for="list-radio-license"
                  class="w-full ms-2 text-base font-semibold"
                >
                  Hair Removal
                </label>
              </div>
            </li>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <li class="w-full list-none">
                <div class="flex items-center">
                  <input
                    id="list-radio-license"
                    type="checkbox"
                    value="Acupuncture Massage"
                    name="services[]"
                    class=""
                  />
                  <label
                    for="list-radio-license"
                    class="w-full ms-2 text-sm font-normal"
                  >
                    Acupuncture Massage
                  </label>
                </div>
              </li>
              <li class="w-full list-none">
                <div class="flex items-center">
                  <input
                    id="list-radio-license"
                    type="checkbox"
                    value="Aromatherapy Massage"
                    name="services[]"
                    class=""
                  />
                  <label
                    for="list-radio-license"
                    class="w-full ms-2 text-sm font-normal"
                  >
                    Aromatherapy Massage
                  </label>
                </div>
              </li>
              <li class="w-full list-none">
                <div class="flex items-center">
                  <input
                    id="list-radio-license"
                    type="checkbox"
                    value="Back, Neck & Shoulders"
                    name="services[]"
                    class=""
                  />
                  <label
                    for="list-radio-license"
                    class="w-full ms-2 text-sm font-normal"
                  >
                    Back, Neck & Shoulders
                  </label>
                </div>
              </li>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="disable">Cancel</Button>
            <Button variant="primary">Save</Button>
            <Button variant="danger">Delete</Button>
          </div>
        </form>
      )}
      {publicProfile && (
        <>
          <div className="space-y-4">
            <div className="w-full space-y-1 text-left">
              <Label htmlFor="email" text="Job Title" />
              <input
                type="text"
                name="Job Title"
                className="input_field"
                placeholder="Enter your Job Title"
              />
            </div>
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <Label htmlFor="phone_number" text="Job Bio" />
              <input
                type="text"
                name="phone_number"
                className="input_field"
                placeholder="Enter your Job Bio"
              />
            </div>
            <div className="flex items-center gap-3">
              <Button variant="disable">Cancel</Button>
              <Button variant="primary">Save</Button>
              <Button variant="danger">Delete</Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AddTeam;
