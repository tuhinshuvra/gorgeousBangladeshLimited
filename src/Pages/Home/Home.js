import React from 'react';
import Products from '../Products/Products';
import Experience from '../Experience/Experience';
import Hero from '../Hero/Hero';
import Segment from '../BusinessSegment/Segment';
import Clients from '../Clients/Clients';
import InternationalPartners from '../InternationalPartners/InternationalPartners';
import './GBLAnimation.css'

const Home = () => {
    return (
        <div className=''>
            <Hero></Hero>
            <Experience></Experience>
            <Segment></Segment>
            <Products></Products>
            <Clients></Clients>
            <InternationalPartners></InternationalPartners>
        </div>
    );
};

export default Home;