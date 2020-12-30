import React from 'react'
import { Nav, NavRoute, Bars, NavMenu, NavScroll } from './navElements'

function Navbar({ toggle }) {
    return (
        <>
            <Nav>
                <NavRoute to="/" > <h1 className="nav">PISANVS</h1> </NavRoute>
                <Bars onClick={toggle} />
                <NavMenu>
                    <NavScroll to="about" smooth activestyle>About me</NavScroll>
                    <NavScroll to="events" smooth activestyle>Events</NavScroll>
                    <NavRoute to="/bookme" exact>Book me</NavRoute>
                    <NavRoute to="/gallery" exact>Gallery</NavRoute>
                </NavMenu>
            </Nav>
        </>
    )
}
export default Navbar 