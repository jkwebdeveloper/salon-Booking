import React from 'react';

const MoreInfoModal = ({ moreInfo }) => {
    return (
        <div className="w-full space-y-3">
            <p className="text-2xl font-bold text-primary_color">£{moreInfo?.price}</p>
            <div className="space-y-2">
                <p className="font-semibold">Product description</p>
                <p className="text-sm text-[#656565]">
                    {`${moreInfo?.description}`}
                </p>
            </div>
        </div>
    );
};

export default MoreInfoModal;
