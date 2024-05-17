import React from 'react'

function Servicecheckbox({ subCategory, addServiceItems }) {
    return (
        <div className="flex items-center">
            <input
                id={'subCategory' + subCategory.id}
                type="checkbox"
                onChange={e => {
                    addServiceItems(e, subCategory);
                }}
            />
            <label
                htmlFor={'subCategory' + subCategory.id}
                className="w-full text-sm font-medium text-gray-900 ms-2 "
            >
                {subCategory.title}
            </label>
        </div>
    )
}

export default Servicecheckbox