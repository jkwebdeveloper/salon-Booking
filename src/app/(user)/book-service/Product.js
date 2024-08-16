import Button from '@/components/ui/button';
import Image from 'next/image';
import React, { use, useEffect, useState } from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import { FaMinus, FaPlus } from 'react-icons/fa';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle,
} from '@/components/ui/dialog';
import MoreInfoModal from './MoreInfoModal';
import { useDispatch, useSelector } from 'react-redux';
import { POST } from '@/app/api/post';
import { GET } from '@/app/api/get';
import { set } from 'date-fns';
import { CartProduct } from '@/components/ui/skelton/cartproduct';
import { Add_To_Cart } from '@/redux/features/cartSlice';
import { v4 } from 'uuid';

const Product = ({ handleContinue, handleBack }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userAuth.user);
    const cart = useSelector((state) => state.Cart.cart);
    const [moreInfo, setmoreInfo] = useState(false);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);


    const getVendorProducts = async () => {
        setLoading(true);
        const resp = await GET.request({ url: '/get-vendors-products', token: user?.api_token });
        setLoading(false);
        if (resp && resp.code == 200) {
            const productsWithQty = resp.data?.length ? resp.data.map(product => {
                return { ...product, qty: 1, selected: false };
            }) : [];
            setProducts(productsWithQty);
        }
    }

    const addProductToCart = async ({ id, qty, vendors_id }) => {
        const form = {
            type: 'products',
            qty,
            products_id: id,
            vendors_id,
            is_couples_massage: 0
        }
        const resp = await POST.request({ url: '/add-to-bascket', form, token: user?.api_token });
        if (resp && resp.code == 200) {
            dispatch(Add_To_Cart(resp.data));
        }
    }
    const removeProductToCart = async ({ id }) => {
        const form = {
            type: 'products',
            id,
        }
        const resp = await POST.request({ url: '/remove-to-bascket', form, token: user?.api_token });
        if (resp && resp.code == 200) {
            dispatch(Add_To_Cart(resp.data));
        }
    }

    const updateQty = async ({ product, qty }) => {
        product.qty = qty;
        setProducts(prev => [...prev.filter(p => p.id !== product.id), product]);
        dispatch(Add_To_Cart({
            ...cart, 'bookings_products': cart?.bookings_products.map(products =>
                products?.products_info[0]?.id == product.id ? { ...products, updated: true } : products
            )
        }));
    }

    useEffect(() => {
        if (Object.keys(cart).length > 0) {
            getVendorProducts();
        }
    }, []);

    return (
        <div className="container relative max-w-[1350px] flex flex-col gap-4 px-0 lg:flex-row lg:px-28 md:pb-40 md:-mb-20">
            <div className="lg:w-[60%] flex-grow w-full mx-auto space-y-5 rounded-xl shadow-lg h-fit min-h-[350px] p-4 bg-white">
                <p className="text-lg font-bold lg:text-2xl">
                    Would you like to buy product?
                </p>
                <div className="flex-grow overflow-x-auto">
                    {(!loading && products?.length)
                        ? <table className="w-full text-left min-w-[600px]">
                            <thead className="space-y-4">
                                <tr className="border-b text-neutral-700">
                                    <th className="p-2 font-normal text-left text-md">Name</th>
                                    <th className="p-2 font-normal text-left text-md">Quantity</th>
                                    <th className="p-2 font-normal text-left text-md">Price</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody className="space-y-4">
                                {products.map((product, index) => {
                                    const isUpdated = cart?.bookings_products.filter(products => products?.products_info[0]?.id == product.id)[0]?.updated;
                                    const isProductSelected = cart?.bookings_products.filter(products => products?.products_info[0]?.id == product.id).length != 0;
                                    return (
                                        <tr key={v4()} className="border-b">
                                            <td className="p-2 w-[40%]">
                                                <div className="flex-col items-center">
                                                    <p className="mr-2 text-md">{product?.name}</p>
                                                    <div className="flex items-center gap-2">
                                                        <Button variant="link" className="text-[#666666] text-sm p-0 cursor-pointer" onClick={e => setmoreInfo(product)}>
                                                            <BsInfoCircleFill className="text-[#666666] text-sm" />
                                                            More Info
                                                        </Button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="flex items-center p-2">
                                                <div className="flex items-center mt-2 justify-center gap-4 border border-[#e3e3e3] rounded-md">
                                                    <button
                                                        className="hover:bg-[#d8d8d8] text-center hover:text-black w-full p-2 disabled:opacity-30"
                                                        disabled={product.qty == 1}
                                                        onClick={e => {
                                                            const newProducts = cart?.bookings_products.filter(p => p.id !== product.id);
                                                            if (product.qty > 1) {
                                                                updateQty({ product, qty: product.qty - 1 });
                                                                // product.qty = product.qty - 1;
                                                                // setProducts(prev => [...prev.filter(p => p.id !== product.id), product]);
                                                                // dispatch(Add_To_Cart({
                                                                //     ...cart, 'bookings_products': cart?.bookings_products.map(products =>
                                                                //         products?.products_info[0]?.id == product.id ? { ...products, updated: true } : products
                                                                //     )
                                                                // }));
                                                            }
                                                        }}
                                                    >
                                                        <FaMinus className="text-[#A3A1A1] text-sm lg:text-base text-center hover:text-black" />
                                                    </button>
                                                    <span className="w-full text-sm lg:text-base">{product?.qty}</span>
                                                    <button
                                                        className="hover:bg-[#d8d8d8] w-full hover:text-black p-2 disabled:opacity-30"
                                                        disabled={product.qty == product?.quantity_in_stock}
                                                        onClick={e => {
                                                            if (product.qty != product?.quantity_in_stock) {
                                                                updateQty({ product, qty: product.qty + 1 });
                                                                // product.qty = product.qty + 1;
                                                                // setProducts(prev => [...prev.filter(p => p.id !== product.id), product]);
                                                                // dispatch(Add_To_Cart({
                                                                //     ...cart, 'bookings_products': cart?.bookings_products.map(products =>
                                                                //         products?.products_info[0]?.id == product.id ? { ...products, updated: true } : products
                                                                //     )
                                                                // }));
                                                            }
                                                        }}
                                                    >
                                                        <FaPlus className="text-[#A3A1A1] hover:text-black text-sm lg:text-base" />
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="p-2 text-sm lg:text-base">£{product?.price}</td>
                                            <td className="p-2 text-end">
                                                <Button
                                                    className="py-0 md:w-full max-w-[140px] min-w-[140px] text-sm"
                                                    variant={(isProductSelected && !isUpdated) ? "danger" : isUpdated ? "primary" : "outline"}
                                                    onClick={e => {
                                                        if (cart?.bookings_products && isProductSelected && !isUpdated) {
                                                            removeProductToCart({ id: cart?.bookings_products.filter(p => p?.products_info[0]?.id == product.id)[0].id })
                                                        } else if (isUpdated) {
                                                            addProductToCart({ id: product?.id, qty: product?.qty, vendors_id: cart?.vendors_info?.id })
                                                        } else {
                                                            addProductToCart({ id: product?.id, qty: product?.qty, vendors_id: cart?.vendors_info?.id })
                                                        }
                                                    }}
                                                >
                                                    {(cart?.bookings_products && isProductSelected && !isUpdated) ? 'Remove' : isUpdated ? 'Update' : 'Add'}
                                                </Button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        : <CartProduct />
                    }
                </div>
                <Dialog open={moreInfo ? true : false} className="w-1/2">
                    <DialogContent
                        close={e => setmoreInfo('')}
                        className="sm:max-w-[750px]"
                    >
                        <DialogTitle className="text-3xl font-bold">
                            {moreInfo?.name}
                        </DialogTitle>
                        <MoreInfoModal
                            moreInfo={moreInfo}
                            setmoreInfo={e => setmoreInfo('')}
                        />
                    </DialogContent>
                </Dialog>
            </div>
            <div className="shadow-lg rounded-xl lg:w-[40%] max-w-[350px] p-4 space-y-4 w-full mx-auto bg-white flex flex-col">
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
                        <div key={v4()} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <p className='text-sm md:text-base'>{product?.products_info[0]?.name}</p>
                                <p className='text-sm md:text-base'>x {product?.qty}</p>
                            </div>
                            <p className='text-sm md:text-base'>£{product?.total_price}</p>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center w-full gap-3 mt-auto">
                    <button
                        className="w-full border-[1px] py-2 rounded-full  border-[#CCCCCC] bg-background shadow-sm hover:bg-primary hover:text-white"
                        onClick={handleBack}
                    >
                        Back
                    </button>
                    <button
                        className="w-full focus:outline-none py-3 rounded-full capitalize bg-[#711F7E] hover:bg-[#BF27D7] text-white font-medium  active:scale-90 transition text-sm"
                        onClick={e => handleContinue()}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
