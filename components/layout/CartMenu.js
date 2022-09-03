import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AiOutlineClose } from 'react-icons/ai'
import { toggleCartMenu } from '../../redux/uiSlice'
import { removeItem } from '../../redux/cartSlice'
import { getPriceSum } from '../../utils/cart-utils'
import Link from 'next/link'
import Sidebar from './Sidebar'

const CartMenu = () => {
    const { items: cartItems } = useSelector(state => state.cart);
    const { isCartMenuOpen: isOpen } = useSelector(state => state.ui);

    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(toggleCartMenu(false));
    }

    return (
        <Sidebar isOpen={isOpen} handleClose={handleClose}>
            <div>
                {/* Heading */}
                <div className='flex items-end justify-between'>
                    <h2 className='text-xl'>Koszyk</h2>
                    <button onClick={handleClose}>
                        <AiOutlineClose size={24} />
                    </button>
                </div>
                {/* Items */}
                <div className='mt-8 lex flex-col gap-4'>
                    {cartItems.map(item => (
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-x-4'>
                                <div className='flex items-center gap-x-2 text-gray-500'>
                                    <button onClick={() => {
                                        dispatch(removeItem(item.item))
                                    }}><AiOutlineClose /></button>

                                </div>
                                <div>
                                    <h3 className='text-lg'>{item.item.title} x{item.amount}</h3>
                                    <p className='font-light'>{item.item.ingredients}</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-x-1'>
                                <p>{item.item.price} zł</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Finalize section */}
            <div className='space-y-4 p-4'>
                <h4 className='text-3xl'>
                    Razem: {getPriceSum(cartItems)} zł
                </h4>
                <Link href={'/zamowienie'}>
                    <button onClick={() => dispatch(toggleCartMenu(false))}
                        className='w-full bg-green-600 text-white p-4 rounded-lg text-xl'>ZAMÓW</button>
                </Link>
            </div>
        </Sidebar>

    )
}

export default CartMenu