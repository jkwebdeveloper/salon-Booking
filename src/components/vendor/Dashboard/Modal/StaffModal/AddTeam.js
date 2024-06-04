import Button from "@/components/ui/button";
import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";

import Image from "next/image";
import Label from "@/components/ui/form/label";
import { POST } from "@/app/api/post";
import { Error, Spinner } from "@/components";
import { useSelector } from "react-redux";
import { useVendorServices } from "@/hooks";
import { set } from "date-fns";
import { v4 } from "uuid";
import Validation from "@/constants/validation";

const AddTeam = ({
  setAddTeam,
  editStaff,
  staffsList,
  setStaffsList,
  setEditStaff,
}) => {
  const vendor = useSelector((state) => state.vendorAuth.vendor);
  const [getServices, vendorServices] = useVendorServices();
  const [userImage, setUserImage] = useState({});
  const [staff, setStaff] = useState(editStaff || {});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentTab, setCurrentTab] = useState("basic");
  const [staffServices, setStaffServices] = useState(
    (staff && staff?.staff_service) || []
  );

  const changeTab = (tab = "basic") => setCurrentTab(tab);

  const handleFile = (e) => {
    const allowedType = ['image/jpeg', 'image/x-png', 'image/png', 'image/webp'];
    if (allowedType.includes(e.target.files[0].type)) {
      const path = (window.URL || window.webkitURL).createObjectURL(e.target.files[0]);
      setUserImage({ 'id': v4(), 'path': path, 'data': e.target.files[0] });
    }
  }

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

  const addStaffServices = async (e) => {
    e.preventDefault();
    setLoading(true);
    const resp = await POST.request({
      url: "/vendor/add-staffs-services",
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

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Button variant={currentTab == "basic" ? "secondary" : "disable"} onClick={(e) => changeTab()} >
          Basic Info
        </Button>
        <Button variant={currentTab == "services" ? "secondary" : "disable"} onClick={(e) => changeTab("services")} disabled={Object.keys(staff).length == 0} >
          Services
        </Button>
        <Button variant={currentTab == "publicProfile" ? "secondary" : "disable"} onClick={(e) => changeTab("publicProfile")} disabled={Object.keys(staff).length == 0} >
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
          {console.log('wefwe', userImage)}
          <div className="border relative border-1 border-[#0AADA4] rounded-full p-1 w-[3.5rem] h-[3.5rem] mb-2">
            {console.log(staff)}
            <Image
              // src={
              //   ((staff && staff?.photo) && process.env.NEXT_PUBLIC_SERVERURL + staff.photo) ||
              //   "/static/images/user.webp"
              // }
              src={
                userImage?.path || ((staff && staff?.photo) && process.env.NEXT_PUBLIC_SERVERURL + staff?.photo) || '/static/images/user.webp'
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
              onChange={e => handleFile(e)}
            />
            <div className="absolute flex items-center justify-center w-full h-full rounded-full bg-neutral-900/20 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
              <FaCamera className="p-[4px] text-3xl text-white opacity-70" />
            </div>
          </div>
          <div className="flex flex-col w-full gap-3 lg:flex-row">
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
            <div className="w-full space-y-1 text-left lg:w-1/2">
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
            <div className="w-full space-y-1 text-left lg:w-1/2">
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
          </div>
          <div className="space-y-1 ">
            <Label htmlFor="dob" text="Date of Birth" />
            <div className="w-full rounded-md border-[#eae9e9] dateField">
              <input
                type="date"
                name="dob"
                className="w-full input_field sm:max-w-[200px]"
                placeholder="Enter your Phone Number"
                defaultValue={staff?.dob}
                pattern='\d{4}-\d{1,2}-\d{1,2}'
                required
              />
              <p className="error">{Validation?.dob?.msg}</p>
            </div>
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
      {console.log("staffServices", staffServices)}
      {currentTab == "services" && (
        <form
          className="space-y-2"
          onSubmit={(e) => addStaffServices(e)}
          noValidate
        >
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
          {vendorServices.loading && (
            <Spinner show={vendorServices.loading} width={50} height={50} />
          )}
          {!vendorServices.loading &&
            vendorServices.data.map(
              (service, index) =>
                service.group_service_list.length > 0 && (
                  <div
                    key={v4()}
                    className="border space-y-3 rounded-lg border-[#D8DAE5] bg-[#FAFAFA] p-3"
                  >
                    <li class="w-full list-none">
                      <div class="flex items-center">
                        <input
                          id={service.categories.title}
                          type="checkbox"
                          checked={
                            (staffServices.filter(
                              (serviceCats) =>
                                serviceCats.categories_id ==
                                service.categories.id
                            ).length == service?.group_service_list.length &&
                              true) ||
                            false
                          }
                          onChange={(e) => {
                            if (e.target.checked) {
                              const subcategories =
                                service.group_service_list.map(
                                  (subcategory) => ({
                                    categories_id: subcategory?.categories_id,
                                    sub_categories_id: subcategory?.id,
                                    staffs_id: staff.id || null,
                                  })
                                );
                              setStaffServices([
                                ...staffServices,
                                ...subcategories,
                              ]);
                            } else {
                              setStaffServices(
                                staffServices.filter(
                                  (subcategory) =>
                                    subcategory.categories_id !=
                                    service.categories.id
                                )
                              );
                            }
                          }}
                        />
                        <label
                          htmlFor={service.categories.title}
                          class="w-full ms-2 text-base font-semibold"
                        >
                          {service.categories.title}
                        </label>
                      </div>
                    </li>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      {service.group_service_list.map((subcategory, index) => (
                        <li key={v4()} class="w-full list-none">
                          <div class="flex items-center">
                            <input
                              id={subcategory?.sub_categories?.title}
                              type="checkbox"
                              checked={
                                (staffServices.find(
                                  (serviceCats) =>
                                    serviceCats.sub_categories_id ==
                                    subcategory?.id
                                ) &&
                                  true) ||
                                false
                              }
                              onChange={(e) => {
                                if (e.target.checked) {
                                  const exists = staffServices.find(
                                    (serviceCats) =>
                                      serviceCats.sub_categories_id ==
                                      subcategory?.id
                                  );
                                  if (!exists) {
                                    setStaffServices([
                                      ...staffServices,
                                      {
                                        categories_id:
                                          subcategory?.categories_id,
                                        sub_categories_id: subcategory?.id,
                                        staffs_id: staff.id || null,
                                      },
                                    ]);
                                  }
                                } else {
                                  setStaffServices(
                                    staffServices.filter(
                                      (serviceCats) =>
                                        serviceCats?.sub_categories_id !=
                                        subcategory.id
                                    )
                                  );
                                }
                              }}
                            />
                            <label
                              htmlFor={subcategory?.sub_categories?.title}
                              class="w-full ms-2 text-sm font-normal"
                            >
                              {subcategory?.sub_categories?.title}
                            </label>
                          </div>
                        </li>
                      ))}
                    </div>
                  </div>
                )
            )}
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
            <Button variant="primary" type="submit">Save</Button>
            <Button variant="danger" onClick={(e) => deleteStaff()} disabled={loading} > Delete </Button>
          </div>
        </form>
      )}
      {currentTab == "publicProfile" && (
        <>
          <form
            className="space-y-4"
            onSubmit={(e) => updateStaff({ e, step: "" })}
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
