import React from 'react'
import Link from 'next/link'

const NavItem = ({ item }) => {
    return (
        <Link href={item.link}>
            <div className='z-10 px-2 select-none cursor-pointer text-lg uppercase
            tracking-tighter hover:text-lime-500 duration-100'>
                {item.title}
            </div>
        </Link>
    )
}

export default NavItem