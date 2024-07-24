import Button from '@/components/ui/button';
import { DatePicker } from '@/components/user/Home/FindNearByForm/datepicker';
import React, { useCallback, useEffect, useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle,
} from '@/components/ui/dialog';
import UserModal from './Modal/StaffModal/UserModal';
import AddTeam from './Modal/StaffModal/AddTeam';
import { useSelector } from 'react-redux';
import { GET } from '@/app/api/get';
import { PageLoader } from '@/components';
import { v4 } from 'uuid';
import Image from 'next/image';
import { DatePickerRange } from './Modal/StaffModal/datepickerange';
import { format, addDays, startOfWeek } from 'date-fns';

const Staff = () => {
    const vendor = useSelector(state => state.vendorAuth.vendor);
    const [userModal, setUserModal] = useState(false);
    const [addTeam, setAddTeam] = useState(false);
    const [currentTab, setCurrentTab] = useState('schedule');
    const [loading, setLoading] = useState(true);
    const [editStaff, setEditStaff] = useState('');
    const [staffsList, setStaffsList] = useState([]);

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

    // const getStaff = useCallback(async () => {
    //     setLoading(true);
    //     const res = await GET.request({
    //         url: '/vendor/get-all-staffs',
    //         token: vendor?.api_token,
    //     });
    //     setLoading(false);
    //     if (res && res.code == 200) {
    //         setStaffsList(res.data);
    //     }
    // }, []);

    // useEffect(() => {
    //     (currentTab == 'staff' || currentTab == 'schedule') && getStaff();
    // }, [currentTab]);

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
                                    {staffsList.map((staff, index) => {
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
                                                {vendor?.availability?.map(
                                                    (day, index) => {
                                                        return (
                                                            <td
                                                                key={v4()}
                                                                className="py-4 text-center"
                                                                onClick={e =>
                                                                    setUserModal(
                                                                        true
                                                                    )
                                                                }
                                                            >
                                                                {day?.from_time.slice(
                                                                    0,
                                                                    5
                                                                )}{' '}
                                                                -{' '}
                                                                {day.to_time.slice(
                                                                    0,
                                                                    5
                                                                )}
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
                {currentTab == 'staff' && (
                    <>
                        <div className="flex items-center justify-between">
                            <p className="text-2xl font-semibold">Staff List</p>
                            <Dialog open={addTeam}>
                                <DialogTrigger
                                    onClick={e => setAddTeam(true)}
                                    className="flex items-center h-8 px-6 py-5 text-sm font-medium text-white uppercase transition rounded-full focus:outline-none bg-primary hover:bg-primary-hover active:scale-90"
                                >
                                    + Add New
                                </DialogTrigger>
                                <DialogContent
                                    close={e => {
                                        setAddTeam(false);
                                        setEditStaff('');
                                    }}
                                    className="sm:max-w-[900px]"
                                >
                                    <DialogTitle>Add Team Member</DialogTitle>
                                    <AddTeam
                                        setAddTeam={setAddTeam}
                                        setStaffsList={setStaffsList}
                                        staffsList={staffsList}
                                        setEditStaff={setEditStaff}
                                        editStaff={editStaff}
                                    />
                                </DialogContent>
                            </Dialog>
                        </div>
                        <hr />
                        {(loading && <PageLoader />) || (
                            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {(staffsList.length > 0 &&
                                    staffsList.map((staff, index) => {
                                        return (
                                            <div
                                                key={v4()}
                                                className="flex items-center justify-center py-5 rounded-lg shadow-lg"
                                            >
                                                <div className="space-y-5 text-center">
                                                    <div className="flex items-center justify-center w-16 h-16 mx-auto overflow-hidden bg-green-300 rounded-full">
                                                        {(staff.photo && (
                                                            <Image
                                                                alt="staff photo"
                                                                src={
                                                                    process.env
                                                                        .NEXT_PUBLIC_SERVERURL +
                                                                    staff.photo
                                                                }
                                                                width={100}
                                                                height={100}
                                                            />
                                                        )) || (
                                                                <p className="text-xl text-white ">
                                                                    NS
                                                                </p>
                                                            )}
                                                    </div>
                                                    <p className="text-xl">
                                                        {staff?.first_name}{' '}
                                                        {staff?.last_name}
                                                    </p>
                                                    <Button
                                                        variant="primary"
                                                        onClick={e => {
                                                            setEditStaff(staff);
                                                            setAddTeam(true);
                                                        }}
                                                    >
                                                        Edit
                                                    </Button>
                                                </div>
                                            </div>
                                        );
                                    })) ||
                                    'Staff Member Not Found'}
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Staff;
