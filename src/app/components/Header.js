import React from 'react';
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";


const Header = () => {
    return (
        <header className="flex justify-between items-center p-6 border-b border-white bg-transparent shadow-lg">
            <div className="text-2xl font-bold text-gray-100">FINGALLERY</div>
            <nav className="space-x-4">
                <button className="bg-transparent text-white font-bold py-2 px-4 rounded-md m-2">
                    Button 1
                </button>
                <button className="bg-transparent text-white font-bold py-2 px-4 rounded-md m-2">
                    Button 2
                </button>
                <RegisterLink className="bg-transparent border text-white font-bold py-2 px-4 rounded-md m-2">
                    Register
                </RegisterLink>
            </nav>
        </header>
    );
};

export default Header;