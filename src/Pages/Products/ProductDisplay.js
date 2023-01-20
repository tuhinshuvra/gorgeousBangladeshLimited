import React from "react";
import './Product.css'
const ProductDisplay = ({ item }) => {

    return (
        <div className="row">
            <div className="product my-3">
                {item.map((Val) => {
                    return (
                        <div className="  " key={Val.id}>
                            <div className=" col-lg-12 ">
                                <div className="bg-image hover-zoom">
                                    <img src={Val.img} alt={Val.title} className=" img-fluid rounded-4 " />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductDisplay;
