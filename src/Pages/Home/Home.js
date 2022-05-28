import React from 'react';
import OrderProduct from '../OrderProduct';
import Footer from '../Shared/Footer';
import Parts from './Parts';
import Review from './Review';
import Summary from './Summary';
import Banner from './Banner'
import HomeLogin from './HomeLogin';

const Home = () => {
    return (
        <div className='px-10'>
            <Banner></Banner>
            <Parts></Parts>
            <Summary></Summary>
            <Review></Review>
            <HomeLogin></HomeLogin>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;