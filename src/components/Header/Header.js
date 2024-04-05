import React from 'react';
import logo from '../../img/Baking - Bari.png'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="">Home</a>
                <a href="">Shop</a>
                <a href="">About</a>
            </div>
        </nav>
    );
};

export default Header;