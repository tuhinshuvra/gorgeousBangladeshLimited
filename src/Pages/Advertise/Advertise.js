import React from 'react';
import './MulitImageSlider.css';
import { Link } from 'react-router-dom';
import Carousel from 'react-grid-carousel';
import './MulitImageSlider.css';

const Advertise = () => {

    return (
        <div className='popular-location location-bg my-0 py-0 '>
            {/* <h1 className=' text-center fw-bold  '> Popular Locations </h1> */}
            <div className=' col-lg-12 '>
                <div className='row'>


                    <div className=' col-lg-12'>
                        {/* <h2 className=' fw-bold text-center'>International</h2> */}
                        <Carousel cols={5} rows={1} gap={5} loop={true} autoplay={3000} >
                            <Carousel.Item>
                                <div class="card border-0" style={{ width: "15rem" }}>
                                    <img class="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src="https://picsum.photos/800/600?random=1" alt='' />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="card border-0" style={{ width: "15rem" }}>
                                    <img class="card-img-top img-fluid rounded-4" style={{ height: "12rem" }} src="https://picsum.photos/800/600?random=2" alt='' />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="card border-0" style={{ width: "15rem" }}>
                                    <img class="card-img-top img-fluid rounded-4" style={{ height: "12rem" }} src="https://picsum.photos/800/600?random=3" alt='' />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="card border-0" style={{ width: "15rem" }}>
                                    <img class="card-img-top img-fluid rounded-4" style={{ height: "12rem" }} src="https://picsum.photos/800/600?random=4" alt='' />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="card border-0" style={{ width: "15rem" }}>
                                    <img class="card-img-top img-fluid rounded-4" style={{ height: "12rem" }} src="https://picsum.photos/800/600?random=1" alt='' />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="card border-0" style={{ width: "15rem" }}>
                                    <img class="card-img-top img-fluid rounded-4" style={{ height: "12rem" }} src="https://picsum.photos/800/600?random=2" alt='' />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="card border-0" style={{ width: "15rem" }}>
                                    <img class="card-img-top img-fluid rounded-4" style={{ height: "12rem" }} src="https://picsum.photos/800/600?random=3" alt='' />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="card border-0" style={{ width: "15rem" }}>
                                    <img class="card-img-top img-fluid rounded-4" style={{ height: "12rem" }} src="https://picsum.photos/800/600?random=4" alt='' />
                                    <div class="card-body">

                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="card border-0" style={{ width: "15rem" }}>
                                    <img class="card-img-top img-fluid rounded-4" style={{ height: "12rem" }} src="https://picsum.photos/800/600?random=1" alt='' />
                                    <div class="card-body">

                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="card border-0" style={{ width: "15rem" }}>
                                    <img class="card-img-top img-fluid rounded-4" style={{ height: "12rem" }} src="https://picsum.photos/800/600?random=2" alt='' />
                                    <div class="card-body">

                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="card border-0" style={{ width: "15rem" }}>
                                    <img class="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src="https://picsum.photos/800/600?random=3" alt='' />
                                    <div class="card-body">

                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="card border-0" style={{ width: "15rem" }}>
                                    <img class="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src="https://picsum.photos/800/600?random=4" alt='' />
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