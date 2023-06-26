import React, { useEffect } from 'react';
import Products from '../Products/Products';
import Experience from '../Experience/Experience';
import Hero from '../Hero/Hero';

import Clients from '../Clients/Clients';
import InternationalPartners from '../InternationalPartners/InternationalPartners';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Segment from '../BusinessSegment/Segment';

const Home = () => {
    useEffect(() => {
        AOS.init({
            // offset: 200,
            duration: 3000,
            delay: 200,
            // mirror: true,
            // once: false
        });
    }, [])

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