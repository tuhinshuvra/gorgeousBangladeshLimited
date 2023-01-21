import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='hero_bg d-flex justify-content-center align-items-center '>
            <div className="px-4  text-center">
                <h1 className="display-5 fw-bold">Gorgeous Bangladesh Ltd(GBL).</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead  mb-4  fw-bold">We build quality</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="btn btn-success btn-lg px-4 gap-3  rounded-pill fw-bold">
                            <Link className=' text-decoration-none text-white' to="/about">
                                Explore More
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;