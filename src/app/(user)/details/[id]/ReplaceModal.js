import { Button } from '@/components';
import React from 'react';
import { AiFillWarning } from 'react-icons/ai';

const ReplaceModal = () => {
    return (
        <div className="w-full space-y-3 text-center">
            <AiFillWarning className="text-7xl text-[#EE404C] mx-auto" />
            <p className="text-2xl text-[#1D1B23] font-bold">
                Replace service?
            </p>
            <p className="text-[#1D1B23]">
                Your cart contains service from “Moon Massage”.
            </p>
            <p className="text-[#1D1B23]">
                Do you want to discard the selection and add service from “Spa
                Life & Massage” salon?
            </p>
            <div className="flex items-center gap-3">
                <Button variant="primary">No</Button>
                <Button variant="primary">Remove & Replace</Button>
            </div>
        </div>
    );
};

export default ReplaceModal;
