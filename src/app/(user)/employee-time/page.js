'use client';
import React, { useState } from 'react';
import ClientInfo from './ClientInfo';
import Time from './Time';
import Product from './Product';
import Billing from './Billing';
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { LuUser2 } from "react-icons/lu";
// import { DatePicker } from "@/components/user/Home/FindNearByForm/datepicker";
// import { AiOutlineClose } from "react-icons/ai";
// import Button from "@/components/ui/button";
// import Link from "next/link";
// import Customdatepicker from "@/components/user/Home/FindNearByForm/customdatepicker";
// import Validation from "@/constants/validation";

const TimeDate = () => {
    const [activeTab, setActiveTab] = useState('Client');
    const [currentTab, setCurrentTab] = useState('Client');

    const changeTab = tab => {
        setActiveTab(tab);
        setCurrentTab(tab);
    };

    const handleContinue = () => {
        if (currentTab === 'Client') changeTab('Time');
        else if (currentTab === 'Time') changeTab('Product');
        else if (currentTab === 'Product') changeTab('Billing');
    };

    const handleBack = () => {
        if (currentTab === 'Billing') changeTab('Product');
        else if (currentTab === 'Product') changeTab('Time');
        else if (currentTab === 'Time') changeTab('Client');
    };

    const getStepperColor = tab => {
        const tabs = ['Client', 'Time', 'Product', 'Billing'];
        const currentIndex = tabs.indexOf(currentTab);
        const tabIndex = tabs.indexOf(tab);

        if (tabIndex < currentIndex) return 'bg-[#711F7E]';
        if (tabIndex === currentIndex) return 'bg-[#0AADA4]';
        return 'bg-gray-400';
    };
    return (
        // <div className="bg-[#FAFAFA] w-full ">
        //     <div className="container w-full">
        //         <div className="flex items-center justify-center w-full gap-4 py-7">
        //             <div
        //                 className="flex items-center gap-3 cursor-pointer"
        //                 onClick={e => changeTab('Client')}
        //             >
        //                 <p
        //                     className={`rounded-full w-8 h-8 flex justify-center items-center ${
        //                         activeTab === 'Client'
        //                             ? 'bg-[#0AADA4]'
        //                             : 'bg-[#B8B8B8]'
        //                     } text-white`}
        //                 >
        //                     1
        //                 </p>
        //                 <p
        //                     className={`text-sm ${
        //                         activeTab === 'Client'
        //                             ? 'font-bold'
        //                             : 'text-[#8D8D8D]'
        //                     }`}
        //                 >
        //                     Client info
        //                 </p>
        //                 <hr className="w-20 h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
        //             </div>
        //             <div
        //                 className="flex items-center gap-3 cursor-pointer"
        //                 onClick={e => changeTab('Time')}
        //             >
        //                 <p
        //                     className={`rounded-full w-8 h-8 flex justify-center items-center ${
        //                         activeTab === 'Time'
        //                             ? 'bg-[#0AADA4]'
        //                             : 'bg-[#B8B8B8]'
        //                     } text-white`}
        //                 >
        //                     2
        //                 </p>
        //                 <p
        //                     className={`text-sm ${
        //                         activeTab === 'Time'
        //                             ? 'font-bold'
        //                             : 'text-[#8D8D8D]'
        //                     }`}
        //                 >
        //                     Time
        //                 </p>
        //                 <hr className="w-20 h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
        //             </div>
        //             <div
        //                 className="flex items-center gap-3 cursor-pointer"
        //                 onClick={e => changeTab('Product')}
        //             >
        //                 <p
        //                     className={`rounded-full w-8 h-8 flex justify-center items-center ${
        //                         activeTab === 'Product'
        //                             ? 'bg-[#0AADA4]'
        //                             : 'bg-[#B8B8B8]'
        //                     } text-white`}
        //                 >
        //                     2
        //                 </p>
        //                 <p
        //                     className={`text-sm ${
        //                         activeTab === 'Product'
        //                             ? 'font-bold'
        //                             : 'text-[#8D8D8D]'
        //                     }`}
        //                 >
        //                     Product
        //                 </p>
        //                 <hr className="w-20 h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
        //             </div>
        //             <div
        //                 className="flex items-center gap-3 cursor-pointer"
        //                 onClick={e => changeTab('Billing')}
        //             >
        //                 <p
        //                     className={`rounded-full w-8 h-8 flex justify-center items-center ${
        //                         activeTab === 'Billing'
        //                             ? 'bg-[#0AADA4]'
        //                             : 'bg-[#B8B8B8]'
        //                     } text-white`}
        //                 >
        //                     2
        //                 </p>
        //                 <p
        //                     className={`text-sm ${
        //                         activeTab === 'Billing'
        //                             ? 'font-bold'
        //                             : 'text-[#8D8D8D]'
        //                     }`}
        //                 >
        //                     Billing Address
        //                 </p>
        //             </div>
        //         </div>
        //         {currentTab == 'Client' && <ClientInfo />}
        //         {currentTab == 'Time' && <Time />}
        //         {currentTab == 'Product' && <Product />}
        //         {currentTab == 'Billing' && <Billing />}
        //     </div>
        // </div>
        <div className="bg-[#FAFAFA] w-full">
            <div className="container w-full">
                <div className="flex items-center justify-center w-full gap-4 py-7">
                    {['Client', 'Time', 'Product', 'Billing'].map(
                        (tab, index) => (
                            <div
                                key={tab}
                                className="flex items-center gap-3 cursor-pointer"
                                onClick={() => changeTab(tab)}
                            >
                                <p
                                    className={`rounded-full w-8 h-8 flex justify-center items-center ${getStepperColor(
                                        tab
                                    )} text-white`}
                                >
                                    {index + 1}
                                </p>
                                <p
                                    className={`text-sm ${
                                        activeTab === tab
                                            ? 'font-bold'
                                            : 'text-[#8D8D8D]'
                                    }`}
                                >
                                    {tab === 'Client' ? 'Client Info' : tab}
                                </p>
                                {index < 3 && (
                                    <hr className="w-20 h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                                )}
                            </div>
                        )
                    )}
                </div>
                {currentTab === 'Client' && (
                    <ClientInfo handleContinue={handleContinue} />
                )}
                {currentTab === 'Time' && (
                    <Time
                        handleContinue={handleContinue}
                        handleBack={handleBack}
                    />
                )}
                {currentTab === 'Product' && (
                    <Product
                        handleContinue={handleContinue}
                        handleBack={handleBack}
                    />
                )}
                {currentTab === 'Billing' && (
                    <Billing handleBack={handleBack} />
                )}
            </div>
        </div>
    );
};

export default TimeDate;
