import React from 'react'
import { BarContainer, Icon, CloseIcon, SidebarWrapper, SidebarRoute, SidebarMenu, SidebarScroll } from './barElements'

function bar({ isOpen, toggle }) {
    return (
        <BarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarScroll to="about" smooth  onClick={toggle}>About me</SidebarScroll>
                    <SidebarScroll to="events" smooth onClick={toggle}>Events</SidebarScroll>
                    <SidebarRoute to="/bookme" onClick={toggle}>Book Me</SidebarRoute>
                    <SidebarRoute to="/gallery" onClick={toggle}>Gallery</SidebarRoute>
                </SidebarMenu>
            </SidebarWrapper>
        </BarContainer>
    )
}

export default bar
