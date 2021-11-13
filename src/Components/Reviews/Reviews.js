import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import Rating from 'react-rating'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", borderRadius: '50%' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", borderRadius: '50%' }}
      onClick={onClick}
    />
  );
}

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
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

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('https://floating-brook-78748.herokuapp.com/reviews')
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch((e) => { })
  }, [])

  return (
    <div className="container">
      <h2 className="mt-5 mb-3">Testimonials</h2>
      <Slider {...settings}>
        {reviews.map(review =>
          <div className="py-5 px-2 px-lg-5" key={review._id}>
            <div className="">
              {/* <img src={review.reviewProfile} alt="" /> */}
              <div className="">
                <h5 className="text-start">{review?.name}</h5>
              </div>
              <p className="mt-3 text-start">{review?.comment}</p>
              <div className="text-start">
                <Rating initialRating={review.rating} className="text-warning" emptySymbol="far fa-star fa-2x" fullSymbol="fas fa-star fa-2x" readonly></Rating>
              </div>
            </div>
          </div>)}
      </Slider>
    </div>
  );
};

export default Reviews;