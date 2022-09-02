import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const CartItemsSection = ({ items, addItem, removeSingleItem }) => {

    return (
        <div>
            {items.map(item => (
                <div key={item.id} className='flex items-start justify-between'>
                    <div>
                        <h3 className='text-lg'>{item.item.title}</h3>
                        <p className='font-light'>{(item.item.price * item.amount).toFixed(2)} zł</p>
                    </div>
                    <div className='flex items-center gap-x-4'>
                        <button onClick={() => addItem(item.item)}><AiOutlinePlus /></button>
                        {item.amount}
                        <button  onClick={() => removeSingleItem(item.item)}><AiOutlineMinus /></button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CartItemsSection