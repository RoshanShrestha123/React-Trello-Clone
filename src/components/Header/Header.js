import React from 'react';
import LogoImage from '../../images/logo.png';
import './Header.css';

function Header(){
    return(
        <div className="header-wrapper">
            <div className="logoHolder">
             <img className="logo" src={LogoImage} alt="Logo"></img>
        </div>
        </div>
        
    )
}

export default Header;