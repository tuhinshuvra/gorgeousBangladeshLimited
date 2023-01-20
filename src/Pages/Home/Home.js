import React from 'react';
import Products from '../Products/Products';
import Experience from '../Experience/Experience';
import Hero from '../Hero/Hero';
import Segment from '../BusinessSegment/Segment';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Experience></Experience>
            <Segment></Segment>
            <Products></Products>

        </div>
    );
};

export default Home;