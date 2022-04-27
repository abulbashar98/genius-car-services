import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Register.css'
import SocialLogin from '../SociralLogin/SocialLogin';

const Register = () => {

    const navigate = useNavigate()

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const handleRegister = event => {
        event.preventDefault();
        // console.log(event.target)
        // console.log(event.target.email)
        // console.log(event.target.email.value)

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        // console.log(email, password, name)

        createUserWithEmailAndPassword(email, password)
    }

    if (user) {
        navigate('/home')
    }

    return (
        <div className='container w-50'>
            <h2 className='text-primary'>Please Register</h2>
            <form onSubmit={handleRegister} className='register-form'>
                <input type="text" name="name" id="" placeholder='your name' required />
                <br />
                <input type="email" name="email" id="" placeholder='your email' required />
                <br />
                <input type="password" name="password" id="" placeholder='create password' required />
                <br />
                <input type="checkbox" name="terms" id="terms" />
                <label className='ms-2' htmlFor="terms">Accept Terms And Conditions of genius car services</label>
                <input className='btn btn-primary w-50 mx-auto d-block mt-2' type="submit" value="Register" />
                <p className='text-danger'>{error?.message}</p>
                <p>Already have an account in genius car services???<Link to='/login' className='text-primary fw-bold pe-auto text-decoration-none'>Please Login</Link></p>
                <SocialLogin></SocialLogin>
            </form>
        </div>
    );
};

export default Register;