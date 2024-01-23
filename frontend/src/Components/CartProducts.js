import React from "react";

import { BsCheckCircleFill } from "react-icons/bs";

function CartProducts({ product }) {

    return (
        
            
                <div class="card m-2" style={{ width: '13rem', display: 'inline-block' }}>
                    <img src={`${product.image}`}
                        class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{product.title}</h5>

                    </div>
                    <div class="card-footer text-body-secondary">
                        <small className="float-start">Available: <BsCheckCircleFill color="green"/> </small>
                        <small class="h6 text-success float-end">${product.price}</small>
                    </div>
                </div>
            
        
    )
}

export default CartProducts