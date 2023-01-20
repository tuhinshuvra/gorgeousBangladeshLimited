import React from "react";
import Data from "./Data";
import './Button.css';

const Buttons = ({ filterItem, setItem, menuItems }) => {
    return (
        <div className="d-flex justify-content-center mb-lg-3">
            {menuItems.map((Val, id) => {
                return (
                    <div className="btn-group" role="group" aria-label="button-show">

                        <button
                            className=" btn btn-outline-primary fw-bold btn-sm"
                            onClick={(hidebutton) => filterItem(Val)}
                            key={id}
                        >{Val}
                        </button>
                    </div>
                );
            })}
            <button id="show_all"
                className="btn btn-outline-primary ms-2 fw-bold"
                onClick={() => setItem(Data)}
            > Show All
            </button>



        </div >
    );
};

export default Buttons;
