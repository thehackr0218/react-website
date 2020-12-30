import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'
import { NavLink as LinkR } from 'react-router-dom'
import { IoMenu } from 'react-icons/all'


export const Nav = styled.nav`
    position: fixed;

    background: #000000;
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: space-between;
    z-index: 100;
`;

export const NavRoute = styled(LinkR)`
    color: #E9C46A;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1.5rem;
    height: 100%;
    cursor: pointer;
    font-size: 150%;


    &.active{
        color: #15cdfc
    }
    
`;

export const NavScroll = styled(LinkS)`
    color: #E9C46A;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1.5rem;
    height: 100%;
    cursor: pointer;
    font-size: 150%;


    &.active{
        color: #15cdfc
    }
`;

export const Bars = styled(IoMenu)`
    display: none;
    color: #fff;


    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: -5.5px;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 2.5rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    align-self: center;
    @media screen and (max-width:768px){
        display: none;
    }
`
