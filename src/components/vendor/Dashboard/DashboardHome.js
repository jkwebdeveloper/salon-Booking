import Sidebar from '@/components/global/DashboardHeader/Sidebar';
import Button from '@/components/ui/button';
import React, { useState } from 'react';
import { FaEye, FaStar } from 'react-icons/fa';
import { MdPhoneInTalk } from 'react-icons/md';
import Image from 'next/image';
import { LuUser2 } from 'react-icons/lu';
import { BiCart } from 'react-icons/bi';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle,
} from '@/components/ui/dialog';
import { IoIosArrowForward } from 'react-icons/io';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { ImUserTie } from 'react-icons/im';
import ReviewNewModal from './Modal/ReviewModal';

const DashBoardHome = () => {
    const [reviewDialog, setReviewDialog] = useState(false);
    const [review, setReview] = useState(false);
    const [stats, setStats] = useState(true);

    const handleReviewClick = () => {
        setReview(true);
        setStats(false);
    };

    const handleStatsClick = () => {
        setReview(false);
        setStats(true);
    };
    return (
        <div className="space-y-4">
            <div className="flex items-center gap-3">
                <Button
                    variant={stats ? 'primary' : 'disable'}
                    onClick={handleStatsClick}
                >
                    Stats
                </Button>
                <Button
                    variant={review ? 'primary' : 'disable'}
                    onClick={handleReviewClick}
                >
                    Reviews
                </Button>
            </div>
            {stats && (
                <>
                    <div className="w-full bg-white rounded-xl">
                        <div className="items-center justify-between md:flex felx-col ">
                            <div className="flex items-center gap-4">
                                <Image
                                    src={'/static/images/review.png'}
                                    alt="logo"
                                    loading="lazy"
                                    width={200}
                                    height={200}
                                />
                                <div className="flex-col space-y-1">
                                    <p className="text-lg font-semibold md:text-3xl">
                                        Spa Life & Massage
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-2">
                                            <FaStar className="text-[#FFCC00]" />
                                            <FaStar className="text-[#FFCC00]" />
                                            <FaStar className="text-[#FFCC00]" />
                                            <FaStar className="text-[#FFCC00]" />
                                            <FaStar className="text-[#D6D6D6]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center p-3 mr-5 md:p-0 gap-7">
                                <div className="space-y-2 text-center">
                                    <FaEye className="mx-auto text-xl text-primary_color" />
                                    <p>PamperTree View</p>
                                </div>
                                <div className="space-y-2 text-center">
                                    <MdPhoneInTalk className="mx-auto text-xl text-primary_color" />
                                    <p>Contact PamperTree</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <div className="bg-gradient-to-r from-[#0893D3] py-8 px-4 rounded-xl to-[#1EB9D8]">
                            <div className="flex items-center justify-between text-white">
                                <div>
                                    <LuUser2 className="bg-[#4f8199] rounded-full text-white text-4xl p-2" />
                                    <p>Total Customers</p>
                                </div>
                                <div className="">
                                    <p className="text-4xl font-semibold">12</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-[#FE585B] py-8 px-4 rounded-xl to-[#F6819B]">
                            <div className="flex items-center justify-between text-white">
                                <div>
                                    <RiShoppingCart2Line className="bg-[#4f8199] rounded-full text-white text-4xl p-2" />
                                    <p>Total Revenue</p>
                                </div>
                                <div className="">
                                    <p className="text-4xl font-semibold">
                                        £845
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-[#393C89] py-8 px-4 rounded-xl to-[#389AC1]">
                            <div className="flex items-center justify-between text-white">
                                <div>
                                    <ImUserTie className="bg-[#4f8199] rounded-full text-white text-4xl p-2" />
                                    <p>Employees</p>
                                </div>
                                <div className="">
                                    <p className="text-4xl font-semibold">2</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-[#393C89] py-8 px-4 rounded-xl to-[#389AC1]">
                            <div className="flex items-center justify-between text-white">
                                <div>
                                    <ImUserTie className="bg-[#4f8199] rounded-full text-white text-4xl p-2" />
                                    <p>Employees</p>
                                </div>
                                <div className="">
                                    <p className="text-4xl font-semibold">2</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-2xl font-semibold">
                        Monthly Revenue Outline
                    </p>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                        <div className="p-3 space-y-2 bg-white rounded-lg">
                            <div className="flex items-center gap-2 mx-2 font-medium">
                                <p className="">Monthly Revenue Outline </p>
                                <IoIosArrowForward />
                            </div>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="font-medium text-sm text-[#757575]">
                                            Current period
                                        </TableCell>
                                        <TableCell className="text-right font-medium text-sm text-[#757575]">
                                            Revenue
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium text-sm text-[#757575]">
                                            Nuzami
                                        </TableCell>
                                        <TableCell className="text-right font-medium text-sm text-[#757575]">
                                            £241
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                        <div className="p-3 space-y-2 bg-white rounded-lg">
                            <div className="flex items-center gap-2 mx-2 font-medium">
                                <p className="">Monthly Revenue Outline </p>
                                <IoIosArrowForward />
                            </div>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="font-medium text-sm text-[#757575]">
                                            Current period
                                        </TableCell>
                                        <TableCell className="text-right font-medium text-sm text-[#757575]">
                                            Revenue
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium text-sm text-[#757575]">
                                            Nuzami
                                        </TableCell>
                                        <TableCell className="text-right font-medium text-sm text-[#757575]">
                                            £241
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                        <div className="p-3 space-y-2 bg-white rounded-lg">
                            <div className="flex items-center gap-2 mx-2 font-medium">
                                <p className="">Monthly Revenue Outline </p>
                                <IoIosArrowForward />
                            </div>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="font-medium text-sm text-[#757575]">
                                            Current period
                                        </TableCell>
                                        <TableCell className="text-right font-medium text-sm text-[#757575]">
                                            Revenue
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium text-sm text-[#757575]">
                                            Nuzami
                                        </TableCell>
                                        <TableCell className="text-right font-medium text-sm text-[#757575]">
                                            £241
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium text-sm text-[#757575]">
                                            Current period
                                        </TableCell>
                                        <TableCell className="text-right font-medium text-sm text-[#757575]">
                                            Revenue
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium text-sm text-[#757575]">
                                            Nuzami
                                        </TableCell>
                                        <TableCell className="text-right font-medium text-sm text-[#757575]">
                                            £241
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </>
            )}
            {review && (
                <div className="space-y-4">
                    <p className="text-2xl font-semibold">Customer Reviews</p>
                    <div className="flex-col items-start gap-5 lg:flex">
                        <div className="p-8 bg-white rounded-lg">
                            <div className="flex items-center gap-3">
                                <p className="text-5xl font-semibold">4.0</p>
                                <div className="flex items-center gap-2">
                                    <FaStar className="text-[#FFCC00]" />
                                    <FaStar className="text-[#FFCC00]" />
                                    <FaStar className="text-[#FFCC00]" />
                                    <FaStar className="text-[#FFCC00]" />
                                    <FaStar className="text-[#D6D6D6]" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 mt-5 lg:mt-0">
                            <div className="px-4 py-3 bg-white rounded-lg">
                                <div className="flex items-center gap-3">
                                    <p className="text-xl font-semibold">
                                        Ambience
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <FaStar className="text-[#FFCC00]" />
                                        <FaStar className="text-[#FFCC00]" />
                                        <FaStar className="text-[#FFCC00]" />
                                        <FaStar className="text-[#FFCC00]" />
                                        <FaStar className="text-[#D6D6D6]" />
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-3 mt-5 bg-white rounded-lg lg:mt-0">
                                <div className="flex items-center gap-3">
                                    <p className="text-xl font-semibold">
                                        Cleanliness
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <FaStar className="text-[#FFCC00]" />
                                        <FaStar className="text-[#FFCC00]" />
                                        <FaStar className="text-[#FFCC00]" />
                                        <FaStar className="text-[#D6D6D6]" />
                                        <FaStar className="text-[#D6D6D6]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 py-3 mt-5 bg-white rounded-lg lg:mt-0">
                            <div className="flex items-center gap-3">
                                <p className="text-xl font-semibold">Staff</p>
                                <div className="flex items-center gap-2">
                                    <FaStar className="text-[#FFCC00]" />
                                    <FaStar className="text-[#FFCC00]" />
                                    <FaStar className="text-[#FFCC00]" />
                                    <FaStar className="text-[#FFCC00]" />
                                    <FaStar className="text-[#D6D6D6]" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-4 space-y-4 bg-white rounded-xl">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <FaStar className="text-[#FFCC00]" />
                                <FaStar className="text-[#FFCC00]" />
                                <FaStar className="text-[#FFCC00]" />
                                <FaStar className="text-[#FFCC00]" />
                                <FaStar className="text-[#D6D6D6]" />
                            </div>
                            <p className="text-sm text-[#656565]">
                                {`Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.`}
                            </p>
                            <Dialog open={reviewDialog}>
                                <DialogTrigger
                                    onClick={e => setReviewDialog(true)}
                                    className=""
                                >
                                    <p className="font-medium">
                                        Ellen McLaughlin
                                    </p>
                                </DialogTrigger>
                                <DialogContent
                                    close={setReviewDialog}
                                    className="sm:max-w-[750px]"
                                >
                                    <DialogTitle className="font-semibold">
                                        Review Details
                                    </DialogTitle>
                                    <ReviewNewModal
                                        setReviewDialog={setReviewDialog}
                                    />
                                </DialogContent>
                            </Dialog>

                            <p className="text-[#6D6F7D] text-sm">
                                2 hours ago
                            </p>
                        </div>
                        <hr />
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <FaStar className="text-[#FFCC00]" />
                                <FaStar className="text-[#FFCC00]" />
                                <FaStar className="text-[#FFCC00]" />
                                <FaStar className="text-[#FFCC00]" />
                                <FaStar className="text-[#D6D6D6]" />
                            </div>
                            <p className="text-sm text-[#656565]">
                                {`Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.`}
                            </p>
                            <p className="font-medium">Ellen McLaughlin</p>
                            <p className="text-[#6D6F7D] text-sm">
                                2 hours ago
                            </p>
                        </div>
                        <hr />
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <FaStar className="text-[#FFCC00]" />
                                <FaStar className="text-[#FFCC00]" />
                                <FaStar className="text-[#FFCC00]" />
                                <FaStar className="text-[#FFCC00]" />
                                <FaStar className="text-[#D6D6D6]" />
                            </div>
                            <p className="text-sm text-[#656565]">
                                {`Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.`}
                            </p>
                            <p className="font-medium">Ellen McLaughlin</p>
                            <p className="text-[#6D6F7D] text-sm">
                                2 hours ago
                            </p>
                        </div>
                        <hr />
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <FaStar className="text-[#FFCC00]" />
                                <FaStar className="text-[#FFCC00]" />
                                <FaStar className="text-[#FFCC00]" />
                                <FaStar className="text-[#FFCC00]" />
                                <FaStar className="text-[#D6D6D6]" />
                            </div>
                            <p className="text-sm text-[#656565]">
                                {`Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.`}
                            </p>
                            <p className="font-medium">Ellen McLaughlin</p>
                            <p className="text-[#6D6F7D] text-sm">
                                2 hours ago
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DashBoardHome;
