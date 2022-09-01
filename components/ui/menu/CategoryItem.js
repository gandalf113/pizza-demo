import React from 'react'
import { motion } from 'framer-motion'

const CategoryItem = ({ category, isActive, handleClick }) => {
    return (
        <div className='relative w-full sm:text-xl text-base'>
            {isActive && <motion.span
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                className='absolute bottom-0 bg-green-500 w-full h-1 rounded-xl'></motion.span>}
            <button key={category.id}
                onClick={handleClick}
                className=' w-full py-4 border-b border-zinc-200'>
                {category.name}
            </button>
        </div>
    )
}

export default CategoryItem