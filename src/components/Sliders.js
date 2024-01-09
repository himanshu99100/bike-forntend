import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from '../assests/img1.jpeg';
import img2 from '../assests/img2.jpeg';
import img3 from '../assests/img3.jpeg';
import img4 from '../assests/img4.jpeg';
import img5 from '../assests/img5.jpg'
const array = [
    {
        id: 1,
        imgsrc: img1,
    },
    {
        id: 2,
        imgsrc: img2,
    },
    {
        id: 3,
        imgsrc: img3,
    },
    {
        id: 4,
        imgsrc: img4,
    },
    {
      id: 5,
      imgsrc: img5,
  },
];
const Sliders = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,  
        speed: 500            
    };

  return (
    <div className="w-80 lg:w-3/4 mx-auto py-4">
    <Slider {...settings}>
      {array.map((d) => (
        <div key={d.id}>
          <img src={d.imgsrc} className="w-full lg:w-3/4 mx-auto" alt="no image" />
        </div>
      ))}
    </Slider>
  </div>
  )
}

export default Sliders;;
