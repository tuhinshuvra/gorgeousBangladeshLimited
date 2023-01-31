import React from 'react';
import CategoryOne from '../../assets/images/exp_products/corn.png';
import CategoryTwo from '../../assets/images/exp_products/ebike.png';
import CategoryThree from '../../assets/images/exp_products/e_scuter.png';
import CategoryFour from '../../assets/images/exp_products/gbl_product1.png';
import CategoryFive from '../../assets/images/exp_products/gbl_product2.png';
import CategorySix from '../../assets/images/exp_products/gbl_product3.png';
import CategorySeven from '../../assets/images/exp_products/gbl_product4.png';
import CategoryEight from '../../assets/images/exp_products/gbl_product5.png';
import { Link } from 'react-router-dom';
import './Experience.css';

const Experience = () => {
    return (
        <div className='product_bg'>
            <div className=" col-lg-10 mx-auto">

                <div className="row  d-flex py-5">
                    <div className="col-lg-6 gbl_animate_left mb-3" loading="lazy">
                        <div className=' mx-lg-0  mx-5 '>
                            <h1 className="display-5 fw-bold lh-1 mb-3 gbl_animate_bottom">12+ Years <br /> of Experience</h1>
                            <p className="">
                                <span>Our business enterprise aims at the overall development of Bangladesh by undertaking entrepreneurship in multiple nation-building ventures.</span> <br /><br />
                                <span className=''> Our services sections are  Agro and Foods, Cement Industry Materials, Commercial Transport, Logistics and Security, Power Solutions, RMG Sectors</span>

                            </p>
                            <div className="">
                                <Link className='gbl_btn btn btn-success rounded-pill fw-bold text-decoration-none text-white' to="/about">
                                    Explore More
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 gbl_animate_right" loading="lazy">
                        <div className=' mx-lg-0  mx-5 '>
                            <div id="gblExperienceCarousol" className="carousel carousel-dark slide " data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active rounded-5" data-bs-interval="2000">
                                        <img src={CategoryOne} className="d-block w-100 rounded-5  " alt="..." />
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
                                    <div className="carousel-item rounded-5" data-bs-interval="2000">
                                        <img src={CategorySeven} className="d-block w-100 rounded-5 " alt="..." />
                                    </div>
                                    <div className="carousel-item rounded-5" data-bs-interval="2000">
                                        <img src={CategoryEight} className="d-block w-100 rounded-5 " alt="..." />
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
                </div>
            </div>
        </div >
    );
};

export default Experience;