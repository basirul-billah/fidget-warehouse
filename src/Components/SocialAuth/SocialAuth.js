import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialAuth = () => {
    const [signInWithGoogle, user, error, loading] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let statusElement;

    if(error) {
        statusElement = (
            <div>
                <p className='text-red-900'>{error?.message}</p>
            </div>
        )
    }

    if(loading) {
        statusElement = (
            <div>
                <p className='text-white'>Loading...</p>
            </div>
        )
    }

    if (user) {
        navigate('/home');
    }

    return (
        <div>
            {/* sign in using social */}
            <div className="grid grid-cols-1 gap-4 py-3">
                <button
                    onClick={() => signInWithGoogle()}
                    className="text-center rounded-md border-b-2 border-b-gray-300 bg-white py-2.5 px-4 font-bold text-blue-500 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200"
                >Sign in with GOOGLE</button>
                {statusElement}
            </div>
        </div>
    );
};

export default SocialAuth;