import React from "react";
import ProductList from "./ProductList";
import './Button.css';

const Buttons = ({ filterItem, setItem, menuItems }) => {
    return (
        <div className="button_grid d-lg-flex justify-content-center mb-lg-3 product_button-area">
            {menuItems.map((Val, id) => {
                return (
                    <div className="" role="group" aria-label="button-show">

                        <button
                            className="product_button"
                            onClick={(hidebutton) => filterItem(Val)}
                            key={id}
                        >{Val}
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
