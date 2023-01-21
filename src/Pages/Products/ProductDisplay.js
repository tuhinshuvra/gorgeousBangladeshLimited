import React from "react";
import './Product.css'
import { Link } from "react-router-dom";
const ProductDisplay = ({ item }) => {



    return (

        <div>
            <div className="row">
                <div className="product my-3">
                    {item.map((Val) => {
                        return (
                            <div className="  " key={Val.id}>
                                <div className=" col-lg-12 wrapper "
                                    title={Val.title}
                                >
                                    <div className="bg-image image-wrapper">
                                        <Link to="/category_details">  <img src={Val.img} alt={Val.title} className=" img-fluid rounded-4 " />
                                            {/* <CatrgoryDetails
                                            >
                                                details={Val.title}
                                            </CatrgoryDetails> */}
                                        </Link>
                                        {/* <div class="title">{Val.title}</div> */}
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
