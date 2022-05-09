import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const LogIn = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [signInWithEmailAndPassword, user] = useSignInWithEmailAndPassword(auth);
    const [error, setError] = useState('');
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
        navigate(from, {replace: true});
    }
    else {
        setError('User not found! Please register before logging in.');
    }

    return (
        <div className='card bg-[#15263F] w-2/5 h-[32rem] rounded-xl p-6 mx-auto'>
            <h1 className='text-4xl font-bold my-4 text-white'>Log in</h1>

            {/* sign in form */}
            <form onSubmit={handleLogin}>
                <input onBlur={onEmailBlur} className='my-3 p-3 w-full rounded-md bg-white' type="email" name="email" id="email" placeholder='Email' />
                <input onBlur={onPasswordBlur} className='my-3 p-3 w-full rounded-md bg-white' type="password" name="password" id="password" placeholder='Password' />
                <button className='my-3 p-3 w-full rounded-md bg-blue-500' type="submit">Log in</button>
            </form>
            <p className='text-red-900'>{error}</p>
            <p className='text-white my-3'>Forgot password? <a className='text-red-900' href="/">Reset Password</a></p>
            <p className='text-white my-3'>Don't have an account? <Link className='text-red-900' to='/register'>Register now!</Link></p>

            <div className="flex items-center py-3">
                <hr className="w-full border border-gray-300" />
                <div className="font-semibold text-gray-400 px-3">OR</div>
                <hr className="w-full border border-gray-300" />
            </div>

            {/* sign in using social */}
            <div className="grid grid-cols-2 gap-4 py-3">
                <a
                    href="/"
                    className="text-center rounded-md border-b-2 border-b-gray-300 bg-white py-2.5 px-4 font-bold text-blue-700 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200"
                >FACEBOOK</a
                >
                <a
                    href="/"
                    className="text-center rounded-md border-b-2 border-b-gray-300 bg-white py-2.5 px-4 font-bold text-blue-500 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200"
                >GOOGLE</a>
            </div>

        </div>
    );
};

export default LogIn;