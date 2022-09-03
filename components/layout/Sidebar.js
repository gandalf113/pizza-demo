import React from 'react'
import Backdrop from './Backdrop'
import { AnimatePresence, motion } from 'framer-motion'

const Sidebar = ({isOpen, handleClose, children}) => {
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
                        {children}
                    </motion.div>
                </Backdrop>}
        </AnimatePresence>
    )
}

export default Sidebar