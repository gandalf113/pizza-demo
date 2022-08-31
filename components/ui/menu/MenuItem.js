import React from 'react'

const MenuItem = ({ item }) => {
    return (
        <div>
            <div className='flex justify-between p-4 text-xl'>
                <div>
                    <h3 className=''>{item.title}</h3>
                    <p className='font-light'>{item.ingredients}</p>
                </div>
                <div className='flex items-center gap-x-4'>
                    <p className='italic'>{item.price} zł</p>
                    <button className='p-2 bg-green-600 text-white rounded-xl'>Do koszyka</button>
                </div>
            </div>
            <hr className='border-t' />
        </div>
    )
}

export default MenuItem