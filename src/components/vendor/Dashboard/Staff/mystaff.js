import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';

import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle,
} from '@/components/ui/dialog';
import AddTeam from '@/components/vendor/Dashboard/Modal/StaffModal/AddTeam';
import { Button, PageLoader } from '@/components';
import { GET } from '@/app/api/get';
import { useSelector } from 'react-redux';
import { v4 } from 'uuid';

function MyStaff() {
    const vendor = useSelector(state => state.vendorAuth.vendor);
    const [staffsList, setStaffsList] = useState([]);
    const [addTeam, setAddTeam] = useState(false);
    const [loading, setLoading] = useState(true);
    const [editStaff, setEditStaff] = useState('');

    const getStaff = useCallback(async () => {
        setLoading(true);
        const res = await GET.request({
            url: '/vendor/get-all-staffs',
            token: vendor?.api_token,
        });
        setLoading(false);
        if (res && res.code == 200) {
            setStaffsList(res.data);
        }
    }, []);

    useEffect(() => {
        getStaff();
    }, []);
    return (
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
                        className="sm:max-w-[1150px]"
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
                                        <p className="text-xl capitalize">
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
                        })) || null}
                </div>
            )}
            {!loading && !staffsList.length ? <div className='min-h-[200px] w-full flex items-center justify-center'>
                There are No Staff Available. Please Add.
            </div> : null}
        </>
    );
}

export default MyStaff;
