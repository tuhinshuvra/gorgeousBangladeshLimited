import React from "react";
import './ProductDisplay.css'

const ProductDisplay = ({ item }) => {

    return (
        <div className=" col-lg-10 mx-auto">
            <div className="row">
                <div className="product my-3">
                    {item.map((product, index) => {
                        return (
                            <div className="" key={index} >
                                <div className="wrapper" >
                                    <div className="bg-image image-wrapper" data-aos="flip-left">
                                        <img src={product.img} alt={product.title} className=" img-fluid rounded-5 " />
                                        <p className="title">{product.title}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProductDisplay;
