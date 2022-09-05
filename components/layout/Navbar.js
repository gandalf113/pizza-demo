import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavItem from '../ui/NavItem'
import { useRouter } from 'next/router'

const NAVIGATION = [
    {
        "title": "Strona główna",
        "link": "/"
    },
    {
        "title": "Menu",
        "link": "/menu"
    },
    {
        "title": "Rezerwacja",
        "link": "/rezerwacja"
    },
]

const Navbar = () => {
    const router = useRouter();

    const currentRoute = router.pathname;

    if (currentRoute === '/admin') {
        return null;
    }

    return (
        <div className={`flex justify-between items-center
         py-4 px-16 z-10 ${currentRoute !== '/' ? 'text-black' : 'text-white'}`}>
            <Link href='/'>
                <div className='flex items-center gap-x-4 cursor-pointer z-10'>
                    <Image src='/logo_real.png' alt='logo' width={70} height={60} />
                    <h1 className='font-handwritten text-4xl'>Emilia Romagna</h1>
                </div>
            </Link>
            <div className='items-center gap-x-4 md:flex hidden'>
                {NAVIGATION.map(nav => (
                    <NavItem key={nav.title} item={nav} />
                ))}
            </div>
        </div>
    )
}

export default Navbar