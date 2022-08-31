import React from 'react'
import Backdrop from './Backdrop'
import { useSelector, useDispatch } from 'react-redux'
import { AiOutlineClose } from 'react-icons/ai'
import { toggleCartMenu } from '../../redux/uiSlice'
import { AnimatePresence, motion } from 'framer-motion'

const CartMenu = () => {
    const { items: cartItems } = useSelector(state => state.cart);
    const { isCartMenuOpen: isOpen } = useSelector(state => state.ui);

    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(toggleCartMenu(false));
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
                        className='z-50 fixed right-0 sm:w-[35vw] w-full h-screen flex flex-col justify-between p-4 bg-white'>
                        <div>
                            {/* Heading */}
                            <div className='flex items-end justify-between'>
                                <h2 className='text-xl'>Koszyk</h2>
                                <button>
                                    <AiOutlineClose size={24} />
                                </button>
                            </div>
                            {/* Items */}
                            <div className='mt-8 lex flex-col gap-4'>
                                {cartItems.map(item => (
                                    <div className='flex justify-between'>
                                        <div>
                                            <h3 className='text-lg'>{item.title}</h3>
                                            <p className='font-light'>{item.ingredients}</p>
                                        </div>
                                        <p>{item.price} zł</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Finalize section */}
                        <div>
                            <button className='w-full bg-green-600 text-white p-4 rounded-lg text-xl'>ZAMÓW</button>
                        </div>
                    </motion.div>
                </Backdrop>}
        </AnimatePresence>

    )
}

export default CartMenu