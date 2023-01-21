import React from 'react';
import ExperiencePhto from '../../assets/images/categories/Cement_Industry_Materials.png';

import CategoryOne from '../../assets/images/categories/Agro_and_Foods.png'
import CategoryTwo from '../../assets/images/categories/Cement_Industry_Materials.png'
import CategoryThree from '../../assets/images/categories/Commercial_Transport.png'
import CategoryFour from '../../assets/images/categories/Logistics_and_Security.png'
import CategoryFive from '../../assets/images/categories/Power_Solution.png'
import CategorySix from '../../assets/images/categories/RMG_Sector.png'

import './Experience.css';

const Experience = () => {
    return (
        <div className='product_bg'>
            <div className="col-lg-12 px-4 py-5">
                <div className="row flex-lg-row-reverse   g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6  ">
                        {/* <img src={ExperiencePhto} className="d-block mx-lg-auto img-fluid rounded-5" alt="Bootstrap Themes" width="700" height="500" loading="lazy" /> */}


                        <div className=' my-0 py-0'>
                            <div id="carouselExampleInterval" class="carousel slide " data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active" data-bs-interval="3000">
                                        <img src={CategoryOne} class="d-block w-100 rounded-3 " alt="..." />
                                    </div>
                                    <div class="carousel-item" data-bs-interval="2000">
                                        <img src={CategoryTwo} class="d-block w-100 rounded-3 " alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={CategoryThree} data-bs-interval="2000" class="d-block w-100 rounded-3 " alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={CategoryFour} data-bs-interval="2000" class="d-block w-100 rounded-3 " alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={CategoryFive} data-bs-interval="2000" class="d-block w-100 rounded-3 " alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={CategorySix} data-bs-interval="2000" class="d-block w-100 rounded-3 " alt="..." />
                                    </div>

                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6  ">
                        <h1 className="display-5 fw-bold lh-1 mb-3">12+ Years <br /> of Experience</h1>
                        <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit nam vel excepturi, et labore assumenda suscipit soluta reprehenderit modi praesentium?
                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            {/* <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Explore More</button> */}
                            <button type="button" className="btn btn-success btn-lg px-4   rounded-pill fw-bold">Explore More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;