import Button from '@/components/ui/button';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewNewModal = () => {
    return (
        <div className="w-full space-y-3">
            <div className="grid items-start grid-cols-1 gap-2 md:grid-cols-2 md:gap-10">
                <div className="space-y-3">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <FaStar className="text-[#FFCC00] text-2xl" />
                            <FaStar className="text-[#FFCC00] text-2xl" />
                            <FaStar className="text-[#FFCC00] text-2xl" />
                            <FaStar className="text-[#FFCC00] text-2xl" />
                            <FaStar className="text-[#D6D6D6] text-2xl" />
                        </div>
                        <p>Ellen McLaughlin</p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-[#656565] md:text-base text-sm">
                            {`Lorem Ipsum is simply dummy text of the printing and
                            typeset industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s.`}
                        </p>
                        <p>06/06/2024 | Employee: Nuzami</p>
                    </div>
                    <textarea
                        id="message"
                        rows="4"
                        className="input_field"
                        placeholder="Write your thoughts here..."
                    ></textarea>
                </div>
                <div className="p-3 space-y-3">
                    <div className="space-y-2">
                        <p className="text-sm">Treatment Rating</p>
                        <div className="flex items-center gap-2">
                            <FaStar className="text-[#FFCC00] text-2xl" />
                            <FaStar className="text-[#FFCC00] text-2xl" />
                            <FaStar className="text-[#FFCC00] text-2xl" />
                            <FaStar className="text-[#FFCC00] text-2xl" />
                            <FaStar className="text-[#D6D6D6] text-2xl" />
                        </div>
                    </div>
                    <hr />
                    <div className="space-y-2">
                        <p className="text-sm">Ambiance</p>
                        <div className="flex items-center gap-2">
                            <FaStar className="text-[#FFCC00] text-2xl" />
                            <FaStar className="text-[#FFCC00] text-2xl" />
                            <FaStar className="text-[#FFCC00] text-2xl" />
                            <FaStar className="text-[#FFCC00] text-2xl" />
                            <FaStar className="text-[#D6D6D6] text-2xl" />
                        </div>
                    </div>
                    <hr />
                    <div className="space-y-2">
                        <p className="text-sm">Cleanliness</p>
                        <div className="flex items-center gap-2">
                            <FaStar className="text-[#FFCC00] text-2xl" />
                            <FaStar className="text-[#FFCC00] text-2xl" />
                            <FaStar className="text-[#FFCC00] text-2xl" />
                            <FaStar className="text-[#FFCC00] text-2xl" />
                            <FaStar className="text-[#D6D6D6] text-2xl" />
                        </div>
                    </div>
                    <hr />
                    <div className="space-y-2">
                        <p className="text-sm">Staff</p>
                        <div className="flex items-center gap-2">
                            <FaStar className="text-[#FFCC00] text-2xl" />
                            <FaStar className="text-[#FFCC00] text-2xl" />
                            <FaStar className="text-[#FFCC00] text-2xl" />
                            <FaStar className="text-[#FFCC00] text-2xl" />
                            <FaStar className="text-[#D6D6D6] text-2xl" />
                        </div>
                    </div>
                </div>
            </div>
            <Button variant="primary">Post</Button>
        </div>
    );
};

export default ReviewNewModal;
