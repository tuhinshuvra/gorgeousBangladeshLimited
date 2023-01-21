import React from 'react';
import './MulitImageSlider.css';
import { Link } from 'react-router-dom';
import Carousel from 'react-grid-carousel';
import './MulitImageSlider.css';

import AdOne from '../../assets/images/clients/CCPIT_TEX.png';
import AdTwo from '../../assets/images/clients/china_real_estate.png';
import AdThree from '../../assets/images/clients/chines_textile.jpg';
import AdFour from '../../assets/images/clients/chines_textile2.png';
import AdFive from '../../assets/images/clients/navana_realestate.png';
import AdSix from '../../assets/images/clients/dalmia.png';
import AdSeven from '../../assets/images/clients/lucky_cement.png';
import AdEignt from '../../assets/images/clients/quassim_cement.png';
import AdNine from '../../assets/images/clients/ultratech_Cement_Logo.png';

const Advertise = () => {

    return (
        <div className='popular-location location-bg my-0 py-0 '>
            <h1 className="col-12 text-center fw-bold section-title">Our Clients</h1>
            <div className=' col-lg-12 '>
                <div className='row'>


                    <div className=' col-lg-12'>
                        {/* <h2 className=' fw-bold text-center'>International</h2> */}
                        <Carousel cols={5} rows={1} gap={5} loop={true} autoplay={3000} >
                            <Carousel.Item>
                                <div class="card border-0" style={{ width: "15rem" }}>
                                    <img class="card-img-top img-fluid p-2 rounded-4" style={{ height: "8rem" }} src={AdOne} alt='' />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="card border-0" style={{ width: "15rem" }}>
                                    <img class="card-img-top img-fluid rounded-4" style={{ height: "8rem" }} src={AdTwo} alt='' />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="card border-0" style={{ width: "15rem" }}>
                                    <img class="card-img-top img-fluid rounded-4" style={{ height: "8rem" }} src={AdThree} alt='' />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="card border-0" style={{ width: "15rem" }}>
                                    <img class="card-img-top img-fluid rounded-4" style={{ height: "8rem" }} src={AdFour} alt='' />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="card border-0" style={{ width: "15rem" }}>
                                    <img class="card-img-top img-fluid rounded-4" style={{ height: "8rem" }} src={AdFive} alt='' />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="card border-0" style={{ width: "15rem" }}>
                                    <img class="card-img-top img-fluid rounded-4" style={{ height: "8rem" }} src={AdSix} alt='' />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="card border-0" style={{ width: "15rem" }}>
                                    <img class="card-img-top img-fluid rounded-4" style={{ height: "8rem" }} src={AdSeven} alt='' />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="card border-0" style={{ width: "15rem" }}>
                                    <img class="card-img-top img-fluid rounded-4" style={{ height: "8rem" }} src={AdEignt} alt='' />
                                    <div class="card-body">

                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="card border-0" style={{ width: "15rem" }}>
                                    <img class="card-img-top img-fluid rounded-4" style={{ height: "8rem" }} src={AdNine} alt='' />
                                    <div class="card-body">

                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="card border-0" style={{ width: "15rem" }}>
                                    <img class="card-img-top img-fluid rounded-4" style={{ height: "8rem" }} src={AdOne} alt='' />
                                    <div class="card-body">

                                    </div>
                                </div>
                            </Carousel.Item>

                        </Carousel>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Advertise;