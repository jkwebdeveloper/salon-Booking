import { POST } from '@/app/api/post';
import { Staff } from '@/components/ui/skelton/staff';
import { cn } from '@/lib/utils';
import { Add_To_Cart } from '@/redux/features/cartSlice';
import Image from 'next/image';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';

const SelectStaffModal = ({ availableStaff, setAddStaff }) => {
    const dispatch = useDispatch();
    const { data, loading, service, bookings_client } = availableStaff;
    const user = useSelector((state) => state.userAuth.user);

    const addStaff = async (id) => {
        const data = {
            staffs_id: id,
            bookings_client_id: bookings_client?.id,
            bookings_services_id: service?.id,
            is_couples_massage: service?.is_couples_massage,
        }
        const resp = await POST.request({ url: '/add-selected-staffs', form: data, token: user?.api_token });
        if (resp && resp.code == 200) {
            dispatch(Add_To_Cart(resp?.data));
            setAddStaff({ data: [], loading: true });
        }
    }

    return (
        <div className="w-full space-y-5">
            <p className="text-[#0AADA4] lg:text-md text-sm">
                {!loading ? `Select professional for ${service?.vendors_service_info?.service_title}` : null}
            </p>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2">
                {(!loading && data?.length) ? data.map((staff, index) => (
                    <div key={v4()} className={cn("bg-white w-full cursor-pointer lg:h-fit  hover:bg-[#F4E9FF] hover:border-primary border-[1px] border-[#D6D6D6] text-center mx-auto space-y-3 rounded-lg p-3", bookings_client?.staffs_id == staff?.id && "bg-[#effcf2]")} onClick={e => {
                        addStaff(staff.id);
                    }}>
                        <Image
                            src={staff?.photo ? process.env.NEXT_PUBLIC_SERVERURL + staff?.photo : '/static/images/23.png'}
                            loading="lazy"
                            alt={staff?.first_name + ' ' + staff?.last_name}
                            className="object-cover w-20 h-20 mx-auto rounded-full"
                            width={80}
                            height={80}
                        />
                        <p className="text-sm font-semibold capitalize">{staff?.first_name + ' ' + staff?.last_name}</p>
                    </div>
                )) : (!loading && data?.length == 0) ? <p className="text-md w-full flex items-center min-h-[100px]">Staff Not Available</p> : ''}
                {loading ? <>
                    <div className='p-3 border-[1px] border-[#D6D6D6] rounded-lg'>
                        <Staff />
                    </div>
                    <div className='p-3 border-[1px] border-[#D6D6D6] rounded-lg'>
                        <Staff />
                    </div>
                    <div className='p-3 border-[1px] border-[#D6D6D6] rounded-lg'>
                        <Staff />
                    </div>
                </> : ''}
            </div>
        </div>
    );
};

export default SelectStaffModal;
