import React from 'react';
import { Button, Form } from 'react-bootstrap';
import MenuBar from '../Shared/Menubar/MenuBar';

const Login = () => {
    const handleRegestration = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <MenuBar />
            <div className="w-50 mx-auto text-start">
                <Form onSubmit={handleRegestration}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <button className='btn btn-primary' type="">
                        Submit
                    </button>
                </Form>
            </div>
        </div>
    );
};

export default Login;