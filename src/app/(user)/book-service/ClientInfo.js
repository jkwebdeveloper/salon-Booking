import { POST } from '@/app/api/post';
import { Error, Label, Spinner } from '@/components';
import Button from '@/components/ui/button';
import Validation from '@/constants/validation';
import { Add_To_Cart } from '@/redux/features/cartSlice';
import Image from 'next/image';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ClientInfo = ({ handleContinue }) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.Cart.cart) || {};
    const user = useSelector((state) => state.userAuth.user) || '';
    const form = React.useRef(null);
    const containCoupleMassage = cart?.bookings_services?.length && cart?.bookings_services?.some((item) => item?.is_couples_massage == 1) || 0;
    const defaultData = cart?.bookings_clients && {
        client1: cart?.bookings_clients[0]?.name,
        client2: cart?.bookings_clients[1]?.name,
        phone1: cart?.bookings_clients[0]?.phone,
        phone2: cart?.bookings_clients[1]?.phone
    } || { client1: '', client2: '', phone1: '', phone2: '' };

    const [formData, setFormData] = React.useState(defaultData);

    const [formState, setFormState] = React.useState({
        loading: false,
        error: '',
        success: '',
    });
    const addClientInfo = async () => {
        const valideData = await POST.validateForm({ form: form.current });
        if (valideData) {
            const client = [];
            formData?.client1 && client.push({ name: formData.client1, phone: formData.phone1 });
            formData?.client2 && client.push({ name: formData.client2, phone: formData.phone2 });
            const data = {
                bookings_id: cart?.bookings_id,
                clients: client
            }
            const resp = await POST.request({ url: '/add-client-info', form: data, rawdata: true, token: user?.api_token, formState, setFormState });
            if (resp && resp?.code == 200) {
                dispatch(Add_To_Cart(resp?.data));
                handleContinue();
            }
        }
    }
    return (
        <div className="container relative max-w-[1200px] flex flex-col gap-4 px-0 lg:flex-row lg:px-28 md:pb-40 md:-mb-20">
            <div className="lg:w-[60%] w-full mx-auto space-y-5 rounded-xl shadow-lg h-fit min-h-[350px] p-4 bg-white">
                <p className="text-lg font-bold lg:text-2xl">Client Booking Information</p>
                <form className="space-y-4" ref={form}>
                    <div className="w-full space-y-1 text-left">
                        <Label htmlFor="Client" text="Client name 1" required />
                        <input
                            type="text"
                            name="Client"
                            id="Client"
                            className="input_field"
                            placeholder="Enter here..."
                            onInput={(e) => setFormData({ ...formData, client1: e.target.value })}
                            pattern={Validation.title.pattern}
                            defaultValue={cart?.bookings_clients && cart?.bookings_clients[0]?.name || ''}
                        />
                        <p className="error">Enter Valid Client Name</p>
                    </div>
                    <div className="w-full space-y-1 text-left">
                        <Label
                            htmlFor="Phone"
                            text="Phone number 1"
                            required
                        />
                        <input
                            type="text"
                            name="Phone"
                            id="Phone"
                            className="input_field"
                            placeholder="Enter here..."
                            onInput={(e) => setFormData({ ...formData, phone1: e.target.value })}
                            pattern={Validation.phone.pattern}
                            defaultValue={cart?.bookings_clients && cart?.bookings_clients[0]?.phone || ''}
                        />
                        <p className="error">{Validation.phone.msg}</p>
                    </div>
                    {containCoupleMassage
                        ? <>
                            <div className="w-full space-y-1 text-left">
                                <Label htmlFor="Client2" text="Client name 2" required />
                                <input
                                    type="text"
                                    name="Client2"
                                    id="Client2"
                                    className="input_field"
                                    placeholder="Enter here..."
                                    onInput={(e) => setFormData({ ...formData, client2: e.target.value })}
                                    pattern={Validation.title.pattern}
                                    defaultValue={cart?.bookings_clients && cart?.bookings_clients[1]?.name || ''}
                                />
                                <p className="error">Enter Valid Client Name</p>
                            </div>
                            <div className="w-full space-y-1 text-left">
                                <Label
                                    htmlFor="Phone2"
                                    text="Phone number 2"
                                    required
                                />
                                <input
                                    type="text"
                                    name="Phone2"
                                    id="Phone2"
                                    className="input_field"
                                    placeholder="Enter here..."
                                    onInput={(e) => setFormData({ ...formData, phone2: e.target.value })}
                                    pattern={Validation.phone.pattern}
                                    defaultValue={cart?.bookings_clients && cart?.bookings_clients[1]?.phone || ''}
                                />
                                <p className="error">{Validation.phone.msg}</p>
                            </div>
                        </>
                        : null}
                </form>
            </div>
            <div className="shadow-lg rounded-xl lg:w-[40%] p-4 space-y-4 w-full mx-auto bg-white flex flex-col min-h-[350px]">
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
                    {cart?.bookings_services ? cart?.bookings_services?.map((item, index) => (
                        <div className="flex items-start justify-between pb-2 border-b-[2px]">
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
                <div className="flex items-center justify-center w-full gap-3 mt-auto">
                    {/* <Button variant="outline" className="md:w-full border-[1px] py-5 rounded-full border-[#CCCCCC] bg-background shadow-sm hover:bg-primary hover:text-white">
                        Back
                    </Button> */}
                    <Button
                        variant="primary"
                        className="border-[1px] md:w-full"
                        onClick={e => addClientInfo()}
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

export default ClientInfo;
