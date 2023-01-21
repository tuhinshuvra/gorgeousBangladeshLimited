import React from "react";
import { Link } from "react-router-dom";
import './Product.css'

const ProductDisplay = ({ item }) => {

    return (
        <div>
            <div className="row">
                <div className="product my-3">
                    {item.map((Val) => {
                        return (
                            <div className="  " key={Val.id}>
                                <div className=" col-lg-12 wrapper  "
                                    title={Val.title}
                                >
                                    <div className="bg-image image-wrapper">
                                        <img src={Val.img} alt={Val.title} className=" img-fluid rounded-4 " />
                                        <Link to="/category_details">
                                            {/* <CatrgoryDetails
                                            >
                                                details={Val.title}
                                            </CatrgoryDetails> */}
                                        </Link>

                                        <h6 class="title">{Val.title}</h6>
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
