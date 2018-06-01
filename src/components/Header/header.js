import React from 'react';
import style from './header.css';
import { Link } from 'react-router-dom';

import FontAwesome from 'react-fontawesome';    
import SideNav from '../SideNav/sideNav'
function myFunction(){
    alert("asdflk");
}
const Header = (props) => {
    const navBars = () => (
        <div className="stylebars" 
            style={{
                position:'relative',
                zIndex:'9999'
            }}
        >
            <FontAwesome onClick={props.onOpenNav}  name="bars"/>
        </div>
    )
    const logo = () => (
        <Link to="/" className="logo">
            <img alt="basketball logo" src="/images/nba_logo.png"/>
        </Link>
    )
    return(
        <header className="header">
            <SideNav {...props}/>
            <div className="headerOpt">
                {navBars()}
                {logo()}
            </div>
        </header>
    )
}
export default Header;
