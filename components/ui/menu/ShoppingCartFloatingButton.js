import React from 'react'
import { BsFillCartFill } from 'react-icons/bs'

const ShoppingCartFloatingButton = ({ count }) => {
  return (
    <div className='fixed z-20 bottom-4 left-4 p-4 bg-green-700 text-white text-2xl cursor-pointer
    rounded-full flex items-center gap-x-1 hover:scale-110 duration-100'>
      <BsFillCartFill />
      <span>Koszyk ({count})</span>
    </div>
  )
}

export default ShoppingCartFloatingButton