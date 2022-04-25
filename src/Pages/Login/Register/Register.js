import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {


    const handleRegister = event => {
        event.preventDefault();
        // console.log(event.target)
        // console.log(event.target.email)
        // console.log(event.target.email.value)

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        // console.log(email, password, name)


    }

    return (
        <div className='container w-50'>
            <h2 className='text-primary'>Please Register</h2>
            <form onSubmit={handleRegister} className='register-form'>
                <input type="text" name="name" id="" placeholder='your name' required />
                <br />
                <input type="email" name="email" id="" placeholder='your email' required />
                <br />
                <input type="password" name="password" id="" placeholder='password' required />
                <br />
                <input type="submit" value="Register" />
                <p>Already have an account in genius car services???<Link to='/login' className='text-danger fw-bold pe-auto text-decoration-none'>Login</Link></p>
            </form>
        </div>
    );
};

export default Register;