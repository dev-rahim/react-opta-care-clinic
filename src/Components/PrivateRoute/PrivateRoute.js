import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = () => {

    const { setIsLoading, user, isLoading } = useAuth()
    const location = useLocation()
    if (user.email) {
        setIsLoading(false)
    }
    if (isLoading) {
        return <Spinner className='mt-5' animation="border" variant="primary" />
    }
    else {
        return (
            user.email ? <Outlet /> : <Navigate to={'/login'} replace state={{ from: location }} />
        );
    }
};

export default PrivateRoute;