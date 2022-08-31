import React from 'react'

const PrimaryButton = ({ handleClick }) => {
    return (
        <button onClick={handleClick} className='py-4 px-6 rounded-full text-xl
        text-white bg-green-600 hover:bg-green-700'>
            Zobacz menu
        </button>
    )
}

export default PrimaryButton