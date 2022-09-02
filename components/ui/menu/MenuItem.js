import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { toCurrency } from '../../../utils/misc-utils'

const MenuItem = ({ item, handleAddToCart }) => {
    return (
        <div>
            <div className='flex justify-between p-4 text-xl'>
                <div>
                    <h3 className=''>{item.title}</h3>
                    <span className='font-light'>{item.ingredients}</span>
                </div>
                <div className='flex items-center gap-x-4'>
                    <p className='font-light'>{toCurrency(item.price)}</p>
                    <button className='flex gap-x-2 items-center p-2 bg-lime-600 text-white rounded-xl text-base'
                        onClick={handleAddToCart}><AiOutlineShoppingCart /> Dodaj</button>
                </div>
            </div>
            <hr className='border-t' />
        </div>
    )
}

export default MenuItem