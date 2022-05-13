import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    }

    return (
        <div>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#15263F] mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                        <Link className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" to="/">
                            Fidget Warehouse
                        </Link>
                        <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
                            <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                            <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                            <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                        </button>
                    </div>
                    <div className="lg:flex flex-grow items-center">
                        <ul className="flex flex-col lg:flex-row list-none ml-auto">

                            {
                                user && <>
                                    <li className="nav-item">
                                        <Link className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" to="/manageinventory">
                                            Manage Inventory
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" to="/additems">
                                            Add Items
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" to="/myitems">
                                            My Items
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" to="/blog">
                                            Blog
                                        </Link>
                                    </li>
                                </>
                            }
                            <li className="nav-item">
                                {
                                    user
                                        ?
                                        <button onClick={logout} className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" to='/'>Log out</button>
                                        :
                                        <Link className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" to="/login">
                                            Log in
                                        </Link>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;