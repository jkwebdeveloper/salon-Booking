import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 } from 'uuid';
import Image from 'next/image';
import { format, addDays, startOfWeek, endOfWeek } from 'date-fns';

import Button from '@/components/ui/button';
import {
     Dialog,
     DialogContent,
     DialogTrigger,
     DialogTitle,
} from '@/components/ui/dialog';
import UserModal from '@/components/vendor/Dashboard/Modal/StaffModal/UserModal';
import { GET } from '@/app/api/get';
import { DatePickerRange } from '@/components/vendor/Dashboard/Modal/StaffModal/datepickerange';
import MyStaff from '@/components/vendor/Dashboard/Staff/mystaff';
import { PageLoader } from '@/components';

const Staff = () => {
     const vendor = useSelector(state => state.vendorAuth.vendor);
     const vendorOpen = vendor?.availability.filter(item => item.status == 1).map(item => item.day);
     const [loading, setLoading] = useState(true);
     const [userModal, setUserModal] = useState(false);
     const [editDay, setEditDay] = useState({});
     const [currentTab, setCurrentTab] = useState('schedule');
     const [staffsList, setStaffsList] = useState([]);
     const [staffsSchedule, setStaffsSchedule] = useState([]);

     const [dateRange, setDateRange] = useState({
          from: '',
          to: '',
     });

     const changeTab = (tab = 'basic') => setCurrentTab(tab);

     const handleDateChange = range => {
          setDateRange(range);
     };

     const renderDateHeaders = () => {
          const headers = [];
          const start = startOfWeek(dateRange.from, { weekStartsOn: 0 });
          for (let i = 0; i < 7; i++) {
               const date = addDays(start, i);
               headers.push(
                    <th
                         key={i}
                         scope="col"
                         className="flex-col px-6 py-3 text-center"
                    >
                         <p className="text-lg">{format(date, 'EEEE')}</p>
                         <p className="mx-auto">{format(date, 'dd.MM')}</p>
                    </th>
               );
          }
          return headers;
     };

     const getStaffSchedule = useCallback(async () => {
          setLoading(true);
          const res = await GET.request({
               url: `/vendor/get-staffs-schedule?from_date=${format(dateRange.from, 'yyyy-MM-dd') + 'T00:00:00'}&to_date=${format(dateRange.to, 'yyyy-MM-dd') + 'T00:00:00'}`,
               token: vendor?.api_token,
          });
          setLoading(false);
          if (res && res.code == 200 && res?.data) {
               setStaffsSchedule(res.data);
          }
     }, [dateRange]);

     useEffect(() => {
          const startofWeek = startOfWeek(dateRange?.from || new Date(), { weekStartsOn: 0 });
          const start = startOfWeek(startofWeek, { weekStartsOn: 0 });
          const end = endOfWeek(startofWeek, { weekStartsOn: 0 });
          const newDateRange = { from: start, to: end };
          setDateRange(newDateRange);
     }, []);

     useEffect(() => {
          (currentTab == 'schedule' && dateRange?.from) && getStaffSchedule();
     }, [currentTab, dateRange?.from]);

     return (
          <div className="space-y-4">
               <div className="flex items-center gap-3">
                    <Button
                         variant={currentTab == 'schedule' ? 'primary' : 'disable'}
                         onClick={e => changeTab('schedule')}
                    >
                         Staff Schedule
                    </Button>
                    <Button
                         variant={currentTab == 'staff' ? 'primary' : 'disable'}
                         onClick={e => changeTab('staff')}
                    >
                         My staff
                    </Button>
               </div>
               <div className="w-full p-4 space-y-3 bg-white rounded-xl">
                    {currentTab == 'schedule' && (
                         <>
                              <p className="text-2xl font-semibold">Staff Schedule</p>
                              <div className="flex items-end justify-between">
                                   <div className="border w-max rounded-md border-[#eae9e9]">
                                        {dateRange?.from && dateRange?.to && (
                                             <DatePickerRange
                                                  onDateChange={handleDateChange}
                                                  mode='range'
                                                  date={dateRange}
                                                  setDate={setDateRange}
                                             />
                                        )}
                                   </div>
                              </div>
                              <hr />
                              {!loading
                                   && <div div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                        <table className="w-full text-sm text-left rtl:text-center">
                                             <thead className="text-white bg-primary_color">
                                                  <tr>
                                                       <th
                                                            scope="col"
                                                            className="px-6 py-3"
                                                       ></th>
                                                       {renderDateHeaders()}
                                                  </tr>
                                             </thead>
                                             <tbody>
                                                  {staffsSchedule.map((staff, index) => {
                                                       return (
                                                            <tr
                                                                 className="bg-white border-b cursor-pointer dark:bg-gray-800 dark:border-gray-700"
                                                                 key={v4()}
                                                            >
                                                                 <td
                                                                      scope="row"
                                                                      className="px-6 py-4 font-medium text-gray-900 capitalize whitespace-nowrap dark:text-white"
                                                                 >
                                                                      {staff.first_name}{' '}
                                                                      {staff.last_name}
                                                                 </td>
                                                                 {staff?.schedule.length && staff?.schedule?.map((day, index) => {
                                                                      const salonTime = vendor?.availability?.find(item => item.day == day?.day);
                                                                      return (
                                                                           vendorOpen.includes(day?.day)
                                                                           && <td
                                                                                key={v4()}
                                                                                className="py-4 text-center"
                                                                                onClick={e => setEditDay({ staff, day })}
                                                                           >
                                                                                {(day?.type == 'Time Off')
                                                                                     ? <span className='text-red-500'>N/A</span>
                                                                                     : (day?.type == 'Not Scheduled')
                                                                                          ? <span className='text-neutral-500'>Not Scheduled</span>
                                                                                          : (day?.type == 'Usual Schedule')
                                                                                               ? <span className='text-neutral-500'>
                                                                                                    {day?.from_time || salonTime?.from_time} -
                                                                                                    {day?.to_time || salonTime?.to_time}
                                                                                               </span>
                                                                                               : (day?.type == 'Custom hours')
                                                                                                    ? <span className='text-neutral-500'>
                                                                                                         {day?.from_time || 'N/A'} -
                                                                                                         {day?.to_time || 'N/A'}
                                                                                                    </span>
                                                                                                    : (day?.type == 'Day Off')
                                                                                                         ? <span className='text-neutral-500'>Day Off</span>
                                                                                                         : ''
                                                                                }
                                                                           </td>
                                                                           || <td key={v4()} className="py-4 text-center text-neutral-400">Closed</td>
                                                                      );
                                                                 }
                                                                 )}
                                                            </tr>
                                                       );
                                                  })}
                                             </tbody>
                                        </table>
                                   </div> || <PageLoader />}
                              <Dialog open={Object.keys(editDay).length}>
                                   <DialogTitle></DialogTitle>
                                   <DialogContent
                                        close={e => setEditDay({})}
                                        className="sm:max-w-[450px]"
                                   >
                                        <UserModal
                                             editDay={editDay}
                                             close={e => setEditDay({})}
                                             staffsSchedule={staffsSchedule}
                                             setStaffsSchedule={setStaffsSchedule}
                                             dateRange={dateRange}
                                        />
                                   </DialogContent>
                              </Dialog>
                         </>
                    )}
                    {currentTab == 'staff' && <MyStaff />}
               </div>
          </div>
     );
};

export default Staff;
