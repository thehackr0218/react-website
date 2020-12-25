import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { IoMenu } from 'react-icons/all'


export const Nav = styled.nav`
    background: #000000;
    width: auto;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1500px) / 2);
    z-index: 100;
`;

export const NavLink = styled(Link)`
    color: #ffffff;
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
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
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
