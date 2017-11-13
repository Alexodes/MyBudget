import React from 'react';
import Rolling from '../img/Rolling.gif';

const LoadingPage = () => (
    <div className="loader">
        <img className="loader__img" src={Rolling} alt="loader"/>
    </div>
);

export default LoadingPage;