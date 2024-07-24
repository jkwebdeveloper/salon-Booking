import Button from '@/components/ui/button';
import React, { useState } from 'react';
import LimitReachedModal from './Modal/Featured-dealModal/LimitReachedModal';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import SubscriptionModal from './Modal/Featured-dealModal/SubscriptionModal';
import SelectService from './SelectService';
import CreateDeals from './CreateDeals';
const FeaturedDealSection = () => {
    const [currentTab, setCurrentTab] = useState('featured');
    const [limitReachedDialog, setLimitReachedDialog] = useState(false);
    const [subscriptionDialog, setsubscriptionDialog] = useState(false);
    const [showSelectService, setShowSelectService] = useState(false);
    const [showCreateService, setShowCreateService] = useState(false);

    const changeTab = (tab = 'basic') => setCurrentTab(tab);
    return (
        <>
            {!showCreateService && (
                <div className="space-y-4">
                    {!showSelectService && (
                        <>
                            <div className="flex items-center gap-3">
                                <Button
                                    variant={
                                        currentTab == 'featured'
                                            ? 'primary'
                                            : 'disable'
                                    }
                                    onClick={e => changeTab('featured')}
                                >
                                    Featured
                                </Button>
                                <Button
                                    variant={
                                        currentTab == 'deals'
                                            ? 'primary'
                                            : 'disable'
                                    }
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
                                                    Max 2 services can be added
                                                    as a featured service
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Button
                                                    variant="primary"
                                                    onClick={() =>
                                                        setShowSelectService(
                                                            true
                                                        )
                                                    }
                                                >
                                                    service
                                                </Button>
                                                <Dialog
                                                    open={limitReachedDialog}
                                                >
                                                    <DialogTrigger
                                                        onClick={e =>
                                                            setLimitReachedDialog(
                                                                true
                                                            )
                                                        }
                                                        className="flex items-center h-8 px-6 py-5 text-sm font-medium text-white uppercase transition rounded-full focus:outline-none bg-primary hover:bg-primary-hover active:scale-90"
                                                    >
                                                        + Add New
                                                    </DialogTrigger>
                                                    <DialogContent
                                                        close={
                                                            setLimitReachedDialog
                                                        }
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
                                        </div>
                                        <hr />
                                        <div className="space-y-2">
                                            <p className="text-xl font-semibold">
                                                Massage
                                            </p>
                                            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                                                <div className="border-[#D9D9D9] border space-y-3 px-3 py-5 bg-white rounded-md">
                                                    <p className="font-semibold">
                                                        Couple Massage
                                                    </p>
                                                    <div className="flex items-center justify-between">
                                                        <p className="text-sm">
                                                            Couples Massage for
                                                            2 hours
                                                        </p>
                                                        <p className="text-sm">
                                                            02h
                                                        </p>
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
                                                            Couples Massage for
                                                            2 hours
                                                        </p>
                                                        <p className="text-sm">
                                                            02h
                                                        </p>
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
                                                <p className="text-2xl font-semibold">
                                                    Deals
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Button
                                                    variant="primary"
                                                    onClick={() =>
                                                        setShowCreateService(
                                                            true
                                                        )
                                                    }
                                                >
                                                    Create
                                                </Button>
                                                <Dialog
                                                    open={subscriptionDialog}
                                                >
                                                    <DialogTrigger
                                                        onClick={e =>
                                                            setsubscriptionDialog(
                                                                true
                                                            )
                                                        }
                                                        className="flex items-center h-8 px-6 py-5 text-sm font-medium text-white uppercase transition rounded-full focus:outline-none bg-primary hover:bg-primary-hover active:scale-90"
                                                    >
                                                        + Add New
                                                    </DialogTrigger>
                                                    <DialogContent
                                                        close={
                                                            setsubscriptionDialog
                                                        }
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
                                        </div>
                                        <hr />
                                        <div className="space-y-2">
                                            <p className="text-xl font-semibold">
                                                Massage
                                            </p>
                                            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                                                <div className="border-[#D9D9D9] border space-y-3 px-3 py-5 bg-white rounded-md">
                                                    <p className="font-semibold">
                                                        Couple Massage
                                                    </p>
                                                    <div className="flex items-center justify-between">
                                                        <p className="text-sm">
                                                            Couples Massage for
                                                            2 hours
                                                        </p>
                                                        <p className="text-sm">
                                                            02h
                                                        </p>
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
                                                        <p className="text-sm">
                                                            02h
                                                        </p>
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
                                                            Couples Massage for
                                                            2 hours
                                                        </p>
                                                        <p className="text-sm">
                                                            02h
                                                        </p>
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
                            </div>
                        </>
                    )}
                    {showSelectService && (
                        <SelectService
                            onClose={() => setShowSelectService(false)}
                        />
                    )}
                </div>
            )}

            {showCreateService && (
                <CreateDeals onClose={() => setShowCreateService(false)} />
            )}
        </>
    );
};

export default FeaturedDealSection;
