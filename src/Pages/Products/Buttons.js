import React from "react";
import ProductList from "./ProductList";
import './Button.css';

const Buttons = ({ filterItem, setItem, menuItems }) => {
    return (
        <div className="button_grid d-lg-flex justify-content-center mb-lg-3 product_button-area " data-aos="flip-right">
            {menuItems.map((menu, index) => {
                return (
                    <div className="" role="group" aria-label="button-show">
                        {/* {console.log("Button index :", index)} */}

                        <button
                            key={index}
                            className="product_button"
                            onClick={(hidebutton) => filterItem(menu)}
                        >{menu}
                        </button>
                    </div>
                );
            })}
            <button
                className="show_all"
                id="show_all"
                onClick={() => setItem(ProductList)}
            > Show All
            </button>



        </div >
    );
};

export default Buttons;
