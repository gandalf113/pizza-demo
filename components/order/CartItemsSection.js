import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const CartItemsSection = ({ items }) => {
    return (
        <div>
            {items.map(item => (
                <div key={item.id} className='flex items-start justify-between'>
                    <div>
                        <h3 className='text-lg'>{item.item.title}</h3>
                        <p className='font-light'>{item.item.price * item.amount} zł</p>
                    </div>
                    <div className='flex items-center gap-x-4'>
                        <button><AiOutlinePlus /></button>
                        {item.amount}
                        <button><AiOutlineMinus /></button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CartItemsSection