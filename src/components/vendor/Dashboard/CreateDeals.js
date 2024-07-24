import Button from '@/components/ui/button';
import React from 'react';

const CreateDeals = ({ onClose }) => {
    return (
        <div className="w-full p-4 space-y-4 bg-white rounded-xl">
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
        </div>
    );
};

export default CreateDeals;
