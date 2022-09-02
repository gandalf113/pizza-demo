import React, { Fragment, useState } from 'react'
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im'

const OPTIONS = [
    {
        id: 1,
        name: "Dowóz",
        price: 6.00
    },
    {
        id: 2,
        name: "Odbiór osobisty",
        price: 0.00
    },
]

const DeliverySection = ({ deliveryMethod, setDeliveryMethod, street, local, phone, setStreet, setLocal, setPhone }) => {

    return (
        <div>
            <div className='flex flex-wrap items-center gap-x-12 text-gray-600'>
                {OPTIONS.map(option => (
                    <div key={option.id}
                        onClick={() => {
                            setDeliveryMethod(option.id);
                        }
                        }
                        className='group flex items-center gap-x-2 cursor-pointer text-xl'>
                        {
                            deliveryMethod == option.id ?
                                <div className='w-3 h-3 bg-gray-600 ring-2 ring-gray-600 border-2 rounded-full' /> :
                                <div className='w-3 h-3 bg-gray-50 group-hover:bg-gray-300 ring-2 ring-gray-600 border-2 rounded-full' />
                        }
                        {/* <div className='w-4 h-4 bg-zinc-700 ring-2 ring-zinc-700 border-2 rounded-full' /> */}
                        <p>{option.name}</p>
                    </div>
                ))}

            </div>

            <div>
                <div className="mt-4 text-lg">
                    {deliveryMethod === 1 &&
                        <Fragment>
                            <label htmlFor="street" className="block  text-gray-700">Ulica</label>
                            <input type="text" name="street" id="street" value={street} onChange={(e) => setStreet(e.target.value)}
                                className="p-1 block w-full flex-1 rounded-md border border-gray-300" placeholder='Mickiewicza' />

                            <label htmlFor="local" className="block  text-gray-700">Lokal</label>
                            <input type="text" name="local" id="local" value={local} onChange={(e) => setLocal(e.target.value)}
                                className="p-1 block w-full flex-1 rounded-md border border-gray-300" placeholder='50/8' />
                        </Fragment>
                    }

                    <label htmlFor="phone" className="block  text-gray-700">Numer telefonu</label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                        {/* <span className="inline-flex items-cented borderorder-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">+48</span> */}
                        <input type="text" name="phone" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)}
                            className="p-1 block w-full flex-1 rounded-md border border-gray-300" placeholder='123456789' />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default DeliverySection