import React from 'react';
import { Link as ActiveLink } from 'react-router-dom';
import './header.css'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav>
           <ActiveLink to="/">Home</ActiveLink>
           <ActiveLink to="/friend">Friend</ActiveLink>
           <ActiveLink to="/about">About</ActiveLink>
           <ActiveLink to="/contract">Contract</ActiveLink>
           <ActiveLink to="/post">Post</ActiveLink>
           
            
        </nav>
    );
};

export default Header;