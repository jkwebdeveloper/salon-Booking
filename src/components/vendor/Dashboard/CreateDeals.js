import React, { Fragment, useEffect } from 'react';
import { useVendorServices } from "@/hooks";
import { useSelector } from 'react-redux';
import { Error, Spinner, Button } from "@/components";
import { v4 } from 'uuid';

const CreateDeals = ({ onClose }) => {
    const [plan, setPlan] = React.useState({ services: 2, deals: 3 });
    const vendor = useSelector((state) => state.vendorAuth.vendor);
    const [getServices, vendorServices] = useVendorServices();
    const [selectedServices, setSelectedServices] = React.useState([]);

    return (
        <div className="w-full p-4 space-y-3 bg-white rounded-xl">
            <div className="flex items-center justify-between">
                <p className="text-2xl font-semibold">Create deals</p>
                <div className="flex items-center gap-3">
                    <Button variant="disable" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button variant="primary">Save</Button>
                </div>
            </div>
            <div className="space-y-2">
                {vendorServices?.loading && <Spinner show={true} width={40} height={40} />}
                {!vendorServices?.loading && vendorServices?.data.map((service) => {
                    const services = Object.groupBy(service?.group_service_list, ({ sub_categories_id }) => sub_categories_id);
                    return Object.keys(services).length > 0
                        && <Fragment key={v4()}>
                            <p className="font-semibold">{service?.categories?.title}</p>
                            <div className="grid items-start grid-cols-1 gap-3 xl:grid-cols-2">
                                {Object.keys(services).map((key) => {
                                    return (
                                        <div key={v4()} className="w-full bg-[white] border border-[#D9D9D9] rounded-md space-y-2 p-2">
                                            <p className="text-sm font-semibold">{services[key][0]?.sub_categories?.title}</p>
                                            {services[key].map((group) => (
                                                <Fragment key={v4()}>
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center">
                                                            <input
                                                                id={group?.service_title.replace(/\s/g, "")}
                                                                type="checkbox"
                                                                className="accent-primary"
                                                                required
                                                                disabled={selectedServices.length >= plan.services && !selectedServices.some(service => service.vendors_service_id == group.id)}
                                                                defaultChecked={selectedServices.some(service => service.vendors_service_id == group.id)}
                                                                onChange={e => {
                                                                    console.log(e.target.checked)
                                                                    if (e.target.checked) {
                                                                        setSelectedServices([...selectedServices, {
                                                                            vendors_service_id: group.id, is_feature: 1
                                                                        }])
                                                                    } else {
                                                                        setSelectedServices(selectedServices.filter(service => service.vendors_service_id != group.id));
                                                                    }
                                                                }}
                                                            />
                                                            <label
                                                                htmlFor={group?.service_title.replace(/\s/g, "")}
                                                                className="w-full text-sm font-medium text-gray-900 ms-2 "
                                                            >
                                                                {group?.service_title}
                                                            </label>
                                                        </div>
                                                        <p className="text-sm">{+group?.duration * 60} Min</p>
                                                        <p className="text-sm font-semibold">£{group?.price}</p>
                                                    </div>
                                                </Fragment>
                                            ))}
                                        </div>
                                    )
                                })}
                            </div>
                        </Fragment>
                })}
                {/* <p className="text-xl font-semibold">Massage</p>
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
                </div> */}
            </div>
        </div>
    );
};

export default CreateDeals;
