import React from 'react'
import { BsFillCartFill } from 'react-icons/bs'

const ShoppingCartFloatingButton = ({ count, onClick }) => {
  return (
    <button className='fixed z-20 bottom-4 left-4 p-4 bg-green-700 text-white text-2xl
    rounded-full flex items-center gap-x-1 hover:scale-110 duration-100 shadow-xl'
      onClick={onClick}>
      <BsFillCartFill />
      <span>Koszyk ({count})</span>
    </button>
  )
}

export default ShoppingCartFloatingButton