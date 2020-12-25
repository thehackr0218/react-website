import React from 'react'
import { Nav, NavLink, Bars, NavMenu } from './navElements'

function navbar() {
    return (
        <>
            <Nav>
                <NavLink to="/"> <h1 className="nav">PISANVS</h1> </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/about" activeStyle>About me</NavLink>
                    <NavLink to="/events" activeStyle>Events</NavLink>
                    <NavLink to="/bookme" activeStyle>Book me</NavLink>
                    <NavLink to="/gallery" activeStyle>Gallery</NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}
export default navbar 