import Image from 'next/image'
import React from 'react'

function Spinner({ show, text, width, height }) {
    if (!show) return text
    return (
        <Image src="/static/icons/spinner.svg" alt="spinner" width={width} height={height} />
    )
}

export default Spinner