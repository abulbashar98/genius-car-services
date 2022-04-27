import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Register.css'
import SocialLogin from '../SociralLogin/SocialLogin';

const Register = () => {

    const navigate = useNavigate()
    const [agreed, setAgreed] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [sendEmailVerification,
        sending,
        error1] = useSendEmailVerification(auth);

    const [updateProfile] = useUpdateProfile(auth);


    if (user) {
        console.log(user);
    }


    const handleRegister = async (event) => {
        event.preventDefault();
        // console.log(event.target)
        // console.log(event.target.email)
        // console.log(event.target.email.value)

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agreed = event.target.terms.checked

        // console.log(email, password, name, agreed)

        await createUserWithEmailAndPassword(email, password);
        navigate('/home')

        // 2nd way of doing verification
        // await sendEmailVerification();
        // alert('Verify Your Email')

        await updateProfile({ displayName: name });
        alert('Updated profile');


    }




    return (
        <div className='container w-50'>
            <h2 className='text-primary'>Please Register</h2>
            <form onSubmit={handleRegister} className='register-form'>
                <input type="text" name="name" id="name" placeholder='your name' required />
                <br />
                <input type="email" name="email" id="email" placeholder='your email' required />
                <br />
                <input type="password" name="password" id="password" placeholder='create password' required />
                <br />
                <input onClick={() => setAgreed(!agreed)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agreed ? 'ps-2 text-primary' : 'ps-2 text-danger'} htmlFor="terms">Accept Terms And Conditions of genius car services</label> */}
                <label
                    className={`ps-2 ${agreed ? 'text-primary' : 'text-danger'}`}
                    htmlFor="terms">
                    Accept Terms And Conditions of genius car services
                </label>
                <input
                    disabled={!agreed}
                    className='btn btn-primary w-50 mx-auto d-block mt-2' type="submit" value="Register"
                />
                <p className='text-danger'>{error?.message}</p>
                <p>Already have an account in genius car services???<Link to='/login' className='text-primary fw-bold pe-auto text-decoration-none'>Please Login</Link></p>
                <SocialLogin></SocialLogin>
            </form>
        </div>
    );
};

export default Register;