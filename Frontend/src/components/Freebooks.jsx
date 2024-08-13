import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import list from '../../public/list.json'
import Cards from './Cards';
import axios from 'axios';

const Freebooks = () => {
  const [book , setBook] = useState([])

  useEffect(
    ()=>{
    const getbook = async()=>{
      try {
     const res =  await axios.get("http://localhost:4041/book");
     console.log(res.data);
     setBook(res.data.filter(
      (data) => data.category === "Free"
  ))
      } catch (error) {
        console.log(error);
        
      }
    }
    getbook();
    }, []
  )
  

const filterData = book.filter(
    (data) => data.category === "Free"
)
var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

    
  return (
    <>
      <div className='max-w-screen-2xl container max-auto md:px-20 px-4'>
       <div>
       <h1 className='font-semibold  text-xl  pb-2'>Frees Offered books !</h1>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non omnis minus vero ipsum libero porro!</p>
       </div>
     
      <div className="slider-container">
      <Slider {...settings}>
   {filterData.map((item
   )=>(
    <Cards  item={item} key={item.id} />
   ))}
      </Slider>
    </div>
      </div>
    </>
  )
}

export default Freebooks
