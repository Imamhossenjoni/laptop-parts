import React from 'react';
import OrderProduct from '../OrderProduct';
import Footer from '../Shared/Footer';
import Parts from './Parts';
import Review from './Review';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <Parts></Parts>
            <Summary></Summary>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;