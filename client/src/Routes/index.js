import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';

const Index = () => {
    const routes = [
        {
            path: '/',
            element: <Home />, // Specify 'element' prop with the corresponding component
            exact: true
        },
        {
            path: '/about',
            element: <About />,
            exact: true
        }

    ];
    return (
        <MainLayout>
            {/*<Router>*/}
                <Routes>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={route.element} // Make sure to invoke the function as a component using JSX syntax
                        />
                    ))}
                </Routes>
            {/*</Router>*/}
      </MainLayout>
    );
};

export default Index;
