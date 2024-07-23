import Button from '@/components/ui/button';
import React, { useState } from 'react';
import LimitReachedModal from './Modal/Featured-dealModal/LimitReachedModal';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import SubscriptionModal from './Modal/Featured-dealModal/SubscriptionModal';
const FeaturedDealSection = () => {
    const [currentTab, setCurrentTab] = useState('featured');
    const [limitReachedDialog, setLimitReachedDialog] = useState(false);
    const [subscriptionDialog, setsubscriptionDialog] = useState(false);

    const changeTab = (tab = 'basic') => setCurrentTab(tab);
    return (
        <div className="space-y-4">
            <div className="flex items-center gap-3">
                <Button
                    variant={currentTab == 'featured' ? 'primary' : 'disable'}
                    onClick={e => changeTab('featured')}
                >
                    Featured
                </Button>
                <Button
                    variant={currentTab == 'deals' ? 'primary' : 'disable'}
                    onClick={e => changeTab('deals')}
                >
                    Deals
                </Button>
            </div>
            <div className="w-full p-4 space-y-3 bg-white rounded-xl">
                {currentTab == 'featured' && (
                    <>
                        <div className="flex items-start justify-between">
                            <div className="flex-col space-y-2">
                                <p className="text-2xl font-semibold">
                                    Featured service
                                </p>
                                <p className="text-sm text-[#4B4B4B]">
                                    Max 2 services can be added as a featured
                                    service
                                </p>
                            </div>

                            <Dialog open={limitReachedDialog}>
                                <DialogTrigger
                                    onClick={e => setLimitReachedDialog(true)}
                                    className="flex items-center h-8 px-6 py-5 text-sm font-medium text-white uppercase transition rounded-full focus:outline-none bg-primary hover:bg-primary-hover active:scale-90"
                                >
                                    + Add New
                                </DialogTrigger>
                                <DialogContent
                                    close={setLimitReachedDialog}
                                    className="sm:max-w-[450px]"
                                >
                                    <LimitReachedModal
                                        setLimitReachedDialog={
                                            setLimitReachedDialog
                                        }
                                    />
                                </DialogContent>
                            </Dialog>
                        </div>
                        <hr />
                        <div className="space-y-2">
                            <p className="text-xl font-semibold">Massage</p>
                            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                                <div className="border-[#D9D9D9] border space-y-3 px-3 py-5 bg-white rounded-md">
                                    <p className="font-semibold">
                                        Couple Massage
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm">
                                            Couples Massage for 2 hours
                                        </p>
                                        <p className="text-sm">02h</p>
                                        <p className="text-sm font-semibold">
                                            £18
                                        </p>
                                        <p className="text-sm font-medium text-[#FF0000]">
                                            Remove
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-xl font-semibold">
                                Swedish Massage
                            </p>
                            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                                <div className="border-[#D9D9D9] border space-y-3 px-3 py-5 bg-white rounded-md">
                                    <p className="font-semibold">
                                        Couple Massage
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm">
                                            Couples Massage for 2 hours
                                        </p>
                                        <p className="text-sm">02h</p>
                                        <p className="text-sm font-semibold">
                                            £18
                                        </p>
                                        <p className="text-sm font-medium text-[#FF0000]">
                                            Remove
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {currentTab == 'deals' && (
                    <>
                        <div className="flex items-start justify-between">
                            <div className="flex-col space-y-2">
                                <p className="text-2xl font-semibold">Deals</p>
                            </div>

                            <Dialog open={subscriptionDialog}>
                                <DialogTrigger
                                    onClick={e => setsubscriptionDialog(true)}
                                    className="flex items-center h-8 px-6 py-5 text-sm font-medium text-white uppercase transition rounded-full focus:outline-none bg-primary hover:bg-primary-hover active:scale-90"
                                >
                                    + Add New
                                </DialogTrigger>
                                <DialogContent
                                    close={setsubscriptionDialog}
                                    className="sm:max-w-[450px]"
                                >
                                    <SubscriptionModal
                                        setsubscriptionDialog={
                                            setsubscriptionDialog
                                        }
                                    />
                                </DialogContent>
                            </Dialog>
                        </div>
                        <hr />
                        <div className="space-y-2">
                            <p className="text-xl font-semibold">Massage</p>
                            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                                <div className="border-[#D9D9D9] border space-y-3 px-3 py-5 bg-white rounded-md">
                                    <p className="font-semibold">
                                        Couple Massage
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm">
                                            Couples Massage for 2 hours
                                        </p>
                                        <p className="text-sm">02h</p>
                                        <p className="text-sm font-semibold">
                                            £18
                                        </p>
                                        <p className="text-sm font-medium text-[#FF0000]">
                                            Remove
                                        </p>
                                    </div>
                                </div>
                                <div className="border-[#D9D9D9] border space-y-3 px-3 py-5 bg-white rounded-md">
                                    <p className="font-semibold">
                                        Swedish Massage
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm">
                                            Swedish Massage
                                        </p>
                                        <p className="text-sm">02h</p>
                                        <p className="text-sm font-semibold">
                                            £18
                                        </p>
                                        <p className="text-sm font-medium text-[#FF0000]">
                                            Remove
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-xl font-semibold">
                                Swedish Massage
                            </p>
                            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                                <div className="border-[#D9D9D9] border space-y-3 px-3 py-5 bg-white rounded-md">
                                    <p className="font-semibold">
                                        Couple Massage
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm">
                                            Couples Massage for 2 hours
                                        </p>
                                        <p className="text-sm">02h</p>
                                        <p className="text-sm font-semibold">
                                            £18
                                        </p>
                                        <p className="text-sm font-medium text-[#FF0000]">
                                            Remove
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Create deals section start */}

                        {/* <div className="w-full p-4 space-y-3 bg-white rounded-xl">
                <div className="flex items-center justify-between">
                    <p className="text-2xl font-semibold">Create deals</p>
                    <div className="flex items-center gap-3">
                        <Button variant="disable">Cancel</Button>
                        <Button variant="primary">Save</Button>
                    </div>
                </div>
                <div className="space-y-2">
                    <p className="text-xl font-semibold">Massage</p>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                        <div className="border-[#D9D9D9] border space-y-3 px-3 py-5 bg-white rounded-md">
                            <p className="font-semibold">Couple Massage</p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 accent-green-600"
                                    />
                                    <label
                                        htmlFor=""
                                        className="w-full text-sm font-medium text-gray-900 ms-2 min-w-[80px]"
                                    >
                                        Couples Massage for 2 hours
                                    </label>
                                </div>
                                <p className="text-sm">02h</p>
                                <p className="text-sm font-semibold">£18</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 accent-green-600"
                                    />
                                    <label
                                        htmlFor=""
                                        className="w-full text-sm font-medium text-gray-900 ms-2 min-w-[80px]"
                                    >
                                        Couples Massage for 1 hours
                                    </label>
                                </div>
                                <p className="text-sm">01h</p>
                                <p className="text-sm font-semibold">249</p>
                            </div>
                        </div>
                        <div className="border-[#D9D9D9] border space-y-3 px-3 py-5 bg-white rounded-md">
                            <p className="font-semibold">Swedish Massage</p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 accent-green-600"
                                    />
                                    <label
                                        htmlFor=""
                                        className="w-full text-sm font-medium text-gray-900 ms-2 min-w-[80px]"
                                    >
                                        Couples Massage for 2 hours
                                    </label>
                                </div>
                                <p className="text-sm">02h</p>
                                <p className="text-sm font-semibold">£18</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 accent-green-600"
                                    />
                                    <label
                                        htmlFor=""
                                        className="w-full text-sm font-medium text-gray-900 ms-2 min-w-[80px]"
                                    >
                                        Couples Massage for 1 hours
                                    </label>
                                </div>
                                <p className="text-sm">01h</p>
                                <p className="text-sm font-semibold">249</p>
                            </div>
                        </div>
                        <div className="border-[#D9D9D9] border space-y-3 px-3 py-5 bg-white rounded-md">
                            <p className="font-semibold">Biodynamic Massage</p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 accent-green-600"
                                    />
                                    <label
                                        htmlFor=""
                                        className="w-full text-sm font-medium text-gray-900 ms-2 min-w-[80px]"
                                    >
                                        Couples Massage for 2 hours
                                    </label>
                                </div>
                                <p className="text-sm">02h</p>
                                <p className="text-sm font-semibold">£18</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 accent-green-600"
                                    />
                                    <label
                                        htmlFor=""
                                        className="w-full text-sm font-medium text-gray-900 ms-2 min-w-[80px]"
                                    >
                                        Couples Massage for 1 hours
                                    </label>
                                </div>
                                <p className="text-sm">01h</p>
                                <p className="text-sm font-semibold">249</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-xl font-semibold">Massage</p>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                        <div className="border-[#D9D9D9] border space-y-3 px-3 py-5 bg-white rounded-md">
                            <p className="font-semibold">Couple Massage</p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 accent-green-600"
                                    />
                                    <label
                                        htmlFor=""
                                        className="w-full text-sm font-medium text-gray-900 ms-2 min-w-[80px]"
                                    >
                                        Couples Massage for 2 hours
                                    </label>
                                </div>
                                <p className="text-sm">02h</p>
                                <p className="text-sm font-semibold">£18</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 accent-green-600"
                                    />
                                    <label
                                        htmlFor=""
                                        className="w-full text-sm font-medium text-gray-900 ms-2 min-w-[80px]"
                                    >
                                        Couples Massage for 1 hours
                                    </label>
                                </div>
                                <p className="text-sm">01h</p>
                                <p className="text-sm font-semibold">249</p>
                            </div>
                        </div>
                        <div className="border-[#D9D9D9] border space-y-3 px-3 py-5 bg-white rounded-md">
                            <p className="font-semibold">Swedish Massage</p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 accent-green-600"
                                    />
                                    <label
                                        htmlFor=""
                                        className="w-full text-sm font-medium text-gray-900 ms-2 min-w-[80px]"
                                    >
                                        Couples Massage for 2 hours
                                    </label>
                                </div>
                                <p className="text-sm">02h</p>
                                <p className="text-sm font-semibold">£18</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 accent-green-600"
                                    />
                                    <label
                                        htmlFor=""
                                        className="w-full text-sm font-medium text-gray-900 ms-2 min-w-[80px]"
                                    >
                                        Couples Massage for 1 hours
                                    </label>
                                </div>
                                <p className="text-sm">01h</p>
                                <p className="text-sm font-semibold">249</p>
                            </div>
                        </div>
                        <div className="border-[#D9D9D9] border space-y-3 px-3 py-5 bg-white rounded-md">
                            <p className="font-semibold">Biodynamic Massage</p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 accent-green-600"
                                    />
                                    <label
                                        htmlFor=""
                                        className="w-full text-sm font-medium text-gray-900 ms-2 min-w-[80px]"
                                    >
                                        Couples Massage for 2 hours
                                    </label>
                                </div>
                                <p className="text-sm">02h</p>
                                <p className="text-sm font-semibold">£18</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 accent-green-600"
                                    />
                                    <label
                                        htmlFor=""
                                        className="w-full text-sm font-medium text-gray-900 ms-2 min-w-[80px]"
                                    >
                                        Couples Massage for 1 hours
                                    </label>
                                </div>
                                <p className="text-sm">01h</p>
                                <p className="text-sm font-semibold">249</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
                    </>
                )}
            </div>

            {/* Select service section start */}

            {/* <div className="w-full p-4 space-y-3 bg-white rounded-xl">
                <div className="flex items-center justify-between">
                    <p className="text-2xl font-semibold">Select service</p>
                    <div className="flex items-center gap-3">
                        <Button variant="disable">Cancel</Button>
                        <Button variant="primary">Save</Button>
                    </div>
                </div>
                <div className="space-y-2">
                    <p className="text-xl font-semibold">Massage</p>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                        <div className="border-[#D9D9D9] border space-y-3 px-3 py-5 bg-white rounded-md">
                            <p className="font-semibold">Couple Massage</p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 accent-green-600"
                                    />
                                    <label
                                        htmlFor=""
                                        className="w-full text-sm font-medium text-gray-900 ms-2 min-w-[80px]"
                                    >
                                        Couples Massage for 2 hours
                                    </label>
                                </div>
                                <p className="text-sm">02h</p>
                                <p className="text-sm font-semibold">£18</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 accent-green-600"
                                    />
                                    <label
                                        htmlFor=""
                                        className="w-full text-sm font-medium text-gray-900 ms-2 min-w-[80px]"
                                    >
                                        Couples Massage for 1 hours
                                    </label>
                                </div>
                                <p className="text-sm">01h</p>
                                <p className="text-sm font-semibold">249</p>
                            </div>
                        </div>
                        <div className="border-[#D9D9D9] border space-y-3 px-3 py-5 bg-white rounded-md">
                            <p className="font-semibold">Swedish Massage</p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 accent-green-600"
                                    />
                                    <label
                                        htmlFor=""
                                        className="w-full text-sm font-medium text-gray-900 ms-2 min-w-[80px]"
                                    >
                                        Couples Massage for 2 hours
                                    </label>
                                </div>
                                <p className="text-sm">02h</p>
                                <p className="text-sm font-semibold">£18</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 accent-green-600"
                                    />
                                    <label
                                        htmlFor=""
                                        className="w-full text-sm font-medium text-gray-900 ms-2 min-w-[80px]"
                                    >
                                        Couples Massage for 1 hours
                                    </label>
                                </div>
                                <p className="text-sm">01h</p>
                                <p className="text-sm font-semibold">249</p>
                            </div>
                        </div>
                        <div className="border-[#D9D9D9] border space-y-3 px-3 py-5 bg-white rounded-md">
                            <p className="font-semibold">Biodynamic Massage</p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 accent-green-600"
                                    />
                                    <label
                                        htmlFor=""
                                        className="w-full text-sm font-medium text-gray-900 ms-2 min-w-[80px]"
                                    >
                                        Couples Massage for 2 hours
                                    </label>
                                </div>
                                <p className="text-sm">02h</p>
                                <p className="text-sm font-semibold">£18</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 accent-green-600"
                                    />
                                    <label
                                        htmlFor=""
                                        className="w-full text-sm font-medium text-gray-900 ms-2 min-w-[80px]"
                                    >
                                        Couples Massage for 1 hours
                                    </label>
                                </div>
                                <p className="text-sm">01h</p>
                                <p className="text-sm font-semibold">249</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-xl font-semibold">Massage</p>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                        <div className="border-[#D9D9D9] border space-y-3 px-3 py-5 bg-white rounded-md">
                            <p className="font-semibold">Couple Massage</p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 accent-green-600"
                                    />
                                    <label
                                        htmlFor=""
                                        className="w-full text-sm font-medium text-gray-900 ms-2 min-w-[80px]"
                                    >
                                        Couples Massage for 2 hours
                                    </label>
                                </div>
                                <p className="text-sm">02h</p>
                                <p className="text-sm font-semibold">£18</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 accent-green-600"
                                    />
                                    <label
                                        htmlFor=""
                                        className="w-full text-sm font-medium text-gray-900 ms-2 min-w-[80px]"
                                    >
                                        Couples Massage for 1 hours
                                    </label>
                                </div>
                                <p className="text-sm">01h</p>
                                <p className="text-sm font-semibold">249</p>
                            </div>
                        </div>
                        <div className="border-[#D9D9D9] border space-y-3 px-3 py-5 bg-white rounded-md">
                            <p className="font-semibold">Swedish Massage</p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 accent-green-600"
                                    />
                                    <label
                                        htmlFor=""
                                        className="w-full text-sm font-medium text-gray-900 ms-2 min-w-[80px]"
                                    >
                                        Couples Massage for 2 hours
                                    </label>
                                </div>
                                <p className="text-sm">02h</p>
                                <p className="text-sm font-semibold">£18</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 accent-green-600"
                                    />
                                    <label
                                        htmlFor=""
                                        className="w-full text-sm font-medium text-gray-900 ms-2 min-w-[80px]"
                                    >
                                        Couples Massage for 1 hours
                                    </label>
                                </div>
                                <p className="text-sm">01h</p>
                                <p className="text-sm font-semibold">249</p>
                            </div>
                        </div>
                        <div className="border-[#D9D9D9] border space-y-3 px-3 py-5 bg-white rounded-md">
                            <p className="font-semibold">Biodynamic Massage</p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 accent-green-600"
                                    />
                                    <label
                                        htmlFor=""
                                        className="w-full text-sm font-medium text-gray-900 ms-2 min-w-[80px]"
                                    >
                                        Couples Massage for 2 hours
                                    </label>
                                </div>
                                <p className="text-sm">02h</p>
                                <p className="text-sm font-semibold">£18</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 accent-green-600"
                                    />
                                    <label
                                        htmlFor=""
                                        className="w-full text-sm font-medium text-gray-900 ms-2 min-w-[80px]"
                                    >
                                        Couples Massage for 1 hours
                                    </label>
                                </div>
                                <p className="text-sm">01h</p>
                                <p className="text-sm font-semibold">249</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default FeaturedDealSection;
