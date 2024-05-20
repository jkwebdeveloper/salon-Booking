import Button from "@/components/ui/button";
import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";

import Image from "next/image";
import Label from "@/components/ui/form/label";
import { POST } from "@/app/api/post";
import { Error, Spinner } from "@/components";
import { useSelector } from "react-redux";

const AddTeam = ({ setAddTeam, editStaff, staffs, setStaffs, setEditStaff }) => {
  const vendor = useSelector((state) => state.vendorAuth.vendor);
  const [staff, setStaff] = useState(editStaff || {});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentTab, setCurrentTab] = useState("basic");

  const changeTab = (tab = 'basic') => setCurrentTab(tab);

  const addStaff = async (e) => {
    e.preventDefault();
    setLoading(true);
    const resp = await POST.request({ url: '/vendor/add-new-staffs', form: e.target, token: vendor.api_token });
    setLoading(false);
    if (resp && resp.code == 200) {
      const newStaffMember = staffs.filter(staff => staff.id != resp.data.id);
      setStaffs([...newStaffMember, resp.data]);
      setStaff(resp.data);
      changeTab('services');
    } else {
      setError(resp.message);
    }
  };

  const updateStaff = async ({ e, step }) => {
    e.preventDefault();
    setLoading(true);
    const resp = await POST.request({ url: '/vendor/update-staffs', form: e.target, token: vendor.api_token });
    setLoading(false);
    if (resp && resp.code == 200) {
      const newStaffMember = staffs.filter(staff => staff.id != resp.data.id);
      setStaffs([...newStaffMember, resp.data]);
      if (!step) {
        setEditStaff('');
        setAddTeam(false);
        return;
      }
      setStaff(resp.data);
      changeTab(step);
    } else {
      setError(resp.message);
      return;
    }
  };

  const deleteStaff = async () => {
    setLoading(true);
    const res = await POST.request({ url: '/vendor/delete-staffs', form: { staffs_id: staff.id }, token: vendor?.api_token });
    setLoading(false);
    if (res && res.code == 200) {
      const newStaffMember = staffs.filter(deletedStaff => deletedStaff.id != staff.id);
      setStaffs(newStaffMember);
      setEditStaff('');
      setAddTeam(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Button
          variant={(currentTab == 'basic') ? "secondary" : "disable"}
          onClick={e => changeTab()}
        >
          Basic Info
        </Button>
        <Button
          variant={currentTab == 'services' ? "secondary" : "disable"}
          onClick={e => changeTab('services')}
        // disabled={Object.keys(staff).length == 0}
        >
          Services
        </Button>
        <Button
          variant={currentTab == 'publicProfile' ? "secondary" : "disable"}
          onClick={e => changeTab('publicProfile')}
        // disabled={Object.keys(staff).length == 0}
        >
          Public Profile
        </Button>
      </div>
      {currentTab == 'basic' && (
        <form className="space-y-3" onSubmit={e => Object.keys(staff).length > 0 && updateStaff({ e, step: 'services' }) || addStaff(e)} noValidate>
          <div className="border relative border-1 border-[#0AADA4] rounded-full p-1 w-[3.5rem] h-[3.5rem] mb-2">
            <Image
              src={staff && (process.env.NEXT_PUBLIC_SERVERURL + staff.photo) || '/images/user.png'}
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
                defaultValue={staff && staff.first_name || ''}
                required
              />
              <p className="error">Min 3 Character Required</p>
            </div>
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <Label htmlFor="last_name" text="Last name" />
              <input
                type="text"
                name="last_name"
                className="input_field"
                placeholder="Enter your Last name"
                pattern="[A-Za-z0-9]{3,20}"
                defaultValue={staff && staff.last_name || ''}
                required
              />
              <p className="error">Min 3 Character Required</p>
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
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                defaultValue={staff && staff.email || ''}
                required
              />
              <p className="error">Enter Valid Email id</p>
            </div>
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <Label htmlFor="mobile" text="Phone Number" />
              <input
                type="text"
                name="mobile"
                className="input_field"
                placeholder="Enter your Phone Number"
                pattern="[0-9]{10}"
                defaultValue={staff && staff.mobile || ''}
                required
              />
              <p className="error">Enter Valid Phone number</p>
            </div>
          </div>
          <div className="space-y-1 ">
            <Label htmlFor="dob" text="Date of Birth" />
            <div className="w-full rounded-md border-[#eae9e9] dateField">
              <input
                type="date"
                name="dob"
                className="w-full input_field sm:max-w-[200px]"
                placeholder="Enter your Phone Number"
                defaultValue={staff && staff.dob || ''}
                pattern="\d{4}-\d{1,2}-\d{1,2}"
                required
              />
              <p className="error">Enter Valid Birth Date</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {Object.keys(staff).length > 0 && <input type="hidden" name="staffs id" value={staff.id} />}
            <Button variant="disable" disabled={loading} onClick={e => {
              setEditStaff('');
              setAddTeam(false);
            }}>Cancel</Button>
            <Button variant="primary" type="submit" disabled={loading}>
              <Spinner
                show={loading}
                width="25"
                height="25"
                text="Save"
              />
            </Button>
            {Object.keys(staff).length > 0 && <Button variant="danger" onClick={e => deleteStaff()} disabled={loading}>Delete</Button>}
          </div>
          {error && <Error error={error} />}
        </form>
      )}
      {currentTab == 'services' && (
        <form className="space-y-2" onSubmit={e => updateStaff({ e, step: 'publicProfile' })} noValidate>
          <p className="text-xl text-[#1D1B23] font-semibold">
            What service can be booked for this employee ?
          </p>
          <li class="w-full list-none">
            <div class="flex items-center">
              <input
                id="list-radio-license"
                type="checkbox"
                value=""
              />
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
            {Object.keys(staff).length > 0 && <input type="hidden" name="staffs id" value={staff.id} />}
            <Button variant="disable" disabled={loading} onClick={e => {
              setEditStaff('');
              setAddTeam(false);
            }}>Cancel</Button>
            <Button variant="primary" type="submit">Save</Button>
            <Button variant="danger" onClick={e => deleteStaff()} disabled={loading}>Delete</Button>
          </div>
        </form>
      )}
      {currentTab == 'publicProfile' && (
        <>
          <form className="space-y-4" onSubmit={e => updateStaff({ e, step: '' })} noValidate>
            <div className="w-full space-y-1 text-left">
              <Label htmlFor="job_title" text="Job Title" />
              <input
                type="text"
                name="job_title"
                id="job_title"
                className="input_field"
                placeholder="Enter your Job Title"
                pattern="[A-Za-z0-9]{3,20}"
                defaultValue={staff && staff.job_title || ''}
                required
              />
              <p className="error">Min 3 Character Required</p>
            </div>
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <Label htmlFor="job_bio" text="Job Bio" />
              <input
                type="text"
                name="job_bio"
                id="job_bio"
                className="input_field"
                placeholder="Enter your Job Bio"
                defaultValue={staff && staff.job_bio || ''}
              />
            </div>
            <div className="flex items-center gap-3">
              {Object.keys(staff).length > 0 && <input type="hidden" name="staffs id" value={staff.id} />}
              <Button variant="disable" disabled={loading} onClick={e => {
                setEditStaff('');
                setAddTeam(false);
              }}>Cancel</Button>
              <Button variant="primary" type="submit" disabled={loading}>
                <Spinner
                  show={loading}
                  width="25"
                  height="25"
                  text="Save"
                />
              </Button>
              <Button variant="danger" onClick={e => deleteStaff()} disabled={loading}>Delete</Button>
            </div>
            {error && <Error error={error} />}
          </form>
        </>
      )}
    </div>
  );
};

export default AddTeam;
