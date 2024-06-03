
'use client';


import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const Page = () => {
    const [files, setFiles] = useState([]);

    const onDrop = useCallback(acceptedFiles => {
        setFiles(prevFiles => [...prevFiles, ...acceptedFiles]);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: 'image/*,video/mp4', multiple: true });

    return (
        <div className='p-5 md:p-10'>
            <div {...getRootProps()} style={{ border: '1px solid black', padding: '20px', width: '300px' }}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Drop the images here ...</p> :
                        <p>Drag 'n' drop some files here, or click to select files</p>
                }
                
            </div>
            <button className='bg-blue-500 px-5 py-2 rounded-lg'>Submit</button>
            <div  style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginTop: '20px' }}>
                {files.map((file, index) => (
                    file.type === 'video/mp4' ?
                        <video key={index} src={URL.createObjectURL(file)} style={{ width: '100%', objectFit: 'cover', gridRowEnd: `span ${index % 2 + 1}` }} muted loop autoplay playsinline />
                        :
            <img
                key={index}
                src={URL.createObjectURL(file)}
                style={{ width: '100%', objectFit: 'cover', gridRowEnd: `span ${index % 2 + 1}`, boxShadow: '5px 5px 15px rgba(0,0,0,0.3)' }}
                alt="preview"
            />
                ))}
            </div>
        </div>
    );
};

export default Page;