import React from 'react';
import Header from '../common/Header';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

const MainLayout = ({ children }) => {
    console.log("called -------------------",children)
    console.log("called -------------------",children)
    return (
        <div>
            {/*<Header />*/}
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;
