import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { BsPencilFill } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TbCirclePlus } from "react-icons/tb";

import LimitReachedModal from './Modal/Featured-dealModal/LimitReachedModal';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import SubscriptionModal from './Modal/Featured-dealModal/SubscriptionModal';
import SelectService from '@/components/vendor/Dashboard/SelectService';
import CreateDeals from '@/components/vendor/Dashboard/CreateDeals';
import { useVendorServices } from '@/hooks';
import { Spinner, Button } from '@/components';

const FeaturedDealSection = () => {
    const vendor = useSelector((state) => state.vendorAuth.vendor);
    const [getServices, vendorServices] = useVendorServices();
    const [refreshServices, setRefreshServices] = useState(v4());
    const [services, setServices] = useState([]);
    const [currentTab, setCurrentTab] = useState('featured');
    const [limitReachedDialog, setLimitReachedDialog] = useState(false);
    const [subscriptionDialog, setsubscriptionDialog] = useState(false);
    const [showSelectService, setShowSelectService] = useState(false);
    const [showCreateService, setShowCreateService] = useState(false);

    const changeTab = (tab = 'basic') => setCurrentTab(tab);

    useEffect(() => {
        getServices().then((data) => setServices(data.data));
    }, [refreshServices]);

    useEffect(() => {
        setServices(vendorServices?.data);
    }, [vendorServices?.loading]);

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
                                            {(!vendorServices?.loading &&
                                                services.map((service) => {
                                                    const group_service_list = Object.groupBy(
                                                        service?.group_service_list,
                                                        ({ sub_categories_id }) => sub_categories_id
                                                    );
                                                    return (
                                                        Object.keys(group_service_list).length && <div
                                                            className="w-full space-y-2 bg-white rounded-xl"
                                                            key={v4()}
                                                        >
                                                            <div className="flex items-center gap-2">
                                                                <p className="text-xl font-semibold">
                                                                    {service?.categories?.title}
                                                                </p>
                                                            </div>
                                                            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                                                                {group_service_list &&
                                                                    Object.values(group_service_list).map(
                                                                        (services) => (
                                                                            <div
                                                                                className="cursor-pointer serviceBox"
                                                                                key={v4()}
                                                                            >
                                                                                <div className="relative w-full">
                                                                                    <div
                                                                                        className="border border-[#D9D9D9] space-y-4 rounded-lg p-3"
                                                                                        onClick={(e) => {
                                                                                            setEditService(true);
                                                                                            setCurrentEditService({
                                                                                                mainServiceID: service.id,
                                                                                                sub_categories_id:
                                                                                                    services[0]?.sub_categories_id,
                                                                                                serviceGroupID:
                                                                                                    services[0]?.service_group_id,
                                                                                                service: services,
                                                                                            });
                                                                                        }}
                                                                                    >
                                                                                        <div className="flex items-center justify-between">
                                                                                            <p className="font-semibold text-start">
                                                                                                {services[0]?.sub_categories?.title}
                                                                                            </p>
                                                                                        </div>
                                                                                        {services.map((service_group) => (
                                                                                            <div
                                                                                                className="flex items-center justify-between"
                                                                                                key={v4()}
                                                                                            >
                                                                                                <p className="text-sm capitalize">
                                                                                                    {service_group?.service_title}
                                                                                                </p>
                                                                                                <p className="text-sm">
                                                                                                    {service_group?.duration == 0.5
                                                                                                        ? "30 Min"
                                                                                                        : service_group?.duration == 1
                                                                                                            ? "1 Hour"
                                                                                                            : service_group?.duration == 1.5
                                                                                                                ? "1 Hour 30 Min"
                                                                                                                : service_group?.duration == 2
                                                                                                                    ? "2 Hour"
                                                                                                                    : "2 Hour 30 Min"}
                                                                                                </p>
                                                                                                <p className="text-sm font-bold">
                                                                                                    {service_group?.price &&
                                                                                                        "£" + service_group?.price}
                                                                                                    {service_group?.sales_price &&
                                                                                                        "£" + service_group?.sales_price}
                                                                                                </p>
                                                                                            </div>
                                                                                        ))}
                                                                                    </div>
                                                                                    <RiDeleteBin5Line
                                                                                        className="text-[#FF0000] absolute top-[1rem] right-[1rem] z-20 cursor-pointer"
                                                                                        onClick={(e) =>
                                                                                            deleteGroup({
                                                                                                e: e,
                                                                                                id: services[0]?.service_group_id,
                                                                                                sub_categories_id:
                                                                                                    services[0]?.sub_categories_id,
                                                                                            })
                                                                                        }
                                                                                    />
                                                                                    <BsPencilFill className=" text-primary_color absolute top-[1rem] right-[3rem]" />
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    )}
                                                            </div>
                                                        </div> || ''
                                                    );
                                                })) || (
                                                    <div className="center min-h-[300px] w-full">
                                                        <Spinner
                                                            show={vendorServices?.loading}
                                                            width={50}
                                                            height={50}
                                                        />
                                                    </div>
                                                )}
                                            {/* <p className="text-xl font-semibold">
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
                                            </div> */}
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
