// photos/page.js
'use client';

import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import UserUploadGrid from "../components/UserUploadGrid";

const Page = () => {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const [images, setImages] = useState([]);

    const handleImageUpload = event => {
        const files = Array.from(event.target.files);
        setImages(prevImages => [...prevImages, ...files]);
    };

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('/api/user', { method: 'GET' });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setUserData(data);
            } catch (error) {
                setError(error.toString());
            }
        };

        fetchUser();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div className='h-screen flex flex-col p-5'>
            <div>
                <Header />
                <div className='mt-5 flex flex-row items-center'>
                    <div>
                        <img className='rounded-full h-10 w-10' src={userData.user.picture} alt="User" />
                    </div>
                    <div className='flex flex-col ml-2'>
                        <pre className='font-bold'>{userData.user.given_name}</pre>
                        <pre className='text-sm text-gray-500'>{userData.user.email}</pre>
                    </div>
                </div>
            </div>
            <div className='flex-grow flex items-center justify-center mt-10'>
                <label className='flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-700 hover:text-white'>
                    <svg className='w-8 h-8' fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                        <path d='M10 4a2 2 0 00-2 2v4a2 2 0 002 2 2 2 0 002-2V6a2 2 0 00-2-2zm0 12a6 6 0 01-6-6h2a4 4 0 108 0h2a6 6 0 01-6 6z' />
                    </svg>
                    <span className='ml-2 text-base leading-normal'>Select a file</span>
                    <input type='file' className='hidden' accept="image/*" multiple onChange={handleImageUpload} />
                </label>
            </div>
            <div className='flex flex-wrap mt-5 justify-center'>
                {images.map((image, index) => (
                    <div key={index} className='w-1/4 p-1'>
                        <img src={URL.createObjectURL(image)} alt={`Uploaded ${index}`} className='w-full rounded-lg' />
                    </div>
                ))}
            </div>
            <button className='mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Submit</button>
        </div>
    );
};

export default Page;