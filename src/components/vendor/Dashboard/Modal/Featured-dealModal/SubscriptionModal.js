import Button from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const SubscriptionModal = () => {
    return (
        <div className="w-full space-y-3 text-center">
            <div className="">
                <Image
                    src={'/static/images/subscription_image.png'}
                    width={150}
                    height={150}
                    alt=""
                    loading="lazy"
                    className="flex items-center justify-center mx-auto"
                />
            </div>
            <p className="text-2xl text-[#1D1B23] font-bold">
                No Subscription !
            </p>
            <p className="text-[#1D1B23]">
                {`You don't have any active subscription subscribe to continue`}
            </p>
            <Button variant="primary">Explore plans</Button>
        </div>
    );
};

export default SubscriptionModal;
