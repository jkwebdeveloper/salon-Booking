import Button from "@/components/ui/button";
import Label from "@/components/ui/form/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePicker } from "@/components/user/Home/FindNearByForm/datepicker";
import Schedule from "./Schedule";
import { useSelector } from "react-redux";
import { POST } from "@/app/api/post";
import { format } from "date-fns";
import { Error, Spinner } from "@/components";
import { v4 } from "uuid";
import converttomin from "@/constants/converttomin";

const UserModal = ({ editDay, close, staffsSchedule, setStaffsSchedule, dateRange }) => {
  const { day, staff } = editDay || {};
  console.log(day?.date);
  const currentTime = staff?.schedule && staff?.schedule.filter(s => s.day == day?.day)[0] || {};
  const vendor = useSelector(state => state?.vendorAuth?.vendor);
  const [selectedDays, setSelectedDays] = React.useState({});
  const [formState, setFormState] = React.useState({
    loading: false,
    error: "",
    success: "",
  });
  const [currentTab, setCurrentTab] = useState("action");
  const [dayStatus, setDayStatus] = useState("Usual Schedule");
  const [from, setFrom] = useState(currentTime?.from_time || "09:00");
  const [to, setTo] = useState(currentTime?.to_time || "23:30");
  const [timeOff, setTimeOff] = useState({ from: "", to: "" });

  const timeing = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"];

  const vendorAvailability = vendor?.availability?.map(t => {
    if (t?.day == day?.day) {
      const startTime = t?.from_time && t?.from_time.slice(0, 5) || '09:00';
      const endTime = t?.to_time && t?.to_time.slice(0, 5) || '23:30';
      const startingIndex = timeing.indexOf(startTime);
      const endingIndex = timeing.indexOf(endTime);
      return { ...t, dayTime: timeing.slice(startingIndex, endingIndex + 1) }
    }
  }).filter(t => t)[0];

  const updateStaffSchedule = async (e) => {
    e.preventDefault();
    if (dayStatus == 'Usual Schedule') {
      close();
      return;
    }
    if (dayStatus == 'Day Off') {
      addTimeOff({ date: day?.date, e });
      return;
    }
    const data = {
      staffs_id: staff?.id,
      day: day?.day,
      type: dayStatus,
      from_time: (dayStatus == 'Custom hours') && from || null,
      to_time: (dayStatus == 'Custom hours') && to || null,
      from_date: format(dateRange.from, 'yyyy-MM-dd'),
      to_date: format(dateRange.to, 'yyyy-MM-dd'),
    }
    const resp = await POST.request({ url: '/vendor/edit-day', form: data, token: vendor?.api_token, rawdata: true, formState, setFormState });
    if (resp && resp.code == 200) {
      setStaffsSchedule(resp?.data);
      close();
    }
  };

  const addTimeOff = async ({ date, e }) => {
    e && e.preventDefault();
    const resp = await POST.request({
      url: '/vendor/add-time-off',
      form: {
        staffs_id: staff?.id,
        day: day?.day,
        from: date && (date && date.split('-').reverse().join('-')) || timeOff.from,
        to: date && (date && date.split('-').reverse().join('-')) || timeOff.to,
        from_date: format(dateRange.from, 'yyyy-MM-dd'),
        to_date: format(dateRange.to, 'yyyy-MM-dd'),
      },
      token: vendor?.api_token,
      rawdata: true,
      formState,
      setFormState
    });
    if (resp.code == 200) {
      setStaffsSchedule(resp?.data);
      close();
    }
  }

  return (
    <div className="w-full space-y-3">
      {currentTab == "action" && (
        <>
          <div className="bg-[#0AADA4] mx-auto text-center p-3 rounded-full w-12 uppercase text-white">
            {staff?.first_name[0] && staff?.first_name[0] || ''}
            {staff?.last_name && staff?.last_name[0] || ''}
          </div>
          <p className="text-center capitalize">{staff?.first_name} {staff?.last_name}</p>
          <div
            className="w-full bg-[#FAFAFA] p-3 cursor-pointer flex justify-between items-center border rounded-lg border-[#D8DAE5]"
            onClick={() => setCurrentTab("editday")}
          >
            <p className="text-sm">Edit day</p>
            <IoIosArrowForward />
          </div>
          <div
            className="w-full bg-[#FAFAFA] p-3 flex cursor-pointer justify-between items-center border rounded-lg border-[#D8DAE5]"
            onClick={() => setCurrentTab("timeoff")}
          >
            <p className="text-sm">Add Time Off</p>
            <IoIosArrowForward />
          </div>
          <div
            className="w-full bg-[#FAFAFA] p-3 flex cursor-pointer justify-between items-center border rounded-lg border-[#D8DAE5]"
            onClick={() => setCurrentTab("schedule")}
          >
            <p className="text-sm">New Schedule</p>
            <IoIosArrowForward />
          </div>
        </>
      )}
      {currentTab == "editday" && (
        <div className="space-y-4">
          <p>EditDay</p>
          <div className="flex items-center gap-3">
            <p className="rounded-full w-12 h-12 flex justify-center items-center capitalize text-xl bg-[#0AADA4] text-white">
              {staff?.first_name[0] && staff?.first_name[0] || ''}
              {staff?.last_name && staff?.last_name[0] || ''}
            </p>
            <div className="flex-col">
              <p className="font-semibold text-[#1D1B23] capitalize">
                {staff?.first_name} {staff?.last_name}
              </p>
              <p className="text-sm text-[#999999]">51 hrs / week</p>
            </div>
          </div>
          <RadioGroup defaultValue={day?.type || 'Usual Schedule'} onValueChange={e => {
            setDayStatus(e)
          }}>
            <div className="w-full bg-[#FAFAFA] hover:bg-[#F1DEF4] text-black p-3 flex items-center border rounded-lg border-[#D8DAE5] space-x-2">
              <RadioGroupItem value="Usual Schedule" id="r1" />
              <label htmlFor="r1" className="cursor-pointer">Usual Schedule</label>
            </div>
            <div className="w-full bg-[#FAFAFA] hover:bg-[#F1DEF4] text-black p-3 flex items-center border rounded-lg border-[#D8DAE5] space-x-2">
              <RadioGroupItem value="Day Off" id="r2" />
              <label htmlFor="r2" className="cursor-pointer">Day Off</label>
            </div>
            <div className="w-full bg-[#FAFAFA] hover:bg-[#F1DEF4] text-black p-3 flex items-center border rounded-lg border-[#D8DAE5] space-x-2">
              <RadioGroupItem value="Custom hours" id="r3" />
              <label htmlFor="r3" className="cursor-pointer">Custom hours</label>
            </div>
          </RadioGroup>
          {dayStatus == 'Custom hours' && <div className="flex flex-col w-full gap-3 lg:flex-row">
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <Select onValueChange={e => setFrom(e)}>
                <label className="w-full text-sm font-medium text-gray-900 ms-2 ">
                  From
                </label>
                <SelectTrigger className={`text-black min-w-[90px] ${from && (from && 'text-black' || 'text-red-500')}`}>
                  {from || 'From'}
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {vendorAvailability?.dayTime.map((time) => (
                      <SelectItem key={v4()} value={time} disabled={dayStatus == 'Custom hours' && +(converttomin(time)) >= +(converttomin(to || '09:00')) || false}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <Select onValueChange={e => setTo(e)}>
                <label class="w-full ms-2 text-sm font-medium text-gray-900 ">
                  To
                </label>
                <SelectTrigger className={`text-black min-w-[90px] ${dayStatus == 'Custom hours' && (to && 'text-black' || 'text-red-500')}`}>
                  {to || 'To'}
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {vendorAvailability?.dayTime.map((time) => (
                      <SelectItem key={v4()} value={time} disabled={to && +(converttomin(time)) <= +(converttomin(from || '23:00')) || false}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>}
          <Button variant="primary" className="w-full mx-auto" disabled={formState?.loading} onClick={e => updateStaffSchedule(e)}>
            <Spinner
              show={formState?.loading}
              width="25"
              height="25"
              text="Save"
            />
          </Button>
        </div>
      )}
      {currentTab == "timeoff" && (
        <div className="space-y-4">
          <p className="font-bold">Add time off</p>
          <div className="flex items-center gap-3">
            <p className="rounded-full w-12 h-12 flex justify-center uppercase items-center text-xl bg-[#0AADA4] text-white">
              {staff?.first_name[0] && staff?.first_name[0] || ''}
              {staff?.last_name && staff?.last_name[0] || ''}
            </p>
            <div className="flex-col">
              <p className="font-semibold text-[#1D1B23] capitalize">
                {staff?.first_name} {staff?.last_name}
              </p>
              <p className="text-sm text-[#999999]">51 hrs / week</p>
            </div>
          </div>
          <div className="flex flex-col w-full gap-3 lg:flex-row">
            {console.log(timeOff)}
            <div className="w-full">
              <input
                datepicker
                type="date"
                className="border w-full p-2 rounded-md border-[#eae9e9]"
                min={format(dateRange.from, 'yyyy-MM-dd')}
                max={timeOff?.to || ''}
                placeholder="Select date"
                onChange={e => setTimeOff({ ...timeOff, from: e.target.value })}
              />
            </div>
            <div className="w-full">
              <input
                datepicker
                type="date"
                className="border w-full p-2 rounded-md border-[#eae9e9]"
                min={timeOff?.from || format(dateRange.from, 'yyyy-MM-dd')}
                placeholder="Select date"
                onChange={e => setTimeOff({ ...timeOff, to: e.target.value })}
              />
            </div>
          </div>
          <Button
            variant="primary"
            className="flex items-center justify-center w-full mx-auto"
            onClick={e => addTimeOff({ e })}
            disabled={formState?.loading}
          >
            <Spinner
              show={formState?.loading}
              width="25"
              height="25"
              text="Save"
            />
          </Button>
          {formState?.error && <Error error={formState?.error} />}
        </div>
      )}

      {currentTab == "schedule" && <Schedule {...editDay} close={close} staffsSchedule={staffsSchedule} setStaffsSchedule={setStaffsSchedule} dateRange={dateRange} />}
    </div>
  );
};

export default UserModal;
