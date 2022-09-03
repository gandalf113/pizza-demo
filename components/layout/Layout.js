import React, { Fragment } from 'react'
import NewMenuItem from './admin/NewMenuItem'
import CartMenu from './CartMenu'
import Navbar from './Navbar'

const Layout = (props) => {
    return (
        <Fragment>
            {/* Side menus */}
            <CartMenu />
            <NewMenuItem />

            <Navbar />
            <main>
                {props.children}
            </main>
        </Fragment>
    )
}

export default Layout