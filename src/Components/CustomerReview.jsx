import React from "react";
import Slider from "react-slick";
import foodtray from "../assets/foodtray.jpg";
import '../index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    rating: 5,
    text: "Was worth the wait! Could smell and taste the food before opening the box. Myself and the family really enjoyed it. Well done!",
  },
  {
    rating: 5,
    text: "From the food to the customer service, everything was stellar! I loved the entire experience and can't wait to be in town to order some more!",
  },
  {
    rating: 5,
    text: "Food tasted very fresh, it was obvious that ingredients of high quality were used. It was very well seasoned and an overall great food experience!",
  },
];

const CustomerReview = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    arrows: false, 
    responsive: [
      {
        breakpoint: 1024,  
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,  
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div 
        className="py-12 px-6 relative bg-cover bg-center h-80" 
        style={{ backgroundImage: `url(${foodtray})` }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="max-w-6xl mx-auto relative">
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div key={index} className="p-4">
                <div className="p-6 rounded-lg shadow-lg relative h-64"
                     style={{
                        textAlign: 'left',
                        padding: '1px 9px',   
                        margin: 'auto',
                        position: 'relative',
                        maxHeight: '400px',
                        overflow: 'hidden',
                        color: 'white',
                      }}>
                  <div className="absolute top-0 left-0 w-9 h-full bg-brown-700 rounded-lg -z-10 translate-x-2 translate-y-2"></div>
                  <div className="flex mb-2 ml-3">
                    {Array(review.rating)
                      .fill("★")
                      .map((star, i) => (
                        <span key={i} className="text-[#0b7649] mt-2 text-lg">
                          {star}
                        </span>
                      ))}
                  </div>
                  <p className="text-lg whitespace-normal font-bold px-8" style={{ lineHeight: "1.2", wordSpacing: "3px" }}>
                    {review.text}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
