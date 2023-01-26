import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <div className='hero_bg d-flex justify-content-center align-items-center '>
            <div className="px-4  text-center">
                <h1 className="display-5 fw-bold">Gorgeous Bangladesh Ltd(GBL).</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead  mb-4  fw-bold text-success">We build quality</p>
                    <div className=" ">
                        <Link className='gbl_btn btn btn-success rounded-pill fw-bold text-decoration-none text-white' to="/about">
                            Explore More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;