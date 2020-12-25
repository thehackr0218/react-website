import React from 'react'
import { BarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu } from './barElements'

function bar() {
    return (
        <BarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/about">About me</SidebarLink>
                    <SidebarLink to="/events">Events</SidebarLink>
                    <SidebarLink to="/bookme">Book Me</SidebarLink>
                    <SidebarLink to="/gallery">Gallery</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </BarContainer>
    )
}

export default bar
