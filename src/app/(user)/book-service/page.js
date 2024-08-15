'use client';
import { useState } from 'react';
import ClientInfo from '@/app/(user)/book-service/ClientInfo';
import Time from '@/app/(user)/book-service/Time';
import Product from '@/app/(user)/book-service/Product';
import Billing from '@/app/(user)/book-service/Billing';

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
        // else if (currentTab === 'Billing') changeTab('basket');
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
        <div className="bg-[#FAFAFA] w-full">
            <div className="container w-full xl:px-20">
                <div className="flex flex-col justify-center w-full gap-4 md:flex-row md:items-center md:w-full py-7">
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
                                    className={`text-sm ${activeTab === tab
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
                {/* {currentTab === 'basket' && (
                    <Basketpage handleContinue={handleContinue} />
                )} */}
            </div>
        </div>
    );
};

export default TimeDate;
