import React from 'react'
import { Button } from '@/components'
import Link from 'next/link'

function SuccessPopup({ className, title, message, buttonText, buttonLink, children }) {
    return (
        <div className={'space-y-2 text-center'}>
            <div className="text-center checkSVG max-w-[4rem] mx-auto mb-4">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className='bg-green-500 rounded-full shadow-md' viewBox="0 0 130.2 130.2">
                    <circle className="path circl" fill="none" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1" />
                    <polyline className="path check stroke-white" fill="none" stroke-width="8" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
                </svg>
            </div>
            <div className="space-y-1">
                <h3 className="text-md">{title}</h3>
                <p className="text-sm text-neutral-500 max-w-[300px] mx-auto pb-3">{message}</p>
            </div>
            <Button variant="primary" className="w-full" asChild>
                <Link href={buttonLink || '/'}>{buttonText}</Link>
            </Button>
        </div>
    )
}

export default SuccessPopup