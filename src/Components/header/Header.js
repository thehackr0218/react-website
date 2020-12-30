import React from 'react'
import { Link as LinkS } from 'react-scroll'
import './header.css';

function header () {
    return(
        <header className="App-header">
            <h1 className="title">PISANVS</h1>
            <LinkS to="about" smooth className="scrollArrow"><span className="arrow"></span></LinkS>
        </header>
    );
}

export default header;

