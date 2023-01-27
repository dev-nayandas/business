import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import NavBar from '../NavBar/NavBar';
import Offer from '../Offer/Offer';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
       
            <Banner></Banner>
            <Products></Products>
            <Offer></Offer>
            <Hero></Hero>
            <Footer></Footer>
           
        </div>
    );
};

export default Home;