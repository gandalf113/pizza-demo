import React, { Fragment } from 'react'
import CartMenu from './CartMenu'
import Navbar from './Navbar'

const Layout = (props) => {
    return (
        <Fragment>
            <CartMenu />
            <Navbar />
            <main>
                {props.children}
            </main>
        </Fragment>
    )
}

export default Layout