import React from "react";
import ProductList from "./ProductList";
import './Button.css';
import { Button, ButtonGroup } from "react-bootstrap";

const Buttons = ({ filterItem, setItem, menuItems }) => {
    return (
        <div className="d-flex justify-content-center mb-lg-3">
            {menuItems.map((Val, id) => {
                return (
                    <div className="btn-group" role="group" aria-label="button-show">

                        <button
                            className=" btn btn-outline-success fw-bold btn-sm rounded-pill "
                            onClick={(hidebutton) => filterItem(Val)}
                            key={id}
                        >{Val}
                        </button>

                        {/* <ButtonGroup variant="outlined" aria-label="outlined button group">
                            <Button
                                className=" btn btn-outline-primary fw-bold btn-sm"
                                onClick={(hidebutton) => filterItem(Val)}
                                key={id}
                            >{Val}
                            </Button>
                        </ButtonGroup> */}
                    </div>
                );
            })}
            <button id="show_all"
                className="btn btn-outline-success rounded-pill ms-2 fw-bold"
                onClick={() => setItem(ProductList)}
            > Show All
            </button>



        </div >
    );
};

export default Buttons;
