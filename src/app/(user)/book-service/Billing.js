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

const Billing = ({ handleContinue, handleBack }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const cart = useSelector((state) => state.Cart.cart);
    const user = useSelector((state) => state.userAuth.user) || '';
    // const defaultData = cart?.bookings_clients && {
    //     client1: cart?.bookings_clients[0]?.name,
    //     client2: cart?.bookings_clients[1]?.name,
    //     phone1: cart?.bookings_clients[0]?.phone,
    //     phone2: cart?.bookings_clients[1]?.phone
    // } || { client1: '', client2: '', phone1: '', phone2: '' };

    const [formData, setFormData] = React.useState({ first_name: '', last_name: '', email: '', address: '', city: '', postcode: '' });
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
            <div className="lg:w-[60%] w-full mx-auto space-y-5 rounded-md shadow-lg h-fit min-h-[350px] p-4 bg-white">
                <p className="text-sm font-bold lg:text-2xl">Billing Address</p>
                <form className="space-y-4" ref={form}>
                    <div className="flex flex-col w-full gap-3 lg:flex-row">
                        <div className="w-full space-y-1 text-left lg:w-1/2">
                            <Label htmlFor="first_name" text="First Name" required />
                            <input type="text" name="first_name" className="input_field" placeholder="Enter First Name"
                                pattern={Validation?.firstname?.pattern}
                                onInput={(e) => setFormData({ ...formData, first_name: e.target.value })}
                            />
                            <p className="error">{Validation?.firstname.msg}</p>
                        </div>
                        <div className="w-full space-y-1 text-left lg:w-1/2">
                            <Label htmlFor="last_name" text="Last Name" required />
                            <input type="text" name="last_name" className="input_field" placeholder="Enter Last Name"
                                onInput={(e) => setFormData({ ...formData, last_name: e.target.value })}
                                pattern={Validation?.lastname?.pattern}
                            />
                            <p className="error">{Validation?.lastname.msg}</p>
                        </div>
                    </div>
                    <div className="w-full space-y-1 text-left">
                        <Label htmlFor="email" text="Email" required />
                        <input type="text" name="email" id="email" className="input_field" placeholder="Email"
                            onInput={(e) => setFormData({ ...formData, email: e.target.value })}
                            pattern={Validation?.email?.pattern}
                        />
                        <p className="error">{Validation?.email.msg}</p>
                    </div>
                    <div className="w-full space-y-1 text-left">
                        <Label htmlFor="Address" text="Address" required />
                        <input type="text" id="Address" name="address_line_one" className="input_field" placeholder="Address"
                            onInput={(e) => setFormData({ ...formData, address_line_one: e.target.value })}
                            pattern={Validation?.address?.pattern}
                        // pattern={Validation?.phone?.pattern}
                        />
                        <p className="error">{Validation?.address.msg}</p>
                    </div>
                    <div className="flex flex-col w-full gap-3 lg:flex-row">
                        <div className="w-full space-y-1 text-left lg:w-1/2">
                            <Label htmlFor="City" text="City" required />
                            <input type="text" name="city" id="City" className="input_field" placeholder="City"
                                onInput={(e) => setFormData({ ...formData, city: e.target.value })}
                                pattern={Validation?.city?.pattern}
                            />
                            <p className="error">{Validation?.city.msg}</p>
                        </div>
                        <div className="w-full space-y-1 text-left lg:w-1/2">
                            <Label htmlFor="Postcode" text="Postcode" required />
                            <input
                                type="text" name="postcode" id="Postcode" className="input_field" placeholder="Postcode"
                                onInput={(e) => setFormData({ ...formData, postcode: e.target.value })}
                                pattern={Validation?.postcode?.pattern}
                            />
                            <p className="error">{Validation?.postcode.msg}</p>
                        </div>
                    </div>
                </form>
            </div>
            <div className="shadow-lg rounded-md h-fit min-h-fit relative lg:w-[40%] w-full mx-auto space-y-5 p-4 bg-white">
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
                            <div className="flex items-start justify-between">
                                <div className="space-y-1">
                                    <p className="text-sm font-semibold text-neutral-600">
                                        {item?.vendors_service_info?.service_title}
                                    </p>
                                    <p className="text-sm">{+item?.vendors_service_info?.duration * 60} Min</p>
                                </div>
                                <p className="text-sm font-semibold text-neutral-600">£{item?.vendors_service_info?.sale_price || item?.vendors_service_info?.price}</p>
                            </div>
                        )) : null}
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-sm md:text-base">Client 1</p>
                        <div className="flex items-center gap-2">
                            <p className='text-sm md:text-base'>Nuzami</p>
                            <Button className="bg-[#0AADA4] text-white rounded-md">
                                Edit
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-sm md:text-base">Client 1</p>
                        <div className="flex items-center gap-2">
                            <p className='text-sm md:text-base'>Nuzami</p>
                            <Button className="bg-[#0AADA4] text-white rounded-md">
                                Edit
                            </Button>
                        </div>
                    </div>
                    {cart?.bookings_products && cart?.bookings_products.map((product, index) => (
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <p className='text-sm md:text-base'>{product?.name}</p>
                                <p className='text-sm md:text-base'>x {product?.qty}</p>
                            </div>
                            <p className='text-sm md:text-base'>£{product?.price}</p>
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
