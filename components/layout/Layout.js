import React, { Fragment } from 'react'
import EditMenuItem from './admin/EditMenuItem'
import NewMenuItem from './admin/NewMenuItem'
import CartMenu from './CartMenu'
import Navbar from './Navbar'

const Layout = (props) => {
    return (
        <Fragment>
            {/* Side menus */}
            <CartMenu />
            <NewMenuItem />
            <EditMenuItem />

            <Navbar />
            <main>
                {props.children}
            </main>
        </Fragment>
    )
}

export default Layout