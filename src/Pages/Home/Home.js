import React from 'react';
import Products from '../Products/Products';
import BusinessSegment from '../BusinessSegment/BusinessSegment';
import Experience from '../Experience/Experience';
import Hero from '../Hero/Hero';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Experience></Experience>
            <BusinessSegment></BusinessSegment>
            <Products></Products>

        </div>
    );
};

export default Home;