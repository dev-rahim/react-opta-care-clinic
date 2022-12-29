import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='page-not-found text-center mx-auto  container  mx-2'>
            <div className="">
                <Link className='back-to-home-btn' to={'/home'}>
                    <button className='btn btn-secondary'>Back to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;