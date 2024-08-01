import React from 'react';

const Basketpage = () => {
    return (
        <div className="w-full">
            <div className="container w-full space-y-4 xl:px-40 ">
                <p className="text-[#16171B] text-2xl font-semibold">
                    My basket
                </p>
                <div className="p-4 space-y-5 bg-white rounded-md shadow-lg xl:px-40">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b">
                                <th className="pb-2">Name</th>
                                <th className="pb-2">Client name</th>
                                <th className="pb-2">Professional</th>
                                <th className="pb-2">Date & Time</th>
                                <th className="pb-2">Price</th>
                            </tr>
                        </thead>
                        <tbody className="space-y-4">
                            <tr className="border-b">
                                <td className="py-2">
                                    New Couples Massage{' '}
                                    <span className="text-gray-500">
                                        (1 hr)
                                    </span>
                                </td>
                                <td className="py-2">John Adam, Goldie Adam</td>
                                <td className="py-2">Nuzami, Kevin</td>
                                <td className="py-2">09:00 AM, 16 May 2024</td>
                                <td className="py-2 text-[#E50C58]">
                                    Save for later{' '}
                                    <span className="text-black">£349.00</span>
                                </td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-2">
                                    Face wash{' '}
                                    <span className="text-gray-500">x 3</span>
                                </td>
                                <td className="py-2"></td>
                                <td className="py-2"></td>
                                <td className="py-2"></td>
                                <td className="py-2 text-black">£15.00</td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-2">
                                    Hair oil{' '}
                                    <span className="text-gray-500">x 1</span>
                                </td>
                                <td className="py-2"></td>
                                <td className="py-2"></td>
                                <td className="py-2"></td>
                                <td className="py-2 text-black">£4.00</td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-2">
                                    Sunday Soother Spa Break{' '}
                                    <span className="text-gray-500">
                                        (30 min)
                                    </span>
                                </td>
                                <td className="py-2">John Adam</td>
                                <td className="py-2">Nuzami</td>
                                <td className="py-2">10:00 AM, 16 May 2024</td>
                                <td className="py-2 text-[#E50C58]">
                                    Save for later{' '}
                                    <span className="text-black">£25.00</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="flex items-center justify-between mt-4">
                        <div className="text-lg font-semibold">
                            Order Total: £393.00
                        </div>
                        <div className="space-x-2">
                            <button className="bg-[#00C1D5] text-white py-2 px-4 rounded">
                                + Add another service
                            </button>
                            <button className="bg-[#4B2076] text-white py-2 px-4 rounded">
                                Go to checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Basketpage;
