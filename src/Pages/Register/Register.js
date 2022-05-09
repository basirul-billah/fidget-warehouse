import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Register = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [error, setError] = useState('');
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();


    const handleNewEmail = e => {
        setEmail(e.target.value);
    }

    const handleNewPassword = e => {
        setPassword(e.target.value);
    }
    
    const handleConfirmPassword = e => {
        setConfirmPassword(e.target.value);
    }

    const handleRegistration = e => {
        e.preventDefault();

        if(password.length < 6) {
            setError('Passwords need to at least 6 character or longer.');
            return;
        }
        if(password !== confirmPassword) {
            setError('Passwords does not match');
            return;
        }
        createUserWithEmailAndPassword(email, password);
        navigate('/home');
        
    }
    return (
        <div className='card bg-[#15263F] w-2/5 h-[38rem] rounded-xl p-6 mx-auto mb-5'>
            <h1 className='text-4xl font-bold my-4 text-white'>Register</h1>

            {/* sign up form */}
            <form onSubmit={handleRegistration}>
                <input onBlur={handleNewEmail} className='my-3 p-3 w-full rounded-md bg-white' type="email" name="email" id="email" placeholder='Email' />
                <input onBlur={handleNewPassword}className='my-3 p-3 w-full rounded-md bg-white' type="password" name="password" id="password" placeholder='Password' />
                <input onBlur={handleConfirmPassword}className='my-3 p-3 w-full rounded-md bg-white' type="password" name="confirmPassword" id="confirmPassword" placeholder='Confirm Password' />
                <p className='text-red-900'>{error}</p>
                <input className='my-3 p-3 w-full rounded-md bg-blue-500 cursor-pointer' type="submit" value="Create New Account" />
            </form>

            <p className='text-white my-3'>Already have an account? <Link className='text-red-900' to='/login'>Log in</Link></p>

            <div className="flex items-center py-3">
                <hr className="w-full border border-gray-300" />
                <div className="font-semibold text-gray-400 px-3">OR</div>
                <hr className="w-full border border-gray-300" />
            </div>

            {/* sign in using social */}
            <div className="grid grid-cols-1 gap-4 py-3">
                <a
                    href="/"
                    className="text-center rounded-md border-b-2 border-b-gray-300 bg-white py-2.5 px-4 font-bold text-blue-500 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200"
                >Register with GOOGLE</a>
            </div>

        </div>
    );
};

export default Register;