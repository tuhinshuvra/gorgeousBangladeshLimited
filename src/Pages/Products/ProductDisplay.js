import React from "react";
import './ProductDisplay.css'

const ProductDisplay = ({ item }) => {

    return (
        <div className=" col-lg-10 mx-auto">
            <div className="row">
                <div className="product my-3">
                    {item.map((Val) => {
                        return (
                            <div className="" key={Val.id}>
                                <div className="wrapper" title={Val.title}>
                                    <div className="bg-image image-wrapper">
                                        <img src={Val.img} alt={Val.title} className=" img-fluid rounded-5 " />
                                        <p className="title">{Val.title}</p>
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
