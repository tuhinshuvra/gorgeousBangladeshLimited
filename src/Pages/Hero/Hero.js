import React from 'react';
import HeroSliderOne from '../../assets/images/hero_slider/Slide1.png';
import HeroSliderTwo from '../../assets/images/hero_slider/Slide2.png';
import HeroSliderThree from '../../assets/images/hero_slider/Slide3.png';
import HeroSliderFour from '../../assets/images/hero_slider/Slide4.png';
import HeroSliderFive from '../../assets/images/hero_slider/Slide5.png';
import HeroSliderSix from '../../assets/images/hero_slider/Slide6.png';
import HeroSliderSeven from '../../assets/images/hero_slider/Slide7.png';
import './Hero.css';

const Hero = () => {
    return (
        <div>
            <div className="hero_bg">
                <div id="gblHeroCarousol" className="carousel carousel-dark slide " data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="2000">
                            <img src={HeroSliderOne} className="d-block w-100 image_height" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={HeroSliderTwo} className="d-block w-100 image_height" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={HeroSliderThree} className="d-block w-100  image_height" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={HeroSliderFour} className="d-block w-100  image_height" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={HeroSliderFive} className="d-block w-100  image_height" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={HeroSliderSix} className="d-block w-100  image_height" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={HeroSliderSeven} className="d-block w-100  image_height" alt="..." />
                        </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#gblHeroCarousol" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#gblHeroCarousol" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>


        // <div className='hero_bg d-flex justify-content-center align-items-center '>
        //     <div className="px-4  text-center">
        //         <h1 className="display-5 fw-bold">Gorgeous Bangladesh Ltd(GBL).</h1>
        //         <div className="col-lg-6 mx-auto">
        //             <p className="lead  mb-4  fw-bold text-success">We build quality</p>
        //             <div className=" ">
        //                 <Link className='gbl_btn btn btn-success rounded-pill fw-bold text-decoration-none text-white' to="/about">
        //                     Explore More
        //                 </Link>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Hero;