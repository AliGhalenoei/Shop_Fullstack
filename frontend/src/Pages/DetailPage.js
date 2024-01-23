import React, { useEffect, useState } from "react";

import { useParams } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import Slider from "react-slick";

import { addCart } from "../Redux/Slices/CartSlice";

import CartDetailProduct from "../Components/CartDetailProduct";
import CardListPage from "../Components/CardListPage";
import CommentForm from "../Components/CommentForm";
import CartComments from "../Components/CartComments";

function DetailPage() {

    const [product, setProduct] = useState({})
    const [randomProducts, setRandomProducts] = useState([])

    const dispatch = useDispatch()

    const param = useParams()

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/product/${param.pk}/`).then((res) => res.json()).then((data) => setProduct(data))
        fetch(`http://127.0.0.1:8000/api/random/products/`).then((res) => res.json()).then((data) => setRandomProducts(data))
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    }

    return (
        <>
            <CartDetailProduct product={product} /> <br />

            <div className="container">
                <div className="row">
                    {randomProducts && (
                        <>
                            <Slider {...settings}>
                                {randomProducts.map((product) => (
                                    <a key={product.id}>
                                        <CardListPage product={product} />
                                    </a>
                                ))}
                            </Slider>
                        </>
                    )}
                </div>
            </div>
            <br />

            <CommentForm productID={param.pk}/>

            <hr/>

            <CartComments commentID={param.pk}/>
        </>
    )
}

export default DetailPage