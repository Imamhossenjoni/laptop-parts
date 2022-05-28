import React from 'react';
import OrderProduct from '../OrderProduct';
import Footer from '../Shared/Footer';
import Parts from './Parts';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Parts></Parts>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;