import Button from "@/components/ui/button";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { FaCamera } from "react-icons/fa";

import Image from "next/image";
import Label from "@/components/ui/form/label";
import { POST } from "@/app/api/post";
import { Error, Spinner } from "@/components";
import { useSelector } from "react-redux";
import { useVendorServices } from "@/hooks";
import { v4 } from "uuid";
import Validation from "@/constants/validation";
import { DatePicker } from "@/components/user/Home/FindNearByForm/datepicker";
import { set } from "date-fns";

const AddTeam = ({
  setAddTeam,
  editStaff,
  staffsList,
  setStaffsList,
  setEditStaff,
}) => {
  const vendor = useSelector((state) => state.vendorAuth.vendor);
  const [getServices, vendorServices] = useVendorServices();
  const [calendarOpen, setCalendarOpen] = React.useState(false);
  const [userImage, setUserImage] = useState({});
  const [staff, setStaff] = useState(editStaff || {});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentTab, setCurrentTab] = useState("basic");
  const [staffServices, setStaffServices] = useState((staff && staff?.staff_service) || []); //(staff && staff?.staff_service) || []
  const [birthDate, setBirthDate] = useState(staff?.dob || "");
  const [selected, setSelected] = useState([]);

  const changeTab = (tab = "basic") => setCurrentTab(tab);

  const changeSelectService = (e) => {
    const checked = document.querySelectorAll('.serviceList input[type="checkbox"]:checked');
    const checkBoxes = document.querySelectorAll('.serviceList input[type="checkbox"]');
    if (checked.length == checkBoxes.length) document.querySelector('#selectAll').checked = true;
    else document.querySelector('#selectAll').checked = false;
  };

  const handleFile = (e) => {
    const allowedType = ["image/jpeg", "image/x-png", "image/png", "image/webp"];
    if (allowedType.includes(e.target.files[0].type)) {
      const path = (window.URL || window.webkitURL).createObjectURL(e.target.files[0]);
      setUserImage({ id: v4(), path: path, data: e.target.files[0] });
    }
  };

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
      const newStaffMember = staffsList.filter(
        (staff) => staff.id != resp.data.id
      );
      setStaffsList([...newStaffMember, resp.data]);
      setStaff(resp.data);
      changeTab("services");
    } else {
      setError(resp.message);
    }
  };

  const updateStaff = async ({ e, step }) => {
    e.preventDefault();
    setLoading(true);
    const resp = await POST.request({
      url: "/vendor/update-staffs",
      form: e.target,
      token: vendor.api_token,
    });
    setLoading(false);
    if (resp && resp.code == 200) {
      const newStaffMember = staffsList.filter(
        (staff) => staff.id != resp.data.id
      );
      setStaffsList([...newStaffMember, resp.data]);
      if (!step) {
        setEditStaff("");
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
    const res = await POST.request({
      url: "/vendor/delete-staffs",
      form: { staffs_id: staff.id },
      token: vendor?.api_token,
    });
    setLoading(false);
    if (res && res.code == 200) {
      const newStaffMember = staffsList.filter(
        (deletedStaff) => deletedStaff.id != staff.id
      );
      setStaffsList(newStaffMember);
      setEditStaff("");
      setAddTeam(false);
    }
  };

  const setPublicProfile = async ({ e, step }) => {
    e.preventDefault();
    setLoading(true);
    const resp = await POST.request({
      url: "/vendor/set-public-staffs-profile",
      form: e.target,
      token: vendor.api_token,
    });
    setLoading(false);
    if (resp && resp.code == 200) {
      setEditStaff("");
      setAddTeam(false);
    } else {
      setError(resp.message);
    }
  };
  const addStaffServices = async (e) => {
    e.preventDefault();
    setLoading(true);
    const resp = await POST.request({
      url: "/vendor/add-or-update-staffs-services",
      form: staffServices,
      token: vendor.api_token,
    });
    setLoading(false);
    if (resp && resp.code == 200) {
      changeTab("publicProfile");
    } else {
      setError(resp.message);
    }
  };

  useEffect(() => {
    setError(null);
  }, [currentTab]);
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Button
          variant={currentTab == "basic" ? "secondary" : "disable"}
          onClick={(e) => changeTab()}
        >
          Basic Info
        </Button>
        <Button
          variant={currentTab == "services" ? "secondary" : "disable"}
          onClick={(e) => changeTab("services")}
          disabled={Object.keys(staff).length == 0}
        >
          Services
        </Button>
        <Button
          variant={currentTab == "publicProfile" ? "secondary" : "disable"}
          onClick={(e) => changeTab("publicProfile")}
          disabled={Object.keys(staff).length == 0}
        >
          Public Profile
        </Button>
      </div>
      {currentTab == "basic" && (
        <form
          className="space-y-3"
          onSubmit={(e) =>
            (Object.keys(staff).length > 0 &&
              updateStaff({ e, step: "services" })) ||
            addStaff(e)
          }
          noValidate
        >
          <div className="border relative border-1 border-[#0AADA4] rounded-full p-1 w-[3.5rem] h-[3.5rem] mb-2">
            <Image
              src={
                userImage?.path ||
                (staff &&
                  staff?.photo &&
                  process.env.NEXT_PUBLIC_SERVERURL + staff?.photo) ||
                "/static/images/user.webp"
              }
              alt="profile"
              loading="lazy"
              className={`object-cover w-full h-full rounded-full z-1`}
              width={50}
              height={50}
            />
            <input
              type="file"
              className="absolute top-0 bottom-0 left-0 right-0 mt-2 cursor-pointer rounded-full max-w-[3.5rem] mx-auto opacity-0 z-10"
              name="photo"
              onChange={(e) => handleFile(e)}
            />
            <div className="absolute flex items-center justify-center w-full h-full rounded-full bg-neutral-900/20 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
              <FaCamera className="p-[4px] text-3xl text-white opacity-70" />
            </div>
          </div>
          <div className="flex flex-col w-full gap-3 lg:flex-row">
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <Label htmlFor="sur_name" text="Surname" className={'tracking-wide'} />
              <input
                type="text"
                name="sur_name"
                className="input_field"
                placeholder="Enter your Surname"
                pattern={Validation?.surname?.pattern}
                defaultValue={(staff && staff.first_name) || ""}
                required
              />
              <p className="error">{Validation?.surname?.msg}</p>
            </div>
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <Label htmlFor="first_name" text="First name" />
              <input
                type="text"
                name="first_name"
                className="input_field"
                placeholder="Enter your First name"
                pattern={Validation?.firstname?.pattern}
                defaultValue={(staff && staff.first_name) || ""}
                required
              />
              <p className="error">{Validation?.firstname?.msg}</p>
            </div>
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <Label htmlFor="last_name" text="Last name" />
              <input
                type="text"
                name="last_name"
                className="input_field"
                placeholder="Enter your Last name"
                pattern={Validation?.lastname?.pattern}
                defaultValue={(staff && staff.last_name) || ""}
                required
              />
              <p className="error">{Validation?.lastname?.msg}</p>
            </div>
          </div>
          <div className="flex flex-col w-full gap-3 lg:flex-row">
            <div className="w-full space-y-1 text-left lg:w-1/3">
              <Label htmlFor="email" text="Email" />
              <input
                type="email"
                name="email"
                className="input_field"
                placeholder="Enter your email"
                pattern={Validation?.email?.pattern}
                defaultValue={(staff && staff.email) || ""}
                required
              />
              <p className="error">{Validation?.email?.msg}</p>
            </div>
            <div className="w-full space-y-1 text-left lg:w-1/3">
              <Label htmlFor="mobile" text="Phone Number" />
              <input
                type="text"
                name="mobile"
                className="input_field"
                placeholder="Enter your Phone Number"
                pattern={Validation?.phone?.pattern}
                defaultValue={(staff && staff.mobile) || ""}
                required
              />
              <p className="error">{Validation?.phone?.msg}</p>
            </div>
            <div className="w-full space-y-1 text-left lg:w-1/3">
              <Label htmlFor="dob" text="Date of Birth" />
              <div
                className="border rounded-sm z-[99999] flex-grow"
                onClick={(e) => setCalendarOpen(true)}
              >
                <DatePicker
                  className={"px-3 py-[17px] h-8 rounded-md overflow-hidden"}
                  defaultOpen={calendarOpen}
                  onSelect={(date) => setBirthDate(date)}
                  setCalendarOpen={setCalendarOpen}
                  key={calendarOpen}
                  name={"dob"}
                  maxDate={new Date()}
                  defaultValue={birthDate}
                  placeholder="Enter Date of Birth"
                  yearSelection
                  disabledDays={{ after: new Date() }}
                />
                <p className="error">{Validation?.dob?.msg}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start gap-3">
            <Button variant="primary" type="submit" disabled={loading}>
              <Spinner show={loading} width="25" height="25" text="Save" />
            </Button>
            {Object.keys(staff).length > 0 && (
              <input type="hidden" name="staffs id" value={staff.id} />
            )}
            <Button
              variant="disable"
              disabled={loading}
              onClick={(e) => {
                setEditStaff("");
                setAddTeam(false);
              }}
            >
              Cancel
            </Button>
            {Object.keys(staff).length > 0 && (
              <Button
                variant="danger"
                onClick={(e) => deleteStaff()}
                disabled={loading}
              >
                Delete
              </Button>
            )}
          </div>
          {error && <Error error={error} />}
        </form>
      )}
      {currentTab == "services" && (
        <form
          className="space-y-2"
          onSubmit={(e) => addStaffServices(e)}
          noValidate
        >
          <p className="font-semibold">
            What service can be booked for this employee ?
          </p>
          <div className="flex items-center">
            { }
            <input
              id="selectAll"
              type="checkbox"
              className="accent-primary"
              defaultChecked={!vendorServices?.loading && vendorServices.length == vendorServices?.data.map(service => service.group_service_list.map(group => group.id)).flat().length}
              onChange={e => {
                if (e.target.checked) {
                  setStaffServices(vendorServices?.data.map(service => service.group_service_list.map(group => ({
                    vendors_service_id: group.id, categories_id: service.categories_id,
                    sub_categories_id: group?.sub_categories?.id, staffs_id: staff.id,
                  }))).flat());
                } else {
                  setStaffServices([]);
                }
              }}
            />
            <label
              htmlFor="selectAll"
              className="w-full text-sm font-medium text-gray-900 ms-2 "
            >
              All Services
            </label>
          </div>
          <div className="w-full serviceList space-y-2 overflow-auto max-h-[22rem] rounded-md border border-[#D8DAE5] bg-[#FAFAFA] p-2">
            {console.log(editStaff)}
            {vendorServices?.loading && <Spinner show={true} width={40} height={40} />}
            {!vendorServices?.loading && vendorServices?.data.map((service) => {
              const services = Object.groupBy(service?.group_service_list, ({ sub_categories_id }) => sub_categories_id);
              return Object.keys(services).length > 0
                && <Fragment key={v4()}>
                  <p className="font-semibold">{service?.categories?.title}</p>
                  <div className="grid items-start grid-cols-1 gap-3 xl:grid-cols-2">
                    {Object.keys(services).map((key) => {
                      return (
                        <div key={v4()} className="w-full bg-[white] border border-[#D9D9D9] rounded-md space-y-2 p-2">
                          <p className="text-sm font-semibold">{services[key][0]?.sub_categories?.title}</p>
                          {services[key].map((group) => (
                            <Fragment key={v4()}>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <input
                                    id={group?.service_title.replace(/\s/g, "")}
                                    type="checkbox"
                                    className="accent-primary"
                                    required
                                    defaultChecked={staffServices.some(service => service.vendors_service_id == group.id)}
                                    onChange={e => {
                                      if (e.target.checked) {
                                        setStaffServices([...staffServices, {
                                          vendors_service_id: group.id, categories_id: service.categories_id,
                                          sub_categories_id: group?.sub_categories?.id, staffs_id: staff.id,
                                        }])
                                      } else {
                                        setStaffServices(staffServices.filter(service => service.vendors_service_id != group.id));
                                      }
                                      changeSelectService(e);
                                    }}
                                  />
                                  <label
                                    htmlFor={group?.service_title.replace(/\s/g, "")}
                                    className="w-full text-sm font-medium text-gray-900 ms-2 "
                                  >
                                    {group?.service_title}
                                  </label>
                                </div>
                                <p className="text-sm">{+group?.duration * 60} Min</p>
                                <p className="text-sm font-semibold">£{group?.price}</p>
                              </div>
                            </Fragment>
                          ))}
                        </div>
                      )
                    })}
                  </div>
                </Fragment>
            })}
          </div>
          <div className="flex items-center justify-center gap-3 pt-10">
            <Button
              variant="disable"
              disabled={loading}
              onClick={(e) => {
                setEditStaff("");
                setAddTeam(false);
              }}
            >
              Cancel
            </Button>
            <Button variant="primary" type="submit" disabled={loading}>
              <Spinner show={loading} width="25" height="25" text="Save" />
            </Button>
          </div>
        </form>
      )}
      {currentTab == "publicProfile" && (
        <>
          <form
            className="space-y-4"
            onSubmit={(e) => setPublicProfile({ e, step: "" })}
            noValidate
          >
            <div className="w-full space-y-1 text-left">
              <Label htmlFor="job_title" text="Job Title" />
              <input
                type="text"
                name="job_title"
                id="job_title"
                className="input_field"
                placeholder="Enter your Job Title"
                pattern={Validation?.title?.pattern}
                defaultValue={(staff && staff.job_title) || ""}
                required
              />
              <p className="error">{Validation?.title?.msg}</p>
            </div>
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <Label htmlFor="job_bio" text="Job Bio" />
              <input
                type="text"
                name="job_bio"
                id="job_bio"
                className="input_field"
                placeholder="Enter your Job Bio"
                defaultValue={(staff && staff.job_bio) || ""}
              />
            </div>
            <div className="flex items-center justify-center gap-3">
              {Object.keys(staff).length > 0 && (
                <input type="hidden" name="staffs id" value={staff.id} />
              )}
              <Button
                variant="disable"
                disabled={loading}
                onClick={(e) => {
                  setEditStaff("");
                  setAddTeam(false);
                }}
              >
                Cancel
              </Button>
              <Button variant="primary" type="submit" disabled={loading}>
                <Spinner show={loading} width="25" height="25" text="Save" />
              </Button>
              <Button
                variant="danger"
                onClick={(e) => deleteStaff()}
                disabled={loading}
              >
                Delete
              </Button>
            </div>
            {error && <Error error={error} />}
          </form>
        </>
      )}
    </div>
  );
};

export default AddTeam;
