import React from "react"

import { useDispatch, useSelector } from "react-redux"

import { addCart } from "../Redux/Slices/CartSlice"

import Navbar from "./Navbar"

function CartDetailProduct({ product }) {

    const dispatch = useDispatch()
    const cartt = useSelector(state => state.cart.cart)
    console.log('++++',cartt);

    const addCartHandler = (product_ins) => {
        console.log('=',product_ins);
        dispatch(addCart(product_ins))
    }

    return (
        <>
            <Navbar />
            <div className="card mb-3 mt-3" style={{ maxWidth: '100%' }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`${product.image}`} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title float-start">{product.title}</h5>
                            <p className="card-text float-start">{product.content}</p>
                            <br />
                            <br />
                            <br />
                            <p className="card-text float-start" style={{ display: 'inline-block' }}><small className="text-body-secondary">Categorys : 
                                 <button type="button" className="btn btn-outline-secondary" style={{ padding: 0, width: 100 }}>  {product.category}</button>
                            </small></p>

                            <small className="float-end h6 text-success">${product.price}</small>


                            <button className="btn btn-primary" type="button" style={{marginTop: 3 , width: '100%'}} onClick = {() => addCartHandler(product)}>Add To Cart</button>
                            {/* <form action="" method="post">
                            
                                <input type="number" name="Quantity Add" class="form-control mr-sm-2" />
                                <button className="btn btn-primary" type="submit" style={{marginTop: 3 , width: '100%'}}>Add To Cart</button>
                                    
                            </form> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartDetailProduct