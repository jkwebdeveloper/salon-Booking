import React from 'react'
import { MdOutlineErrorOutline } from 'react-icons/md'

function Error({ error }) {
    return (
        <div class="px-4 py-2 mb-2 text-sm flex items-center gap-2 text-red-800 rounded-md bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            <span class="font-medium"><MdOutlineErrorOutline className="text-lg" /></span> {error}
        </div>
    )
}

export default Error