import React from 'react';
import Products from '../Products/Products';
import Experience from '../Experience/Experience';
import Hero from '../Hero/Hero';
import Segment from '../BusinessSegment/Segment';
import Advertise from '../Advertise/Advertise';
import AdvertiseBelow from '../AdvertiseBelow/AdvertiseBelow';
import './GBLAnimation.css'

const Home = () => {
    return (
        <div className=''>

            {/* <Test></Test> */}
            <Hero></Hero>
            <Experience></Experience>
            <Segment></Segment>
            <Products></Products>
            <Advertise></Advertise>
            <AdvertiseBelow></AdvertiseBelow>
        </div>
    );
};

export default Home;