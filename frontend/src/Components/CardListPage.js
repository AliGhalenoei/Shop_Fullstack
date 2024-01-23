import React from 'react';

import { BsCheckCircleFill } from "react-icons/bs";

function CardListPage({ product }) {

    return (
        <>



            <a href={`product/${product.id}/`} className="col-md-5 col-lg-3 col-sm-12 mt-1 p-1" style={{ display: 'inline-block', width: 'auto' }}>
                <div className="card  col-md-5 col-lg-3 col-sm-12 mt-1 p-1"
                    style={{ display: 'inline-block', width: '13rem', marginLeft: 1 }}>
                    <img src={`${product.image}`}
                        className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                    </div>
                    <div className="card-footer text-body-secondary">
                        <small>Available: <BsCheckCircleFill /> </small>
                        <small className="h6 text-success float-end">${product.price}</small>
                    </div>
                </div>
            </a>



        </>
    )
}

export default CardListPage