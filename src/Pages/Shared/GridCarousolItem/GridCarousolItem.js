import React from 'react';
import './GridCarousolItem.css';

const GridCarousolItem = ({ imgOne, imgTwo, imgThree, imgFour, imgFive, imgSix }) => {
    return (
        <div className="row ">

            <div className="col-xl-2 col-lg-3 col-md-4 col-6  " data-aos="flip-left">
                <div className="card mb-4 mx-md-0 ">
                    <img className="card-img-top carosolImg mx-auto img-fluid " src={imgOne} alt="Card_image_cap" />
                </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-md-4 col-6" data-aos="flip-right" >
                <div className="card mb-4 mx-md-0 ">
                    <img className="card-img-top carosolImg mx-auto img-fluid " src={imgTwo} alt="Card_image_cap" />
                </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-md-4 col-6   clearfix d-none d-md-block" data-aos="flip-left">
                <div className="card mb-4 mx-md-0 ">
                    <img className="card-img-top carosolImg mx-auto img-fluid " src={imgThree} alt="Card_image_cap" />
                </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-md-4 col-6   clearfix d-none d-lg-block" data-aos="flip-right">
                <div className="card mb-4 mx-md-0 ">
                    <img className="card-img-top carosolImg mx-auto img-fluid " src={imgFour} alt="Card_image_cap" />
                </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-md-4 col-6   clearfix d-none d-xl-block" data-aos="flip-left">
                <div className="card mb-4 mx-md-0 ">
                    <img className="card-img-top carosolImg mx-auto img-fluid " src={imgFive} alt="Card_image_cap" />
                </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-md-4 col-6   clearfix d-none d-xl-block" data-aos="flip-right">
                <div className="card mb-4 mx-md-0 ">
                    <img className="card-img-top carosolImg mx-auto img-fluid " src={imgSix} alt="Card_image_cap" />
                </div>
            </div>

        </div>

    );
};

export default GridCarousolItem;