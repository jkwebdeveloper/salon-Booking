import { POST } from '@/app/api/post';
import { Error, Spinner } from '@/components';
import Button from '@/components/ui/button';
import Label from '@/components/ui/form/label';
import Validation from '@/constants/validation';
import { Add_To_Cart } from '@/redux/features/cartSlice';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';

const Billing = ({ handleContinue, handleBack }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const cart = useSelector((state) => state.Cart.cart);
    const user = useSelector((state) => state.userAuth.user) || '';
    const defaultData = cart?.bookings_clients && {
        first_name: cart?.billing_address?.billing_first_name,
        last_name: cart?.billing_address?.billing_last_name,
        email: cart?.billing_address?.billing_email,
        address_line_one: cart?.billing_address?.billing_address_line_one,
        city: cart?.billing_address?.billing_city,
        postcode: cart?.billing_address?.billing_postcode,
    } || { first_name: '', last_name: '', email: '', address_line_one: '', city: '', postcode: '' };

    const [formData, setFormData] = React.useState(defaultData);
    const [formState, setFormState] = React.useState({
        loading: false,
        error: '',
        success: '',
    });
    const form = React.useRef(null);

    const addBillingInfo = async () => {
        const valideData = await POST.validateForm({ form: form.current });
        if (valideData) {
            const resp = await POST.request({ url: '/add-billing-address', form: formData, rawdata: true, token: user?.api_token, formState, setFormState });
            if (resp && resp?.code == 200) {
                dispatch(Add_To_Cart(resp?.data));
                router.push('/my-basket');
            }
        }
    }
    return (
        <div className="container relative max-w-[1200px] flex flex-col gap-4 px-0 lg:flex-row lg:px-28 md:pb-40 md:-mb-20">
            <div className="lg:w-[60%] w-full mx-auto space-y-5 rounded-xl shadow-lg h-fit min-h-[350px] p-4 bg-white">
                <p className="text-sm font-bold lg:text-2xl">Billing Address</p>
                <form className="space-y-4" ref={form}>
                    <div className="flex flex-col w-full gap-3 lg:flex-row">
                        <div className="w-full space-y-1 text-left lg:w-1/2">
                            <Label htmlFor="first_name" text="First Name" required />
                            <input type="text" name="first_name" className="input_field" placeholder="Enter First Name"
                                pattern={Validation?.firstname?.pattern}
                                defaultValue={formData?.first_name}
                                onInput={(e) => setFormData({ ...formData, first_name: e.target.value })}
                            />
                            <p className="error">{Validation?.firstname.msg}</p>
                        </div>
                        <div className="w-full space-y-1 text-left lg:w-1/2">
                            <Label htmlFor="last_name" text="Last Name" required />
                            <input type="text" name="last_name" className="input_field" placeholder="Enter Last Name"
                                onInput={(e) => setFormData({ ...formData, last_name: e.target.value })}
                                defaultValue={formData?.last_name}
                                pattern={Validation?.lastname?.pattern}
                            />
                            <p className="error">{Validation?.lastname.msg}</p>
                        </div>
                    </div>
                    <div className="w-full space-y-1 text-left">
                        <Label htmlFor="email" text="Email" required />
                        <input type="text" name="email" id="email" className="input_field" placeholder="Email"
                            onInput={(e) => setFormData({ ...formData, email: e.target.value })}
                            defaultValue={formData?.email}
                            pattern={Validation?.email?.pattern}
                        />
                        <p className="error">{Validation?.email.msg}</p>
                    </div>
                    <div className="w-full space-y-1 text-left">
                        <Label htmlFor="Address" text="Address" required />
                        <input type="text" id="Address" name="address_line_one" className="input_field" placeholder="Address"
                            onInput={(e) => setFormData({ ...formData, address_line_one: e.target.value })}
                            defaultValue={formData?.address_line_one}
                            pattern={Validation?.address?.pattern}
                        />
                        <p className="error">{Validation?.address.msg}</p>
                    </div>
                    <div className="flex flex-col w-full gap-3 lg:flex-row">
                        <div className="w-full space-y-1 text-left lg:w-1/2">
                            <Label htmlFor="City" text="City" required />
                            <input type="text" name="city" id="City" className="input_field" placeholder="City"
                                onInput={(e) => setFormData({ ...formData, city: e.target.value })}
                                defaultValue={formData?.city}
                                pattern={Validation?.city?.pattern}
                            />
                            <p className="error">{Validation?.city.msg}</p>
                        </div>
                        <div className="w-full space-y-1 text-left lg:w-1/2">
                            <Label htmlFor="Postcode" text="Postcode" required />
                            <input
                                type="text" name="postcode" id="Postcode" className="input_field" placeholder="Postcode"
                                onInput={(e) => setFormData({ ...formData, postcode: e.target.value })}
                                defaultValue={formData?.postcode}
                                pattern={Validation?.postcode?.pattern}
                            />
                            <p className="error">{Validation?.postcode.msg}</p>
                        </div>
                    </div>
                </form>
            </div>
            <div className="shadow-lg rounded-xl h-fit min-h-fit relative lg:w-[40%] w-full mx-auto space-y-5 p-4 bg-white">
                <div className="flex items-center gap-2">
                    <Image
                        src={'/static/images/booking.png'}
                        loading="lazy"
                        alt="Hero Banner"
                        objectFit="cover"
                        className="object-cover h-full"
                        width={70}
                        height={70}
                    />
                    <div>
                        <p className="text-base font-bold lg:text-lg">{cart?.vendors_info?.salon_name}</p>
                        <p className="text-sm">{cart?.vendors_info?.address_line_one}</p>
                        <p className="text-sm">{cart?.vendors_info?.address_line_two}</p>
                    </div>
                </div>
                <div className="flex-grow space-y-4">
                    <div className="flex-grow space-y-4">
                        {cart?.bookings_services ? cart?.bookings_services?.map((item, index) => (
                            <div key={v4()} className="flex items-start justify-between pb-2 border-b-[2px]">
                                <div>
                                    <p className="text-sm font-semibold text-neutral-600">{item?.vendors_service_info?.service_title}</p>
                                    <p className="text-sm">{+item?.vendors_service_info?.duration * 60} Min</p>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    {cart?.bookings_clients?.map((client, index) => (
                                        item?.staffs_id
                                            ? <div key={v4()} className='flex flex-col items-end justify-center gap-1.5'>
                                                {item?.is_couples_massage == 1 ? <span className='capitalize'>{client?.name}</span> : ''}
                                                <span className='text-sm leading-4'>{item?.staff_info?.sur_name + ' ' + item?.staff_info?.first_name + ' ' + item?.staff_info?.last_name}</span>
                                                <Button
                                                    size="sm"
                                                    onClick={e => getAvailableStaff({ id: item?.vendors_service_info?.id, service: item, bookings_client: client })}
                                                    className="h-6 px-2 py-0 text-white bg-teal-500 rounded-md shadow-none hover:bg-teal-700"
                                                >
                                                    Edit Staff
                                                </Button>
                                            </div>
                                            : <Button
                                                key={v4()}
                                                size="sm"
                                                onClick={e => getAvailableStaff({ id: item?.vendors_service_info?.id, service: item, bookings_client: client })}
                                                className="bg-transparent shadow-none ring-1 ring-neutral-300 text-neutral-500 rounded-md hover:bg-[#F4E9FF] px-2 py-0 h-6 hover:border-primary disabled:opacity-30"
                                                disabled={!selectedTime}
                                            >
                                                + Add staff
                                            </Button>
                                    ))}
                                </div>
                            </div>
                        )) : ''}
                    </div>
                    {cart?.bookings_products && cart?.bookings_products.map((product, index) => (
                        <div className="flex items-center justify-between" key={v4()}>
                            <div className="flex items-center gap-2">
                                <p className='text-sm md:text-base'>{product?.products_info[0]?.name}</p>
                                <p className='text-sm md:text-base'>x {product?.qty}</p>
                            </div>
                            <p className='text-sm md:text-base'>£{product?.total_price}</p>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center w-full gap-3 mt-auto">
                    <Button variant="outline" className="md:w-full border-[1px] py-5 rounded-full border-[#CCCCCC] bg-background shadow-sm hover:bg-primary hover:text-white" onClick={e => handleBack()}>
                        Back
                    </Button>
                    <Button
                        variant="primary"
                        className="border-[1px] md:w-full"
                        onClick={e => addBillingInfo()}
                        disabled={formState.loading}
                    >
                        <Spinner
                            show={formState?.loading}
                            width="25"
                            height="25"
                            text="Continue"
                        />
                    </Button>
                </div>
                {formState?.error && (
                    <Error error={formState?.error} />
                )}
            </div>
        </div>
    );
};

export default Billing;
