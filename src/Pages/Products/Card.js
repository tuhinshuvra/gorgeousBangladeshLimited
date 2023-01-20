import React from "react";
import './Product.css'
const Card = ({ item }) => {

    return (
        <>
            <div className="">
                <div className="row">
                    <div className="product my-3">

                        {item.map((Val) => {
                            return (
                                <div className="  " key={Val.id}>
                                    <div className=" col-lg-12 ">
                                        <div className="">
                                            <img src={Val.img} alt={Val.title} className=" img-fluid rounded-4 " />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
