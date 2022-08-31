import React from 'react'

const CategoryItem = ({ category, isActive, handleClick }) => {
    return (
        <div className='relative w-full sm:text-xl text-base'>
            <span className={`absolute bottom-0 bg-green-500 w-full h-1
        ${!isActive && 'hidden'}`}></span>
            <button key={category.id}
                onClick={handleClick}
                className=' w-full py-4 border-b border-zinc-200'>
                {category.name}
            </button>
        </div>
    )
}

export default CategoryItem