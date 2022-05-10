import { async } from '@firebase/util';
import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialAuth from '../../Components/SocialAuth/SocialAuth';
import auth from '../../firebase.init';

const LogIn = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [signInWithEmailAndPassword, user, error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/home';

    const onEmailBlur = e => {
        setEmail(e.target.value);
    }

    const onPasswordBlur = e => {
        setPassword(e.target.value);
    }

    const handleLogin = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleResetPassword = async e => {
        e.preventDefault();
        await sendPasswordResetEmail(email);
        alert('Check your email for password reset link.');
    }

    return (
        <div className='card bg-[#15263F] w-2/5 h-[36rem] rounded-xl p-6 mb-10 mx-auto'>
            <h1 className='text-4xl font-bold my-4 text-white'>Log in</h1>

            {/* sign in form */}
            <form onSubmit={handleLogin}>
                <input onBlur={onEmailBlur} className='my-3 p-3 w-full rounded-md bg-white' type="email" name="email" id="email" placeholder='Email' />
                <input onBlur={onPasswordBlur} className='my-3 p-3 w-full rounded-md bg-white' type="password" name="password" id="password" placeholder='Password' />
                <button className='my-3 p-3 w-full rounded-md bg-blue-500' type="submit">Log in</button>
            </form>

            <p className='text-red-900'>{error?.message}</p>
            <p className='text-white my-3'>Forgot password? <button onClick={handleResetPassword} className='text-red-900'>Reset Password</button></p>
            <p className='text-white my-3'>Don't have an account? <Link className='text-red-900' to='/register'>Register now!</Link></p>

            <div className="flex items-center py-3">
                <hr className="w-full border border-gray-300" />
                <div className="font-semibold text-gray-400 px-3">OR</div>
                <hr className="w-full border border-gray-300" />
            </div>

            {/* sign in using social */}
            <SocialAuth></SocialAuth>

        </div>
    );
};

export default LogIn;