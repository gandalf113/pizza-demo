import React, { Fragment } from 'react'
import MenuProvider from '../../context/menu-context'
import EditMenuItem from './admin/EditMenuItem'
import NewMenuItem from './admin/NewMenuItem'
import CartMenu from './CartMenu'
import Navbar from './Navbar'

const Layout = (props) => {
    return (
        <Fragment>
            <MenuProvider>
                {/* Side menus */}
                <CartMenu />
                <NewMenuItem />
                <EditMenuItem />

                <Navbar />
                <main className='text-black'>
                    {props.children}
                </main>
            </MenuProvider>
        </Fragment>
    )
}

export default Layout