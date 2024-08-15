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
import { useSelector } from 'react-redux';
import { POST } from '@/app/api/post';
import { GET } from '@/app/api/get';
import { set } from 'date-fns';
import { CartProduct } from '@/components/ui/skelton/cartproduct';

const Product = ({ handleContinue, handleBack }) => {
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

    const addProductToCart = async () => {
        handleContinue();
    }

    useEffect(() => {
        if (Object.keys(cart).length > 0) {
            getVendorProducts();
        }
    }, [cart]);

    return (
        <div className="container relative flex flex-col gap-4 px-0 lg:flex-row lg:px-28 md:pb-40 md:-mb-20">
            <div className="lg:w-[60%] flex-grow w-full mx-auto space-y-5 rounded-xl shadow-lg h-fit min-h-[350px] p-4 bg-white">
                <p className="text-lg font-bold lg:text-2xl">
                    Would you like to buy product?
                </p>
                <div className="flex-grow overflow-x-auto">
                    {(!loading && products?.length)
                        ? <table className="w-full text-left min-w-[600px]">
                            <thead className="space-y-4">
                                <tr className="border-b">
                                    <th className="p-2 text-sm text-left lg:text-base">Name</th>
                                    <th className="p-2 text-sm text-left lg:text-base">Quantity</th>
                                    <th className="p-2 text-sm text-left lg:text-base">Price</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody className="space-y-4">
                                {products.map((product, index) => (
                                    <tr className="border-b">
                                        <td className="p-2">
                                            <div className="flex-col items-center">
                                                <p className="mr-2 text-sm lg:text-base">{product?.name}</p>
                                                <div className="flex items-center gap-2">
                                                    <Button variant="link" className="text-[#666666] text-sm p-0 lg:text-base cursor-pointer" onClick={e => setmoreInfo(product)}>
                                                        <BsInfoCircleFill className="text-[#666666] text-sm lg:text-base" />
                                                        More Info
                                                    </Button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="flex items-center p-2">
                                            <div className="flex items-center mt-2 justify-center gap-4 border border-[#e3e3e3] rounded-md">
                                                <button className="hover:bg-[#d8d8d8] text-center hover:text-black w-full p-2 disabled:opacity-30" disabled={product.qty == 1} onClick={e => {
                                                    if (product.qty > 1) {
                                                        product.qty = product.qty - 1;
                                                        setProducts(prev => [...prev.filter(p => p.id !== product.id), product]);
                                                    }
                                                }}>
                                                    <FaMinus className="text-[#A3A1A1] text-sm lg:text-base text-center hover:text-black" />
                                                </button>
                                                <span className="w-full text-sm lg:text-base">{product?.qty}</span>
                                                <button className="hover:bg-[#d8d8d8] w-full hover:text-black p-2 disabled:opacity-30" disabled={product.qty == product?.quantity_in_stock} onClick={e => {
                                                    if (product.qty != product?.quantity_in_stock) {
                                                        product.qty = product.qty + 1;
                                                        setProducts(prev => [...prev.filter(p => p.id !== product.id), product]);
                                                    }
                                                }}>
                                                    <FaPlus className="text-[#A3A1A1] hover:text-black text-sm lg:text-base" />
                                                </button>
                                            </div>
                                        </td>
                                        <td className="p-2 text-sm lg:text-base">£{product?.price}</td>
                                        <td className="p-2 text-end">
                                            <Button
                                                className="py-0 md:w-full max-w-[100px]"
                                                variant={product?.selected ? "danger" : "outline"}
                                                onClick={e => {
                                                    product.selected = !product.selected;
                                                    setProducts(prev => [...prev.filter(p => p.id !== product.id), product]);
                                                }}
                                            >
                                                {product?.selected ? 'Remove' : 'Add'}
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
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
                    {products.filter(product => product.selected).map((product, index) => (
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
                    <button
                        className="w-full border-[1px] py-2 rounded-full  border-[#CCCCCC] bg-background shadow-sm hover:bg-primary hover:text-white"
                        onClick={handleBack}
                    >
                        Back
                    </button>
                    <button
                        className="w-full focus:outline-none py-3 rounded-full capitalize bg-[#711F7E] hover:bg-[#BF27D7] text-white font-medium  active:scale-90 transition text-sm"
                        onClick={e => addProductToCart()}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
