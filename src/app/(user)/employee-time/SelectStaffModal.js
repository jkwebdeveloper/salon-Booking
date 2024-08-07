import Image from 'next/image';
import React from 'react';

const SelectStaffModal = () => {
    return (
        <div className="w-full space-y-3">
            <p className="text-[#0AADA4] lg:text-base text-sm">
                Select professional for couple massage
            </p>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
                {/* <div className="bg-white px-4 py-4 space-y-3 flex-col items-center justify-center rounded-md hover:bg-[#F4E9FF] p-3 hover:border-primary border-[1px] border-[#E6E6E6]">
                    <Image
                        src={'/static/images/spa_life.png'}
                        loading="lazy"
                        alt="Hero Banner"
                        className="object-cover h-full"
                        width={50}
                        height={80}
                    />
                    <p>Nuzami</p>
                </div> */}
                <div className="bg-white w-full cursor-pointer lg:h-fit  hover:bg-[#F4E9FF] hover:border-primary border-[1px] border-[#D6D6D6] text-center mx-auto space-y-6 rounded-lg p-3">
                    <Image
                        src={'/static/images/23.png'}
                        loading="lazy"
                        alt="Hero Banner"
                        className="object-cover mx-auto"
                        width={80}
                        height={80}
                    />
                    <p className="font-semibold">Nuzami</p>
                </div>
                <div className="bg-white w-full cursor-pointer lg:h-fit  hover:bg-[#F4E9FF] hover:border-primary border-[1px] border-[#D6D6D6] text-center mx-auto space-y-6 rounded-lg p-3">
                    <Image
                        src={'/static/images/23.png'}
                        loading="lazy"
                        alt="Hero Banner"
                        className="object-cover mx-auto"
                        width={80}
                        height={80}
                    />
                    <p className="font-semibold">Nuzami</p>
                </div>
                <div className="bg-white w-full cursor-pointer lg:h-fit  hover:bg-[#F4E9FF] hover:border-primary border-[1px] border-[#D6D6D6] text-center mx-auto space-y-6 rounded-lg p-3">
                    <Image
                        src={'/static/images/23.png'}
                        loading="lazy"
                        alt="Hero Banner"
                        className="object-cover mx-auto"
                        width={80}
                        height={80}
                    />
                    <p className="font-semibold">Nuzami</p>
                </div>
                <div className="bg-white w-full cursor-pointer lg:h-fit  hover:bg-[#F4E9FF] hover:border-primary border-[1px] border-[#D6D6D6] text-center mx-auto space-y-6 rounded-lg p-3">
                    <Image
                        src={'/static/images/23.png'}
                        loading="lazy"
                        alt="Hero Banner"
                        className="object-cover mx-auto"
                        width={80}
                        height={80}
                    />
                    <p className="font-semibold">Nuzami</p>
                </div>
                <div className="bg-white w-full cursor-pointer lg:h-fit  hover:bg-[#F4E9FF] hover:border-primary border-[1px] border-[#D6D6D6] text-center mx-auto space-y-6 rounded-lg p-3">
                    <Image
                        src={'/static/images/23.png'}
                        loading="lazy"
                        alt="Hero Banner"
                        className="object-cover mx-auto"
                        width={80}
                        height={80}
                    />
                    <p className="font-semibold">Nuzami</p>
                </div>
            </div>
        </div>
    );
};

export default SelectStaffModal;
