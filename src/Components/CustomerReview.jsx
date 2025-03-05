import React from "react";
import Slider from "react-slick";
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
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Medium screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-green-900 text-white py-12 px-6">
      <h2 className="text-center text-3xl font-bold mb-6 relative ">CUSTOMER REVIEWS
        <span className="absolute md:left-0 left-0 top-1/2 transform -translate-y-1/2 w-1/8 md:w-1/3 h-1 bg-yellow-500"></span>
        {/* Bottom line */}
        <span className="absolute md:right-0 right-5 top-1/2 transform -translate-y-1/2 w-1/10 md:w-1/3 h-1 bg-yellow-500"></span>
      </h2>
      <div className="max-w-6xl mx-auto">
  <Slider {...settings}>
    {reviews.map((review, index) => (
      <div key={index} className="p-4">
        <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg relative h-64" 
             style={{
               textAlign: 'left',
               backgroundColor: '#b8860b',
               color: 'white',
               padding: '20px',
               borderRadius: '20px',
               width: '350px',
               height: 'fit-content',
               margin: '15px',
               position: 'relative',
               boxShadow: '10px -2px 1px #5e3a0a',
               maxHeight: '400px',
               overflow: 'hidden',
               fontSize: '14px'
             }}>
          <div className="absolute top-0 left-0 w-90 h-full bg-brown-900 rounded-lg -z-10 translate-x-2 translate-y-2"></div>
          <div className="flex mb-2">
            {Array(review.rating)
              .fill("★")
              .map((star, i) => (
                <span key={i} className="text-green-900 text-lg">
                  {star}
                </span>
              ))}
          </div>
          <p className="text-lg text-justify">{review.text}</p>
        </div>
      </div>
    ))}
  </Slider>
</div>

    </div>
  );
};

export default CustomerReview;
