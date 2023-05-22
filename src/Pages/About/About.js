import React from 'react';
import MissionImage from '../../assets/images/mission_vission/misssion.jpg';
import VissionImage from '../../assets/images/mission_vission/vission.jpg';
import '../Hero/Hero.css';

const About = () => {
    return (
        <div>
            <div className='about_bg  d-flex justify-content-center align-items-center'>
                <div className=" col-10">
                    <div className=" mx-auto my-5 ">
                        <div className='row flex-lg-row-reverse p-lg-0 ps-md-5'>
                            <div className=' col-lg-6   '>
                                <img className=' about_img rounded-5 shadow shadow-lg' src={MissionImage} alt="" />
                            </div>
                            <div className=' col-lg-6  d-flex flex-column justify-content-center align-content-center'>
                                <h2 className=' fw-bold text-success mt-4 '>Our Vision</h2>
                                <p className=' text'>
                                    Our vision is to cause Bangladesh pace with the developed countries of the world by participating in the far-flung,
                                    sustainable and visionary development activities both at national and international levels. <br /> <br />
                                    In this era of open market economy and digitalization, Gorgeous Bangladesh Limited, by its timely initiatives, shall Endeavour to lead Bangladesh
                                    towards a respectable social standing and reputation. Elimination of poverty and unemployment-a coveted norm for all other third world
                                    countries is one of the topmost priorities of Gorgeous Bangladesh Limited-one of the most committed business enterprises of Bangladesh.
                                </p>
                            </div>
                        </div>

                        <div className=' mt-5'>
                            <div className='row'>
                                <div className='col-lg-6 mx-auto '>
                                    <img className=' about_img rounded-5 shadow shadow-lg mb-3' src={VissionImage} alt="" />
                                </div>
                                <div className='col-lg-6 mt-sm-3 mt-lg-0  d-flex flex-column justify-content-center align-content-center'>
                                    <h2 className=' fw-bold text-success '>Our Mission</h2>
                                    <p>
                                        Our business enterprise aims at overall development of Bangladesh by undertaking entrepreneurship in multiple nation building ventures.
                                        Gorgeous Bangladesh Limited has been working relentlessly in the fields of: Cement & Clinker, Construction, Marketing, Chemical & Fertilizer, International Trade, Electrical & Electronics, Fashion & Design, Mining, Hotel & Resorts, Tours & Travels, Tv & News Paper,
                                        Media &Events, Logistic & Transport, Developers & Real-Estate, Aviation, and Foundation (NGO) with a view to contributing to the ongoing development of the country.
                                        <br /> <br />
                                        Our mission is, among others, to make employment opportunities, to eliminate poverty, contributing for enhancing infrastructures at national level and finally to lead Bangladesh towards development and prosperity.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;