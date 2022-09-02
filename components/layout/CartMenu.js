import React from 'react'
import Backdrop from './Backdrop'
import { useSelector, useDispatch } from 'react-redux'
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { toggleCartMenu } from '../../redux/uiSlice'
import { AnimatePresence, motion } from 'framer-motion'
import { removeItem } from '../../redux/cartSlice'
import Link from 'next/link'

const getPriceSum = (items) => {
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        sum += item.item.price * item.amount;
    }
    return sum.toFixed(2);
}

const preparePayload = (items) => {
    return items.map(item => ({
        itemId: item.item.id,
        amount: item.amount
    }))
}

const CartMenu = () => {
    const { items: cartItems } = useSelector(state => state.cart);
    const { isCartMenuOpen: isOpen } = useSelector(state => state.ui);

    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(toggleCartMenu(false));
    }

    const handlePlaceOrder = async () => {
        const items = preparePayload(cartItems);
        const address = {
            street: "Słowackiego",
            local: "56/3"
        }
        const phone_number = '123456789'
        const data = { items, address, phone_number }

        const res = await fetch('/api/order/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if (res.status === 201) {
            alert("Sukces!")
        } else {
            alert("Fuck")
        }

        const resData = await res.json();
        console.log(resData)
    }


    return (
        <AnimatePresence>
            {isOpen &&
                <Backdrop onClick={handleClose}>
                    <motion.div
                        initial={{ x: '100vw' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100vw' }}
                        transition={{ type: 'tween' }}
                        onClick={(e) => e.stopPropagation()}
                        className='z-50 fixed right-0 sm:w-[35vw] w-full h-screen flex flex-col justify-between p-4 bg-white'>
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
                    </motion.div>
                </Backdrop>}
        </AnimatePresence>

    )
}

export default CartMenu