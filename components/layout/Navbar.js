import React from 'react'
import Image from 'next/image'
import NavItem from '../ui/NavItem'

const NAVIGATION = [
    {
        "title": "Strona główna",
        "link": "/"
    },
    {
        "title": "Menu",
        "link": "/"
    },
    {
        "title": "Rezerwacja",
        "link": "/"
    },
]

const Navbar = () => {
    return (
        <div className='flex justify-between items-center text-white mt-4 px-16 z-10'>
            <Image src='/logo.webp' alt='logo' width={128} height={128} className='select-none pointer-events-none' />
            <div className='flex items-center gap-x-4'>
            {NAVIGATION.map(nav => (
                <NavItem item={nav} />
            ))}
        </div>
        </div >
    )
}

export default Navbar