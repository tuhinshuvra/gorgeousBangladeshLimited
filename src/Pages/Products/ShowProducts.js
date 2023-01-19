import React from 'react';
import { Link } from 'react-router-dom';

const ShowProducts = ({ product }) => {
    // console.log("products List: ", product);
    return (
        <div >
            <div class="card" style={{ width: "18rem" }}>
                <img src={product.img} class="card-img-top" alt="..." />
                {/* <img src="https://i.ibb.co/pXRXcrW/IT-prodact.png" alt="IT-prodact" border="0"></img> */}
                <div class="card-body">
                    <h5 class="card-title">{product.title}</h5>
                    <Link href="#" class="btn btn-primary">Go somewhere</Link>
                </div>
            </div>
        </div>
    );
};

export default ShowProducts;