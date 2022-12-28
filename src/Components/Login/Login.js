import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import MenuBar from '../Shared/Menubar/MenuBar';

const Login = () => {
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])
    const [IsRegisterd, setIsRegisterd] = useState([])
    const { logOut, signInUsingGoogle, createUserUsingEmail, user, signInWithEmailPass } = useAuth()
    const navigate = useNavigate()
    const handleRegestration = (e) => {
        e.preventDefault();
        createUserUsingEmail(email, password);
    }
    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailPass(email, password)
        console.log(user.email);
        navigate('/home')
    }
    const handleEmailChanged = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChanged = (e) => {
        setPassword(e.target.value);
    }
    const isLogin = (e) => {
        setIsRegisterd(e.target.checked);
    }
    const handleLogout = () => {
        logOut();
        navigate("/home");
    }
    return (
        <div>
            <MenuBar />
            <div className="w-50 mx-auto text-start">
                {
                    user?.email ?
                        <div className='text-center'>
                            <h2 className='mt-5 text-center'>Already Login</h2>
                            <button onClick={handleLogout} className='mt-5 btn btn-danger px-5 py-2'>Logout</button>
                        </div>
                        :
                        <div><h2>{IsRegisterd ? 'Please Login' : 'Please Register'}</h2>
                            <Form onSubmit={IsRegisterd ? handleLogin : handleRegestration}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control onBlur={handleEmailChanged} type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control onBlur={handlePasswordChanged} type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check onChange={isLogin} type="checkbox" label="Already Registered?" />
                                </Form.Group>
                                <button className='btn btn-primary' type="">
                                    {IsRegisterd ? 'Login' : 'Register'}
                                </button>
                            </Form>
                            <br /><br />
                            <p className='text-center'>or</p><br />
                            <button className='mx-auto text-center btn btn-danger px-5 py-2' onClick={signInUsingGoogle}>Google SignIn</button>
                        </div>
                }

            </div>
        </div>
    );
};

export default Login;