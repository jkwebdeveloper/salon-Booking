import React, { Fragment, useEffect, useState } from 'react';

import LimitReachedModal from './Modal/Featured-dealModal/LimitReachedModal';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import SubscriptionModal from './Modal/Featured-dealModal/SubscriptionModal';
import SelectService from '@/components/vendor/Dashboard/SelectService';
import CreateDeals from '@/components/vendor/Dashboard/CreateDeals';
import { useVendorServices } from '@/hooks';
import { Spinner, Button } from '@/components';
import { GET } from '@/app/api/get';
import { v4 } from 'uuid';

const FeaturedDealSection = () => {
    const [currentTab, setCurrentTab] = useState('featured');
    const [getServices, vendorServices] = useVendorServices();
    const [maxAllowed, setMaxAllowed] = useState({ service: 2, deals: 2 });
    const [limitReachedDialog, setLimitReachedDialog] = useState(false);
    const [subscriptionDialog, setsubscriptionDialog] = useState(false);
    const [showSelectService, setShowSelectService] = useState(false);
    const [showCreateService, setShowCreateService] = useState(false);

    const featuredServiceCount = React.useRef(0);
    const dealsServiceCount = React.useRef(0);

    vendorServices?.data.map(service => {
        if (service?.group_service_list?.length) {
            service?.group_service_list.map(group => {
                if (group?.is_feature) featuredServiceCount.current += 1;
                if (group?.is_deals) dealsServiceCount.current += 1;
            });
        }
    });
    console.log('featuredServiceCount', featuredServiceCount.current);

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
                                                    onClick={() => setShowSelectService(true)}
                                                >
                                                    + Add New
                                                </Button>
                                                {/* <Dialog open={limitReachedDialog}>
                                                    <DialogContent
                                                        close={setLimitReachedDialog}
                                                        className="sm:max-w-[450px]"
                                                    >
                                                        <LimitReachedModal
                                                            setLimitReachedDialog={setLimitReachedDialog}
                                                        />
                                                    </DialogContent>
                                                </Dialog> */}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="space-y-2">
                                            {vendorServices?.loading && (
                                                <Spinner show={true} width={40} height={40} />
                                            )}
                                            {!vendorServices?.loading &&
                                                vendorServices?.data.map(service => {
                                                    const services = Object.groupBy(
                                                        service?.group_service_list,
                                                        ({ sub_categories_id }) => sub_categories_id
                                                    );
                                                    const containsFeature = service?.group_service_list?.some(
                                                        group => group?.is_feature == 1
                                                    );
                                                    return (
                                                        (Object.keys(services).length > 0 && containsFeature) && (
                                                            <Fragment key={v4()}>
                                                                <p className="font-semibold">
                                                                    {service?.categories?.title}
                                                                </p>
                                                                <div className="grid items-start grid-cols-1 gap-3 xl:grid-cols-2">
                                                                    {Object.keys(services).map(key => {
                                                                        return (
                                                                            <div key={v4()} className="w-full bg-[white] border border-[#D9D9D9] rounded-md space-y-2 p-2">
                                                                                <p className="text-sm font-semibold capitalize">
                                                                                    {services[key][0]?.sub_categories?.title}
                                                                                </p>
                                                                                {services[key].map(
                                                                                    group => (
                                                                                        (group?.is_feature == 1) ? <Fragment key={v4()}>
                                                                                            <div className="flex items-center justify-between">
                                                                                                <div className="flex items-center">
                                                                                                    <label htmlFor={group?.service_title.replace(/\s/g, '')} className="w-full text-sm font-medium text-gray-900 capitalize ms-2">{group?.service_title}
                                                                                                    </label>
                                                                                                </div>
                                                                                                <p className="text-sm">
                                                                                                    {+group?.duration * 60}{' '}Min
                                                                                                </p>
                                                                                                <p className="text-sm font-semibold">
                                                                                                    £{group?.price}
                                                                                                </p>
                                                                                            </div>
                                                                                        </Fragment>
                                                                                            : null
                                                                                    )
                                                                                )}
                                                                            </div>
                                                                        );
                                                                    })}
                                                                </div>
                                                            </Fragment>
                                                        )
                                                    );
                                                })}

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
