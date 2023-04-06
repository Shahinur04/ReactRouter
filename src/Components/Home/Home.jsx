import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <h2>This is home</h2>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;