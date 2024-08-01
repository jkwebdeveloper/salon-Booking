import Image from 'next/image'
import React from 'react'

function PageLoader({ width = 50, height = 50 }) {
    return (
        <div className='flex items-center justify-center min-h-[200px]'>
            <Image src="/static/icons/loader.svg" alt="Loader" width={width} height={height} />
        </div>
    )
}

export default PageLoader