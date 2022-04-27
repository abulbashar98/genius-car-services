import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SociralLogin/SocialLogin';
import './Login.css'

const Login = () => {


    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, error1] = useSendPasswordResetEmail(auth);

    const resetPassword = async () => {
        const email = emailRef.current.value;

        if (email) {
            await sendPasswordResetEmail(email);
            alert('Sent email');
        }

    }



    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error ? error.message : 'Invalid email'}</p>
    }


    const handleLoginSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;


        // console.log(email, password)

        signInWithEmailAndPassword(email, password)
    }

    if (user) {
        console.log(user)
        navigate(from, { replace: true })
    }


    const navigateToRegister = () => {
        navigate('/register')
    }



    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary'>Please Login!</h2>
            <Form onSubmit={handleLoginSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <p className='text-danger'>{errorElement}</p>
                <Button className='w-50 mx-auto d-block my-2' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p>Forget Password??<Link to='' onClick={resetPassword} className='text-primary fw-bold pe-auto text-decoration-none'>Please Reset Password</Link></p>
            <p>New in genius car services?? <Link to='/register' onClick={navigateToRegister} className='text-primary fw-bold pe-auto text-decoration-none'>Please Register</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;