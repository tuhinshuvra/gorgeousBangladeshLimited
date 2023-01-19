import React from 'react';
import Products from '../Products/Products';
import BusinessSegment from '../BusinessSegment/BusinessSegment';
import Experience from '../Experience/Experience';

const Home = () => {
    return (
        <div>
            <Experience></Experience>
            <BusinessSegment></BusinessSegment>
            <Products></Products>

        </div>
    );
};

export default Home;