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

const Staff = () => {
     const vendor = useSelector(state => state.vendorAuth.vendor);
     const [loading, setLoading] = useState(true);
     const [userModal, setUserModal] = useState(false);
     const [currentTab, setCurrentTab] = useState('schedule');
     const [staffsList, setStaffsList] = useState([]);
     const [staffsSchedule, setStaffsSchedule] = useState([]);

     const [dateRange, setDateRange] = useState({
          from: new Date(),
          to: new Date(),
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
               console.log('res.data', res.data);
          }
     }, [dateRange]);

     const fetchSchedule = async () => {
          const startofWeek = startOfWeek(dateRange?.from, { weekStartsOn: 0 });
          const start = startOfWeek(startofWeek, { weekStartsOn: 0 });
          const end = endOfWeek(startofWeek, { weekStartsOn: 0 });
          const newDateRange = { from: start, to: end };
          setDateRange(newDateRange);
          getStaffSchedule();
     }

     useEffect(() => {
          (currentTab == 'staff' || currentTab == 'schedule') && fetchSchedule();
     }, [currentTab]);

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
                    {/* Staff Schedule section  start */}
                    {currentTab == 'schedule' && (
                         <>
                              <p className="text-2xl font-semibold">Staff Schedule</p>
                              <div className="flex items-end justify-between">
                                   <div className="border w-max rounded-md border-[#eae9e9]">
                                        <DatePickerRange
                                             onDateChange={handleDateChange}
                                             mode='range'
                                             date={dateRange}
                                             setDate={setDateRange}
                                        />
                                   </div>
                              </div>
                              <hr />
                              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                                                                      <td
                                                                           key={v4()}
                                                                           className="py-4 text-center"
                                                                           onClick={e => setUserModal(true)}
                                                                      >
                                                                           {day?.status == 'Time Off'
                                                                                && <span className='text-red-500'>N/A</span>
                                                                                || <>
                                                                                     {day?.from_time || salonTime?.from_time || 'Closed'}
                                                                                     {day?.from_time || salonTime?.from_time && ' - ' || ''}
                                                                                     {day.to_time || salonTime?.to_time || ''}
                                                                                </>}
                                                                      </td>
                                                                 );
                                                            }
                                                            )}
                                                       </tr>
                                                  );
                                             })}
                                        </tbody>
                                   </table>
                              </div>
                              <Dialog open={userModal}>
                                   <DialogContent
                                        close={setUserModal}
                                        className="sm:max-w-[450px]"
                                   >
                                        <UserModal
                                             setUserModal={setUserModal}
                                             vendor={vendor}
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
