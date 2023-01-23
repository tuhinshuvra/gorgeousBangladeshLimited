import React from 'react';
// import ExperiencePhto from '../../assets/images/categories/Cement_Industry_Materials.png';

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
                <div className="row flex-lg-row-reverse   g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6  ">
                        {/* <img src={ExperiencePhto} className="d-block mx-lg-auto img-fluid rounded-5" alt="Bootstrap Themes" width="700" height="500" loading="lazy" /> */}


                        <div className=' my-0 py-0'>
                            <div id="carouselExampleInterval" className="carousel slide " data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-bs-interval="2000">
                                        <img src={CategoryOne} className="d-block w-100 rounded-5 " alt="..." />
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                        <img src={CategoryTwo} className="d-block w-100 rounded-5 " alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={CategoryThree} data-bs-interval="2000" className="d-block w-100 rounded-5 " alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={CategoryFour} data-bs-interval="2000" className="d-block w-100 rounded-5 " alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={CategoryFive} data-bs-interval="2000" className="d-block w-100 rounded-5 " alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={CategorySix} data-bs-interval="2000" className="d-block w-100 rounded-5 " alt="..." />
                                    </div>

                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6  ">
                        <h1 className="display-5 fw-bold lh-1 mb-3">12+ Years <br /> of Experience</h1>
                        <p className="lead">

                            <p>Our business enterprise aims at the overall development of Bangladesh by undertaking entrepreneurship in multiple nation-building ventures.</p>
                            {/* <br /> */}
                            <p>Our services sections are  Agro and Foods, Cement Industry Materials, Commercial Transport, Logistics and Security, Power Solutions, RMG Sectors</p>
                            {/* <br /><br /> */}
                            <p>Our mission is, among others, to make employment opportunities, eliminate poverty, contribute to enhancing infrastructures at the national level, and finally lead Bangladesh toward development and prosperity.</p>


                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            {/* <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Explore More</button> */}
                            <Link to="/about">
                                <button type="button" className="btn btn-success btn-lg px-4   rounded-pill fw-bold">Explore More</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;