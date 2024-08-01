import React from 'react';

const MoreInfoModal = () => {
    return (
        <div className="w-full space-y-3">
            <p className="text-2xl font-bold text-primary_color">£5.00</p>
            <div className="space-y-2">
                <p className="font-semibold">Product description</p>
                <p className="text-sm text-[#656565]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                </p>
                <p className="text-sm text-[#656565]">
                    This indulgent massage uses gently warmed basalt stones to
                    allow your therapist to work deeper into the areas of
                    concern.
                </p>
                <ul className="list-disc text-sm text-[#656565] px-4">
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MoreInfoModal;
