import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Index from './Routes';

const App = () => {
    return (
        <Router>
            <Index />
        </Router>
    );
};

export default App;
