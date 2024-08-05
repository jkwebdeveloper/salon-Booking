import { Button } from '@/components';
import React from 'react';
import { AiFillWarning } from 'react-icons/ai';

const SusscessModal = () => {
    return (
        <div className="w-full space-y-3 text-center">
            <AiFillWarning className="text-7xl text-[#EE404C] mx-auto" />
            <p className="text-2xl text-[#1D1B23] font-bold">Success</p>
            <p className="text-[#1D1B23]">Selected slot has been booked.</p>
            <Button variant="primary">Go back</Button>
        </div>
    );
};

export default SusscessModal;
