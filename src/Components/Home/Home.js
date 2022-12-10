import React from 'react';
import Header from '../Header/Header';
import Servicess from '../Servicess/Servicess';
import MenuBar from '../Shared/Menubar/MenuBar';

const Home = () => {
    return (
        <div>
            <MenuBar />
            <Header />
            <Servicess/>
        </div>
    );
};

export default Home;