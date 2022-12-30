import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';

const MenuBar = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Link className='navbar-brand' to="/home">OPTA CARE CLINIC</Link>
                    <Nav className="ms-auto">
                        <NavLink className='nav-link' to='/home'>Home</NavLink>
                        <NavLink className='nav-link' to='#'>Pricing</NavLink>
                        <Nav.Link as={HashLink} className='nav-link' to='/home#services'>Services</Nav.Link>
                        {
                            user.email ? <p onClick={logOut} className='nav-link ms-5' to=''>Logout</p> : <NavLink className='nav-link ms-5' to='/login'>Login</NavLink>
                        }


                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
};

export default MenuBar;