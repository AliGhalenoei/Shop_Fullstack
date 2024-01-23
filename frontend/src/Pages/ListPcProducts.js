import React, { useEffect } from "react";

import { useDispatch, useSelector } from 'react-redux'

import { PcProducts } from '../Redux/Slices/ProductSlice';

import CardListPage from "../Components/CardListPage";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

function ListPcProducts() {

    const productss = useSelector(state => state.products.pcProducts)
    const dispath = useDispatch()


    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/products/pcs/').then((res) => res.json()).then((data) => dispath(PcProducts(data)))
    }, [])

    return (
        <>
            <Navbar />

            {productss && (
                <>
                    <div className="container">
                        <div className="row" style={{ justifyContent: 'center' }}>
                            {productss.map((i) => (

                                <CardListPage product={i} />

                            ))}
                        </div>
                    </div>
                </>
            )}

        </>
    )
}

export default ListPcProducts