import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const MenuBar = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Link className='navbar-brand' to="/home">OPTA CARE CLINIC</Link>
                    <Nav className="ms-auto">
                        <NavLink className='nav-link' to='/home'>Home</NavLink>
                        <NavLink className='nav-link' to='#'>Pricing</NavLink>
                        <NavLink className='nav-link ms-5' to='/login'>Login</NavLink>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
};

export default MenuBar;