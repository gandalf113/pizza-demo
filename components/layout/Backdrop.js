import React from 'react'
import { motion } from 'framer-motion'

const Backdrop = ({ children, onClick }) => {
    return (
        <motion.div
            className='fixed top-0 left-0 z-40 w-full h-screen overflow-y-hidden bg-black bg-opacity-60 flex items-center justify-center'
            onClick={onClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    )
}

export default Backdrop