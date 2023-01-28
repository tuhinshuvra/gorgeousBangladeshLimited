import React from 'react';
import './test.css';
import ImageOne from '../../assets/images/products/cloth.png';
import ImageTwo from '../../assets/images/products/cloth2.png';

const Test = () => {
    return (
        <div>
            {/* <link href="https://fonts.googleapis.com/css?family=Play" rel="stylesheet" /> */}

            <div className='col-lg-12'>
                <div className='row'>
                    <div className=' col-lg-6 slide-left'>
                        <img className=' img-fluid' src={ImageOne} alt="" />
                    </div>

                    {/* <div className="line fade-in"></div> */}
                    <div className=' col-lg-6 slide-right'>
                        <img className=' img-fluid' src={ImageTwo} alt="" />

                    </div>
                </div>


                {/* <div className="slide-right">
                    <p><strong>Slide To Right, This works too!</strong></p>
                </div>


                <div className="slide-left">
                    <p><em>Slide to Left, Yay now this works!</em></p>
                </div> */}

            </div>
        </div>
    );
};

export default Test;