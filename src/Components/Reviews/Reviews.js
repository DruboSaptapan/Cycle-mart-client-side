import React from 'react';
import Slider from "react-slick";

const reviews = [
  {
    "_id": "111",
    "reviewName": "Rudra",
    "reviewEmail": "rudra@gmail.com",
    "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
  },
  {
    "_id": "112",
    "reviewName": "Rimon",
    "reviewEmail": "rimon.imam@gmail.com",
    "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
  },
  {
    "_id": "113",
    "reviewName": "Emon",
    "reviewEmail": "rimon.yahoo.com",
    "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
  },
  {
    "_id": "114",
    "reviewName": "Ritu",
    "reviewEmail": "ritu.yahoo.com",
    "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
  },
  {
    "_id": "115",
    "reviewName": "Ritu",
    "reviewEmail": "ritu.gmail.com",
    "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
  }
]
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Reviews = () => {
  return (
    <div className="container">
      <h2 className="mt-5 mb-3">Testimonials</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {reviews.map(review =>
          <div className="col-lg-4 col-12" key={review._id}>
            <Slider {...settings}>
              <div className="card mb-3" style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    {/* <img src="..." className="img-fluid rounded-start" alt="..."/> */}
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{review.reviewName}</h5>
                      <p className="card-text tex-start">{review.review}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>)}
      </div>
    </div>
  );
};

export default Reviews;