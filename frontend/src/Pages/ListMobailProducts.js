import React, { useEffect } from "react";

import { useDispatch, useSelector } from 'react-redux'

import { MobailProducts } from '../Redux/Slices/ProductSlice';

import CardListPage from "../Components/CardListPage";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

function ListMobailProducts() {

    const productss = useSelector(state => state.products.mobailProducts)
    const dispath = useDispatch()
    

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/products/mobails/').then((res) => res.json()).then((data) => dispath(MobailProducts(data)))
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

export default ListMobailProducts