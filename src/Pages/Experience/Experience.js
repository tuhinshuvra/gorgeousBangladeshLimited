import React from 'react';
import CategoryOne from '../../assets/images/categories/Agro_and_Foods.png'
import CategoryTwo from '../../assets/images/categories/Cement_Industry_Materials.png'
import CategoryThree from '../../assets/images/categories/Commercial_Transport.JPG'
import CategoryFour from '../../assets/images/categories/Logistics_and_Security.png'
import CategoryFive from '../../assets/images/categories/Power_Solution.png'
import CategorySix from '../../assets/images/categories/RMG_Sector.png'

import './Experience.css';
import { Link } from 'react-router-dom';

const Experience = () => {
    return (
        <div className='product_bg'>
            <div className="col-lg-12 px-4 py-5">
                <div className="row flex-lg-row-reverse g-5 py-5">
                    <div className="col-lg-6">
                        <div className="slide-left">
                            <div id="gblExperienceCarousol" className="carousel slide " data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active rounded-5" data-bs-interval="2000">
                                        <img src={CategoryOne} className="d-block w-100 rounded-5 " alt="..." />
                                    </div>
                                    <div className="carousel-item rounded-5" data-bs-interval="2000">
                                        <img src={CategoryTwo} className="d-block w-100 rounded-5 " alt="..." />
                                    </div>
                                    <div className="carousel-item rounded-5" data-bs-interval="2000">
                                        <img src={CategoryThree} className="d-block w-100 rounded-5 " alt="..." />
                                    </div>
                                    <div className="carousel-item rounded-5" data-bs-interval="2000">
                                        <img src={CategoryFour} className="d-block w-100 rounded-5 " alt="..." />
                                    </div>
                                    <div className="carousel-item rounded-5" data-bs-interval="2000">
                                        <img src={CategoryFive} className="d-block w-100 rounded-5 " alt="..." />
                                    </div>
                                    <div className="carousel-item rounded-5" data-bs-interval="2000">
                                        <img src={CategorySix} className="d-block w-100 rounded-5 " alt="..." />
                                    </div>

                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#gblExperienceCarousol" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#gblExperienceCarousol" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className='slide-right'>
                            <h1 className="display-5 fw-bold lh-1 mb-3">12+ Years <br /> of Experience</h1>
                            <p className="">
                                <span>Our business enterprise aims at the overall development of Bangladesh by undertaking entrepreneurship in multiple nation-building ventures.</span>

                                <span className=''> Our services sections are  Agro and Foods, Cement Industry Materials, Commercial Transport, Logistics and Security, Power Solutions, RMG Sectors</span> <br /><br />

                                <span>Our mission is among others, to make employment opportunities, eliminate poverty, contribute to enhancing infrastructures at the national level, and finally lead Bangladesh toward development and prosperity.</span>
                            </p>
                            <div className="">
                                <Link className='gbl_btn btn btn-success rounded-pill fw-bold text-decoration-none text-white' to="/about">
                                    Explore More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Experience;