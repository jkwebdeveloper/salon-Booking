import Image from 'next/image'
import React from 'react'

function PageLoader({ width, height }) {
    return (
        <div className='flex items-center justify-center min-h-[55vh]'>
            <Image src="/static/icons/loader.svg" alt="Loader" width={width} height={height} />
        </div>
    )
}

export default PageLoader