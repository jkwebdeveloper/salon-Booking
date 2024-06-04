import Button from "@/components/ui/button";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import { POST } from "@/app/api/post";
import { Spinner, Success } from "@/components";
import Validation from "@/constants/validation";

const SalonDetails = () => {
  const vendor = useSelector((state) => state.vendorAuth.vendor);
  const [formState, setFormState] = React.useState({
    loading: false,
    error: "",
    success: "",
  });
  const [vendorPhotos, setVendorPhotos] = useState([]);
  const [salonDetails, setSalonDetails] = useState({});
  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const timeing = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"];

  const getVendor = useCallback(async () => {
    const resp = await POST.request({ url: '/vendor/vendor-details-by-id', form: { vendor_id: vendor.id }, token: vendor.api_token });
    if (resp && resp.code == 200) {
      setSalonDetails(resp.data);
    }
  }, [])

  const handleFile = (e) => {
    const inputfile = [...vendorPhotos];
    Array.from(Array(e.target.files.length).keys()).map((i) => {
      let path = (window.URL || window.webkitURL).createObjectURL(e.target.files[i]);
      inputfile.push({ 'id': v4(), 'path': path, 'data': e.target.files[i] });
    });
    setVendorPhotos(inputfile);
  }

  useEffect(() => {
    getVendor();
  }, []);

  const updateVendor = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    vendorPhotos.map((photo) => {
      formData.append('salon_images[]', photo.data);
    })
    const resp = await POST.request({ url: '/vendor/update-profile', form: formData, rawdata: true, token: vendor.api_token, formState, setFormState });
  }

  const deletePhoto = async (id) => {
    const resp = await POST.request({ url: '/vendor/delete-salon-image', form: { id }, token: vendor.api_token, formState, setFormState });
    if (resp && resp.code == 200) {
      getVendor();
    }
  }
  return (
    <form className="relative w-full space-y-12 bg-white rounded-xl" noValidate onSubmit={e => updateVendor(e)}>
      <div className="bg-gradient-to-r  p-3 from-[#711F7E99] h-fit to-[#14DBD099] rounded-t-xl">
        <div className="flex items-center gap-3 ">
          {vendorPhotos.length > 0 && vendorPhotos.map((photo) => (
            <div className="relative top-10 group/photos" key={v4()}>
              <div className="relative rounded-lg p-1 w-[6.5rem] h-[6.5rem] mb-2">
                <Image
                  src={photo.path}
                  alt="profile"
                  loading="lazy"
                  className="object-cover w-full h-full z-1"
                  width={150}
                  height={150}
                />
                <Button variant="primary" className="absolute top-0 right-0 w-10 h-6 p-2 bg-red-500" onClick={e => setVendorPhotos(vendorPhotos.filter(item => item.id != photo.id))}>X</Button>
              </div>
            </div>
          ))}
          {salonDetails?.salon_images && salonDetails?.salon_images.map((photo) => (
            <div className="relative top-10 group/photos" key={v4()}>
              <div className="relative rounded-lg p-1 w-[6.5rem] h-[6.5rem] mb-2">
                <Image
                  src={process.env.NEXT_PUBLIC_SERVERURL + photo.images}
                  alt="profile"
                  loading="lazy"
                  className="object-cover w-full h-full z-1"
                  width={150}
                  height={150}
                />
                <Button variant="primary" className="absolute top-0 right-0 w-10 h-6 p-2 bg-red-500" onClick={e => deletePhoto(photo.id)} disabled={formState?.loading}>
                  <Spinner
                    show={formState?.loading}
                    width="15"
                    height="15"
                    text="X"
                  />
                </Button>
              </div>
            </div>
          ))}
          <div className="relative top-10 group/photos">
            <div className="relative rounded-lg bg-white ring-1 flex items-center justify-center p-1 w-[6.5rem] h-[6.5rem] mb-2">
              <input
                type="file"
                className="absolute top-0 bottom-0 left-0 right-0 mt-2 cursor-pointer rounded-full max-w-[3.5rem] mx-auto opacity-0 z-2"
                onChange={e => handleFile(e)}
              />
              <Button variant="primary" className="w-10 h-6 p-2">+</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-3 space-y-4">
        <p className="text-xl font-semibold">Salon Info</p>
        <div className="w-full space-y-1 text-left">
          <label htmlhtmlFor="salon_name" className="label_text">
            Salon Name*
          </label>
          <input
            type="text"
            name="salon_name"
            id="fname"
            className="input_field"
            placeholder="Enter your Name"
            pattern={Validation?.title?.pattern}
            defaultValue={salonDetails.salon_name}
            required
          />
          <p className="error">Salon name Required</p>
        </div>
        <div className="flex flex-col w-full gap-3 lg:flex-row">
          <div className="w-full space-y-1 text-left lg:w-1/2">
            <label htmlFor="email" className="label_text">
              Email*
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="input_field"
              placeholder="Enter your Name"
              pattern={Validation?.email?.pattern}
              required
              defaultValue={salonDetails.email}
              disabled
            />
            <p className="error">{Validation?.email?.msg}</p>
          </div>
          <div className="w-full space-y-1 text-left lg:w-1/2">
            <label htmlFor="phone_number" className="label_text">
              Phone number*
            </label>
            <input
              type="text"
              name="phone_number"
              id="phone_number"
              className="input_field"
              placeholder="Enter your name"
              pattern={Validation?.phone?.pattern}
              required
              defaultValue={salonDetails.phone_number}
            />
            <p className="error">{Validation?.phone?.msg}</p>
          </div>
        </div>
        <div className="w-full space-y-1 text-left">
          <label htmlFor="fname" className="label_text">
            About salon*
          </label>
          <textarea
            id="message"
            rows="4"
            name="about_salon"
            className="input_field"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
        <div className="w-full space-y-3 lg:w-1/2" key={salonDetails?.availability}>
          {weekDays.map((day) => {
            const fromTime = salonDetails?.availability && salonDetails?.availability.length > 0 && salonDetails?.availability.filter((item) => item.day == day.slice(0, 3))[0]?.from_time.slice(0, 5);
            const toTime = salonDetails?.availability && salonDetails?.availability.length > 0 && salonDetails?.availability.filter((item) => item.day == day.slice(0, 3))[0]?.to_time.slice(0, 5);
            return (
              <div className="flex items-center gap-10" key={v4()}>
                <li className="w-full list-none">
                  <div className="flex items-center">
                    <input
                      id={day}
                      type="checkbox"
                      className=""
                      onChange={(e) => {
                        e.target.checked ? e.target.nextElementSibling.value = '1' : e.target.nextElementSibling.value = '0';
                      }}
                      defaultChecked={salonDetails?.availability && salonDetails?.availability.length > 0 && salonDetails?.availability.filter((item) => item.day == day.slice(0, 3))[0]?.status == 1}
                    />
                    <input type="hidden" name={day.slice(0, 3) + '[status]'} defaultValue={salonDetails?.availability && salonDetails?.availability.length > 0 && salonDetails?.availability.filter((item) => item.day == day.slice(0, 3))[0]?.status == 1 || 0} />
                    <label
                      htmlFor={day}
                      className="w-full text-sm font-medium text-gray-900 ms-2 "
                    >
                      {day}
                    </label>
                  </div>
                </li>
                <div className="flex items-center gap-3">
                  <Select name={day.slice(0, 3) + '[from_time]'} defaultValue={fromTime != '00:00' && fromTime || '09:00'}>
                    <SelectTrigger className="">
                      <SelectValue placeholder="09:00" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {timeing.map((time) => (
                          <SelectItem key={v4()} value={time}>{time}</SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Select name={day.slice(0, 3) + '[to_time]'} defaultValue={toTime != '00:00' && toTime || '23:30'}>
                    <SelectTrigger className="">
                      <SelectValue placeholder="23:30" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {timeing.map((time) => (
                          <SelectItem key={v4()} value={time}>{time}</SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )
          })}
        </div>
        <p className="text-xl font-semibold">Social Profiles</p>
        <div className="w-full space-y-1 text-left">
          <label htmlFor="facebook_link" className="label_text">
            Facebook
          </label>
          <input
            type="text"
            name="facebook_link"
            id="facebook_link"
            className="input_field"
            placeholder="Enter your profile link here..."
            defaultValue={salonDetails.facebook_link}
          />
        </div>
        <div className="w-full space-y-1 text-left">
          <label htmlFor="whtsup_link" className="label_text">
            Whatsapp
          </label>
          <input
            type="text"
            name="whtsup_link"
            id="whtsup_link"
            className="input_field"
            placeholder="Enter your profile link here..."
            defaultValue={salonDetails.whtsup_link}
          />
        </div>
        <div className="w-full space-y-1 text-left">
          <label htmlFor="instagram_link" className="label_text">
            Instagram
          </label>
          <input
            type="text"
            name="instagram_link"
            id="instagram_link"
            className="input_field"
            placeholder="Enter your profile link here..."
            defaultValue={salonDetails.instagram_link}
          />
        </div>
        <div className="w-full space-y-1 text-left">
          <label htmlFor="twitter_link" className="label_text">
            Twitter
          </label>
          <input
            type="text"
            name="twitter_link"
            id="twitter_link"
            className="input_field"
            placeholder="Enter your profile link here..."
            defaultValue={salonDetails.twitter_link}
          />
        </div>
        <Button type="submit" variant="primary" disabled={formState?.loading}>
          <Spinner
            show={formState?.loading}
            width="25"
            height="25"
            text="Update"
          />
        </Button>
        {formState?.success && <Success message={formState?.success} />}
      </div>
    </form>
  );
};

export default SalonDetails;
