import React from 'react';
import './Content.css';
import {AiFillPlayCircle} from 'react-icons/ai';
import { useRef } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const movies = [
    'https://www.themoviedb.org/t/p/w220_and_h330_face/gFQvwir8Ev4PZBx2YdT5uURpQit.jpg',
    "https://www.themoviedb.org/t/p/w220_and_h330_face/aoc5hDig2is0MNBQS3vTFwg1Loe.jpg",
    'https://www.themoviedb.org/t/p/w220_and_h330_face/xeg0UhMmzSalvyK7kvhTHcKXIf8.jpg',
    'https://www.themoviedb.org/t/p/w220_and_h330_face/cjb9NXJvisfh5fmgX9rerxZfFrJ.jpg',
    'https://www.themoviedb.org/t/p/w220_and_h330_face/ovMxUPSSuvBD7GcgdQxzbJfsR8q.jpg',
    'https://www.themoviedb.org/t/p/w220_and_h330_face/gjp14ZxpZZLyz7hvKPeJgXbRQuX.jpg',
    'https://www.themoviedb.org/t/p/w220_and_h330_face/ou5W1h1xAEIPMEWWCmGldN4CpnC.jpg',
    'https://www.themoviedb.org/t/p/w220_and_h330_face/3TNU7R7ggWCVCgjBfia0Xns3vqO.jpg',
    
];

function Content(props){
    const sliderRef = useRef()
    const movieRef = useRef()

    const handleScrollRight = () => {

    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
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
        <div className="content">
        <h1>PHIM ĐỀ CỬ </h1>
        {/* <div className="content_element" {...settings}> */}
        <Slider {...settings}>

        { 
            movies.map((movie, index) => (
                <div className="content_item" key={index}>
                    <img src={movie} alt="images" />
                    < AiFillPlayCircle className ="content_item-play"/>
                    <div className="content_text">Movie phim</div>
                </div>
            ))
        }
        </Slider>
        {/* </div> */}
        {/* <div className="btn_left">
        <BsChevronCompactLeft className='btn_left-svg'/>
        </div>
        <div className="btn_right" onClick={handleScrollRight}>
        <BsChevronCompactRight className='btn_right-svg'/>
        </div> */}
     </div>
    )
}
export default Content;