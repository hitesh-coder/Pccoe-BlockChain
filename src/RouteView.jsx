import React from 'react';
import { Route, Routes } from 'react-router-dom';

// components
// import Counter from './features/counter/Counter';
import LoginPage from './features/component/Auth/LoginPage';
import Signup from './features/component/Auth/Signup';
import ErrorPage from './features/component/ErrorPage';
import Home from './features/component/Home';

const RouteView = () => {
    return (
        <>
            <Routes>
                {/* <Route path="/" element={<Counter />} exact /> */}
                <Route path="/" element={<Home />} exact />
                <Route path="/login" element={<LoginPage />} exact />
                <Route path="/signup" element={<Signup />} exact />
                <Route path="*" element={<ErrorPage />}/>
            </Routes>
        </>
    )
}

export default RouteView;
