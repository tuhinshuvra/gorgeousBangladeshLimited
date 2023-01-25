import React from "react";
import ProductList from "./ProductList";
import { Button, ButtonGroup } from "react-bootstrap";
import './Button.css';

const Buttons = ({ filterItem, setItem, menuItems }) => {
    return (
        <div className="d-flex justify-content-center mb-lg-3 product_button-area">
            {menuItems.map((Val, id) => {
                return (
                    <div className="" role="group" aria-label="button-show">

                        <button
                            className="product_button"
                            onClick={(hidebutton) => filterItem(Val)}
                            key={id}
                        >{Val}
                        </button>

                        {/* <ButtonGroup variant="outlined" aria-label="outlined button group">
                            <Button
                                className=" btn btn-outline-success text-white fw-bold btn-sm"
                                onClick={(hidebutton) => filterItem(Val)}
                                key={id}
                            >{Val}
                            </Button>
                        </ButtonGroup> */}
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
