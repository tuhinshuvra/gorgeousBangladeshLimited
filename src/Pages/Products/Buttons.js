import React from "react";
import Data from "./Data";

const Buttons = ({ filterItem, setItem, menuItems }) => {
    return (
        <>
            <div className="d-flex">
                {menuItems.map((Val, id) => {
                    return (
                        <div class="btn-group" role="group" aria-label="Basic outlined example">

                            <button
                                className="btn btn-outline-primary mx-1"
                                onClick={() => filterItem(Val)}
                                key={id}
                            >{Val}
                            </button>
                        </div>
                    );
                })}
                <button
                    className="btn btn-outline-primary mx-4"
                    onClick={() => setItem(Data)}
                > All
                </button>
            </div>
        </>
    );
};

export default Buttons;
