import Button from '@/components/ui/button';
import Image from 'next/image';
import React, { useState } from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import { FaMinus, FaPlus } from 'react-icons/fa';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle,
} from '@/components/ui/dialog';
import MoreInfoModal from './MoreInfoModal';

const Product = ({ handleContinue, handleBack }) => {
    const [moreInfo, setmoreInfo] = useState(false);

    return (
        <div className="container flex flex-col min-h-[55dvh] gap-4 px-0 lg:flex-row lg:px-28 relative md:mb-10">
           <div className="lg:w-[60%] w-full mx-auto space-y-5 rounded-md shadow-lg h-fit min-h-[350px] p-4 bg-white">
    <p className="text-lg font-bold lg:text-3xl">
        Would you like to buy product?
    </p>
    <div className="flex-grow overflow-x-auto">
        <table className="w-full text-left min-w-[600px]">
            <thead className="space-y-4">
                <tr className="border-b">
                    <th className="p-2 text-sm text-left lg:text-base">Name</th>
                    <th className="p-2 text-sm text-left lg:text-base">Quantity</th>
                    <th className="p-2 text-sm text-left lg:text-base">Price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody className="space-y-4">
                <tr className="border-b">
                    <td className="p-2">
                        <div className="flex-col items-center">
                            <p className="mr-2 text-sm lg:text-base">CeraVe Face wash (200 ml)</p>
                            <div className="flex items-center gap-2">
                                <BsInfoCircleFill className="text-[#666666] text-sm lg:text-base" />
                                <Dialog open={moreInfo} className="w-1/2">
                                    <DialogTrigger
                                        onClick={e => setmoreInfo(true)}
                                        className="text-[#666666] text-sm lg:text-base cursor-pointer"
                                    >
                                        More info
                                    </DialogTrigger>
                                    <DialogContent
                                        close={setmoreInfo}
                                        className="sm:max-w-[750px]"
                                    >
                                        <DialogTitle className="text-3xl font-bold">
                                            CeraVe Face wash (200 ml)
                                        </DialogTitle>
                                        <MoreInfoModal
                                            setmoreInfo={setmoreInfo}
                                        />
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </div>
                    </td>
                    <td className="flex items-center p-2">
                        <div className="flex items-center mt-2 justify-center gap-4 border border-[#e3e3e3] rounded-md">
                            <button className="hover:bg-[#d8d8d8] text-center hover:text-black w-full p-2">
                                <FaMinus className="text-[#A3A1A1] text-sm lg:text-base text-center hover:text-black" />
                            </button>
                            <h1 className="w-full text-sm lg:text-base">4</h1>
                            <button className="hover:bg-[#d8d8d8] w-full hover:text-black p-2">
                                <FaPlus className="text-[#A3A1A1] hover:text-black text-sm lg:text-base" />
                            </button>
                        </div>
                    </td>
                    <td className="p-2 text-sm lg:text-base">£5.00</td>
                    <td className="p-2">
                        <Button variant="danger" className="w-full">
                            Remove
                        </Button>
                    </td>
                </tr>
                <tr className="border-b">
                    <td className="p-2">
                        <div className="flex-col items-center">
                            <p className="mr-2 text-sm lg:text-base">CeraVe Face wash (200 ml)</p>
                            <div className="flex items-center gap-2">
                                <BsInfoCircleFill className="text-[#666666] text-sm lg:text-base" />
                                <p className="text-[#666666] cursor-pointer text-sm lg:text-base">
                                    More info
                                </p>
                            </div>
                        </div>
                    </td>
                    <td className="flex items-center p-2">
                        <div className="flex items-center mt-2 justify-center gap-4 border border-[#e3e3e3] rounded-md">
                            <button className="hover:bg-[#d8d8d8] text-center hover:text-black w-full p-2">
                                <FaMinus className="text-[#A3A1A1] text-center text-sm lg:text-base hover:text-black" />
                            </button>
                            <h1 className="w-full">4</h1>
                            <button className="hover:bg-[#d8d8d8] w-full hover:text-black p-2">
                                <FaPlus className="text-[#A3A1A1] text-sm lg:text-base hover:text-black" />
                            </button>
                        </div>
                    </td>
                    <td className="p-2 text-sm lg:text-base">£5.00</td>
                    <td className="p-2">
                        <button className=" w-full py-2 border-[1px] rounded-full border-primary bg-background shadow-sm hover:bg-primary hover:text-white">
                            Add
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

            <div className="shadow-lg rounded-md lg:w-[40%] p-4 space-y-4 w-full mx-auto bg-white flex flex-col min-h-[350px]">
                <div className="flex items-start gap-2">
                    <Image
                        src={'/static/images/booking.png'}
                        loading="lazy"
                        alt="Hero Banner"
                        objectFit="cover"
                        className="object-cover h-full"
                        width={60}
                        height={80}
                    />
                    <div>
                        <p className="text-sm font-bold md:text-lg">Spa Life & Massage</p>
                        <p className="text-sm">
                            Street 420, Addington, London, EH1 1AE, UK
                        </p>
                    </div>
                </div>
                <div className="flex-grow space-y-4">
                    <div className="flex items-start justify-between">
                        <div className="space-y-2">
                            <p className="text-sm font-medium">
                                New Couples Massage
                            </p>
                            <p className="text-sm ">1 hour</p>
                        </div>
                        <p className="text-sm font-medium">£349</p>
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
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <p className='text-sm md:text-base'>Face wash</p>
                            <p className='text-sm md:text-base'>x 3</p>
                        </div>
                        <p className='text-sm md:text-base'>£15</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <p className='text-sm md:text-base'>Face wash</p>
                            <p className='text-sm md:text-base'>x 3</p>
                        </div>
                        <p className='text-sm md:text-base'>£15</p>
                    </div>
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
                        onClick={handleContinue}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
