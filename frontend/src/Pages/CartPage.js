import React from "react";

import {useDispatch , useSelector} from 'react-redux'

import TableCart from "../Components/TableCart";

function CartPage(){

    const carts = useSelector(state => state.cart.cart)
    console.log('CART ==========>',carts);

    return(
        <>
            {carts.length ? (
                <>                  
                 <TableCart product={carts}/>                   
                </>
            ) : (
                <>
                    <h3>No Product</h3>
                </>
            )}
        </>
    )
}

export default CartPage