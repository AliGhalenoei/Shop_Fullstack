import React from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



function SliderHeader() {

    const imgData = [
        {img:'images/laptop_header.webp'},
        {img:'images/mobail_header.webp'},
        {img:'images/pc+header.webp'},
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div className="container alert shadow-lg" style={{backgroundColor:'#ffffff' , textAlign:'center'}}>
            <Slider {...settings}>
                {imgData.map((i) => (
                    <img src={`${i.img}`} alt="" class="img-fluid" />
                ))}
            </Slider>
        </div>
    )
}

export default SliderHeader