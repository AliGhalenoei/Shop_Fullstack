import React from "react";

import { useDispatch } from "react-redux";

import { clearCart } from "../Redux/Slices/CartSlice";

function TableCart({ product }) {

    const dispatch = useDispatch()

    const btnClearCart = () => {
        dispatch(clearCart())
    }

    let totalPrice = 0
    

    for(let i = 0; i < product.length; i++){
        totalPrice += product[i].price
    }
    
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">name</th>
                        <th scope="col">price</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((p) => (
                        <>
                            <tr>
                                <th scope="row">1</th>
                                <td> <img src={`${p.image}`} style={{width:50}}/> </td>
                                <td>{p.title}</td>
                                <td>{p.price}</td>
                            </tr>
                        </>
                    ))}
                            <tr>                                
                                <th colSpan={4}>Total : ${totalPrice} </th>
                            </tr>

                            <tr>                                
                                <th colSpan={4}> <button className="btn btn-danger w-100" type="button" onClick={btnClearCart}>Clear</button> </th>
                            </tr>
                </tbody>
            </table>
        </>
    )
}

export default TableCart
