import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'

import Slider from "react-slick";

import { TrendProducts, ConsoleProducts, LaptopProducts, PcProducts, MobailProducts, CameraProducts } from '../Redux/Slices/ProductSlice';
import { allCategory } from '../Redux/Slices/CategorySlice';

import Navbar from '../Components/Navbar';
import CartProducts from '../Components/CartProducts';
import SliderHeader from '../Components/SliderHeader';
import CartCategorys from '../Components/CartCategory';
import Footer from '../Components/Footer';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function HomePage() {

    const [show, setShow] = useState(true)

    const auth = useSelector(state => state.auth)
    const tendproducts = useSelector(state => state.products.trendProducts)
    const consoleproducts = useSelector(state => state.products.consoleProducts)
    const laptopproducts = useSelector(state => state.products.laptopProducts)
    const pcproducts = useSelector(state => state.products.pcProducts)
    const mobailproducts = useSelector(state => state.products.mobailProducts)
    const cameraproducts = useSelector(state => state.products.cameraProducts)
    const categorys = useSelector(state => state.categorys.categorys)

    const dispatch = useDispatch()

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/products/trend/').then((res) => res.json()).then((data) => dispatch(TrendProducts(data)))
        fetch('http://127.0.0.1:8000/api/products/consoles/').then((res) => res.json()).then((data) => dispatch(ConsoleProducts(data)))
        fetch('http://127.0.0.1:8000/api/products/laptops/').then((res) => res.json()).then((data) => dispatch(LaptopProducts(data)))
        fetch('http://127.0.0.1:8000/api/products/pcs/').then((res) => res.json()).then((data) => dispatch(PcProducts(data)))
        fetch('http://127.0.0.1:8000/api/products/mobails/').then((res) => res.json()).then((data) => dispatch(MobailProducts(data)))
        fetch('http://127.0.0.1:8000/api/products/cameras/').then((res) => res.json()).then((data) => dispatch(CameraProducts(data)))
        fetch('http://127.0.0.1:8000/api/categorys/').then((res) => res.json()).then((data) => dispatch(allCategory(data)))
    }, [])

    const closeAlert = () => {
        setShow(false)
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    }

    return (
        <>
            <Navbar />
            <SliderHeader /> 
            <br />
            <br />

            {categorys && (
                <>
                    <div className="container" style={{textAlign:'center'}}>
                        <div className="row">
                        {categorys.map((category) => (
                            <>
                                <CartCategorys category= {category}/>
                            </>
                        ))}
                        </div>
                    </div>
                </>
            )}

            <div className='container alert shadow-lg' style={{ backgroundColor: '#ffffff' }}>
                <Link to='trends/' style={{textDecoration:'none'}}>
                    <h5 className='float-left' style={{textAlign:'left' , textDecoration:'none'}}>Trends</h5> <hr/>
                </Link>
                {tendproducts ? (
                    <>
                        <Slider {...settings}>
                            {tendproducts.map((product) => (
                                <Link to={`product/${product.id}/`}>
                                    <CartProducts product={product} />
                                </Link>
                            ))}
                        </Slider> <br />
                    </>
                ) : (
                    <>
                        <h2>Loading...</h2>
                    </>
                )}
            </div>

            <div className='container alert shadow-lg' style={{ backgroundColor: '#ffffff' }}>
                <Link to='consoles/' style={{textDecoration:'none'}}>
                    <h5 className='float-left' style={{textAlign:'left' , textDecoration:'none'}}>Consoles</h5> <hr/>
                </Link>
                {consoleproducts && (
                    <>
                        <Slider {...settings}>
                            {consoleproducts.map((product) => (
                                <Link to={`product/${product.id}/`}>
                                    <CartProducts product={product} />
                                </Link>
                            ))}
                        </Slider> <br />
                    </>
                )}
            </div>

            <div className='container alert shadow-lg' style={{ backgroundColor: '#ffffff' }}>
                <Link to='laptops/' style={{textDecoration:'none'}}>
                    <h5 className='float-left' style={{textAlign:'left' , textDecoration:'none'}}>Laptops</h5> <hr/>
                </Link>
                {laptopproducts && (
                    <>
                        <Slider {...settings}>
                            {laptopproducts.map((product) => (
                                <Link to={`product/${product.id}/`}>
                                    <CartProducts product={product} />
                                </Link>
                            ))}
                        </Slider> <br />
                    </>
                )}
            </div>

            <div className='container alert shadow-lg' style={{ backgroundColor: '#ffffff' }}>
                <Link to='pcs/' style={{textDecoration:'none'}}>
                    <h5 className='float-left' style={{textAlign:'left' , textDecoration:'none'}}>Pcs</h5> <hr/>
                </Link>
                {pcproducts && (
                    <>
                        <Slider {...settings}>
                            {pcproducts.map((product) => (
                                <Link to={`product/${product.id}/`}>
                                    <CartProducts product={product} />
                                </Link>
                            ))}
                        </Slider> <br />
                    </>
                )}
            </div>

            <div className='container alert shadow-lg' style={{ backgroundColor: '#ffffff' }}>
                <Link to='mobails/' style={{textDecoration:'none'}}>
                    <h5 className='float-left' style={{textAlign:'left' , textDecoration:'none'}}>Mobails</h5> <hr/>
                </Link>
                {mobailproducts && (
                    <>
                        <Slider {...settings}>
                            {mobailproducts.map((product) => (
                                <Link to={`product/${product.id}/`}>
                                    <CartProducts product={product} />
                                </Link>
                            ))}
                        </Slider> <br />
                    </>
                )}
            </div>

            <div className='container alert shadow-lg' style={{ backgroundColor: '#ffffff' }}>
                <Link to='cameras/' style={{textDecoration:'none'}}>
                    <h5 className='float-left' style={{textAlign:'left' , textDecoration:'none'}}>Cameras</h5> <hr/>
                </Link>

                {cameraproducts && (
                    <>
                        <Slider {...settings}>
                            {cameraproducts.map((product) => (
                                <Link to={`product/${product.id}/`}>
                                    <CartProducts product={product} />
                                </Link>
                            ))}
                        </Slider> <br />
                    </>
                )}
            </div>


            {auth.is_login && (
                <>
                    {show && <div className='alert alert-success fixed-bottom w-25 rounded-3' onClick={closeAlert}>Welcom {auth.accessToken.username}</div>}
                </>
            )}

            <br/>

            <Footer/>
        </>
    )
}

export default HomePage