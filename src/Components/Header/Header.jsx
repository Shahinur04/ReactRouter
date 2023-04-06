import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
           <Link to="/">Home</Link>
           <Link to="/about">About</Link>
           <Link to="/contract">Contract</Link>
           
            
        </nav>
    );
};

export default Header;