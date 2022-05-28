import React from 'react';

const NotFound = () => {
    return (
        <div>
            <p className='text-red-500 text-center'>Sorry Bro!</p>
            <p className='text-center text-red-500'>Your search route didn't match, please try again</p>
            <h1 className='text-center text-red-500'>404</h1>
        </div>
    );
};

export default NotFound;