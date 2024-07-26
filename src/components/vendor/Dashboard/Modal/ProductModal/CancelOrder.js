import Button from '@/components/ui/button';
import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';

const CancelOrder = () => {
    return (
        <div className="w-full space-y-6 text-center">
            <FiAlertCircle className="text-7xl text-[#DF0000] mx-auto" />
            <p className="text-2xl text-[#1D1B23] font-bold">
                Are you sure you want to cancel this order?
            </p>
            <div className="flex items-center justify-center gap-3">
                <Button variant="danger">Cancel order</Button>
                <Button variant="outline">Discard</Button>
            </div>
        </div>
    );
};

export default CancelOrder;
