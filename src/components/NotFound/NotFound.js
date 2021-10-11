import React from 'react';
import Header from '../Header/Header';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="error-bg">
            <Header></Header>
            <h1 className="text-danger mt-5">Cant found error 404 !!!</h1>
        </div>



    );
};

export default NotFound;