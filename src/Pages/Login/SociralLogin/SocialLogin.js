import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignInWithGithub } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import githubImg from '../../../images/Social/GitHub-Mark.png'
import facebookImg from '../../../images/Social/facebook.png'
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const navigate = useNavigate()

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);



    let errorElement;

    if (user || user1) {
        navigate('/home')
    }

    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }

    return (
        <div>
            <div className='d-flex my-4 align-items-center'>
                <div style={{ height: '2px' }} className='w-50 bg-primary'></div>
                <p className='pt-2 mx-3'>or</p>
                <div style={{ height: '2px' }} className='w-50 bg-primary'></div>
            </div>
            <p className='text-danger'>{errorElement}</p>
            <div className='w-50 mx-auto'>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-100 mx-auto'>
                    <FcGoogle size={27}></FcGoogle>
                    <span className='mx-3'>Google sign in</span>
                </button>
            </div>
            <div className='w-50 mx-auto my-2'>
                <button className='btn btn-info w-100 mx-auto'>
                    <img src={facebookImg} alt="" />
                    <span className='mx-3'>Facebook sign in</span>
                </button>
            </div>
            <div className='w-50 mx-auto my-2'>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-info w-100 mx-auto'>
                    <img style={{ height: '33px' }} src={githubImg} alt="" />
                    <span className='mx-3'>Github sign in</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;