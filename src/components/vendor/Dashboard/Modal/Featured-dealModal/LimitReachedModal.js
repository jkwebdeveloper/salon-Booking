import React from 'react';
import { AiFillWarning } from 'react-icons/ai';

const LimitReachedModal = () => {
    return (
        <div className="w-full space-y-3 text-center">
            <AiFillWarning className="text-7xl text-[#EE404C] mx-auto" />
            <p className="text-2xl text-[#1D1B23] font-bold">Limit Reached</p>
            <p className="text-[#1D1B23]">
                You have already added two services. To add a new service,
                please delete an existing one.
            </p>
        </div>
    );
};

export default LimitReachedModal;
