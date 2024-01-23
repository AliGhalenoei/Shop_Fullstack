import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

import { GrContact } from "react-icons/gr";
import { FaCartShopping } from "react-icons/fa6";

import { logout } from '../Redux/Slices/AuthSlice';

function Navbar() {

    const auth = useSelector(state => state.auth)
    const cart = useSelector(state => state.cart.cart)
    console.log(cart.length);
    const dispatch = useDispatch()

    useEffect(() => {

    }, [])

    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light bg-light p-3">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ">

                        <Link to='cart/' style={{textDecoration:'none'}}>
                            <li className="nav-item ml-5 active position-relative" style={{ marginLeft: 7 }} >
                                <FaCartShopping size='2em' />
                                <span class="badge text-bg-danger" style={{borderRadius:'50%' , width:20 , position:'relative' , top:-10}}> {cart.length} </span>
                            </li>
                        </Link>
                    </ul>
                </div>
            </nav>

            <nav className="nav fixed-bottom p-3 shadow-sm" style={{ width: 80, borderRadius: '50%' }}>
                <li className="nav-item"> <Link to='contact'>  <GrContact size='lg' /> </Link> </li>
            </nav>
        </>
    )
}

export default Navbar


