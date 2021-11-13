import React from 'react';
import Slider from "react-slick";

const reviews = [
  {
    "_id": "111",
    "reviewName": "Rudra",
    "reviewProfile": "https://i.postimg.cc/0278pWts/people-1.png",
    "reviewEmail": "rudra@gmail.com",
    "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
  },
  {
    "_id": "112",
    "reviewName": "Rimon",
    "reviewProfile": "https://i.postimg.cc/RZ9vG78n/people-2.png",
    "reviewEmail": "rimon.imam@gmail.com",
    "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
  },
  {
    "_id": "113",
    "reviewName": "Emon",
    "reviewProfile": "https://i.postimg.cc/DwgnNWkp/people-3.png",
    "reviewEmail": "rimon.yahoo.com",
    "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
  },
  {
    "_id": "114",
    "reviewName": "Ritu",
    "reviewProfile": "https://i.postimg.cc/RZ9vG78n/people-2.png",
    "reviewEmail": "ritu.yahoo.com",
    "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
  },
  {
    "_id": "115",
    "reviewName": "Ritu",
    "reviewProfile": "https://i.postimg.cc/DwgnNWkp/people-3.png",
    "reviewEmail": "ritu.gmail.com",
    "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
  },
  {
    "_id": "116",
    "reviewName": "Ritu",
    "reviewProfile": "https://i.postimg.cc/DwgnNWkp/people-3.png",
    "reviewEmail": "ritu.gmail.com",
    "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
  },
  {
    "_id": "117",
    "reviewName": "Ritu",
    "reviewProfile": "https://i.postimg.cc/DwgnNWkp/people-3.png",
    "reviewEmail": "ritu.gmail.com",
    "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
  },
  {
    "_id": "118",
    "reviewName": "Ritu",
    "reviewProfile": "https://i.postimg.cc/DwgnNWkp/people-3.png",
    "reviewEmail": "ritu.gmail.com",
    "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
  },
  {
    "_id": "119",
    "reviewName": "Ritu",
    "reviewProfile": "https://i.postimg.cc/DwgnNWkp/people-3.png",
    "reviewEmail": "ritu.gmail.com",
    "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
  },
  {
    "_id": "120",
    "reviewName": "Ritu",
    "reviewProfile": "https://i.postimg.cc/DwgnNWkp/people-3.png",
    "reviewEmail": "ritu.gmail.com",
    "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
  },
  {
    "_id": "121",
    "reviewName": "Ritu",
    "reviewProfile": "https://i.postimg.cc/DwgnNWkp/people-3.png",
    "reviewEmail": "ritu.gmail.com",
    "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
  },
  {
    "_id": "122",
    "reviewName": "Ritu",
    "reviewProfile": "https://i.postimg.cc/DwgnNWkp/people-3.png",
    "reviewEmail": "ritu.gmail.com",
    "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
  },
  {
    "_id": "123",
    "reviewName": "Ritu",
    "reviewProfile": "https://i.postimg.cc/DwgnNWkp/people-3.png",
    "reviewEmail": "ritu.gmail.com",
    "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
  },
  {
    "_id": "124",
    "reviewName": "Ritu",
    "reviewProfile": "https://i.postimg.cc/DwgnNWkp/people-3.png",
    "reviewEmail": "ritu.gmail.com",
    "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
  },
  {
    "_id": "125",
    "reviewName": "Ritu",
    "reviewProfile": "https://i.postimg.cc/DwgnNWkp/people-3.png",
    "reviewEmail": "ritu.gmail.com",
    "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
  },
  {
    "_id": "126",
    "reviewName": "Ritu",
    "reviewProfile": "https://i.postimg.cc/DwgnNWkp/people-3.png",
    "reviewEmail": "ritu.gmail.com",
    "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
  },
  {
    "_id": "127",
    "reviewName": "Ritu",
    "reviewProfile": "https://i.postimg.cc/DwgnNWkp/people-3.png",
    "reviewEmail": "ritu.gmail.com",
    "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
  },
  {
    "_id": "128",
    "reviewName": "Ritu",
    "reviewProfile": "https://i.postimg.cc/DwgnNWkp/people-3.png",
    "reviewEmail": "ritu.gmail.com",
    "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
  },
  {
    "_id": "128",
    "reviewName": "Ritu",
    "reviewProfile": "https://i.postimg.cc/DwgnNWkp/people-3.png",
    "reviewEmail": "ritu.gmail.com",
    "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
  },
  {
    "_id": "129",
    "reviewName": "Ritu",
    "reviewProfile": "https://i.postimg.cc/DwgnNWkp/people-3.png",
    "reviewEmail": "ritu.gmail.com",
    "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
  },
  {
    "_id": "130",
    "reviewName": "Ritu",
    "reviewProfile": "https://i.postimg.cc/DwgnNWkp/people-3.png",
    "reviewEmail": "ritu.gmail.com",
    "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
  },
  {
    "_id": "131",
    "reviewName": "Ritu",
    "reviewProfile": "https://i.postimg.cc/DwgnNWkp/people-3.png",
    "reviewEmail": "ritu.gmail.com",
    "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
  }
]
var settings = {
  dots: true,
  infinite: false,
  // centerMode: true,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
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

const Reviews = () => {
  return (
    <div className="container">
      <h2 className="mt-5 mb-3">Testimonials</h2>
      <Slider {...settings}>
        {reviews.map(review =>
          // <div className="col-lg-4 col-12" key={review._id}>
          //   <div className="card mb-3" style={{ maxWidth: '540px' }}>
          //     <div className="row g-0">
          //       <div className="col-md-4">
          //         <img src={review.reviewProfile} className="img-fluid rounded-start" alt="..." />
          //       </div>
          //       <div className="col-md-8">
          //         <div className="card-body">
          //           <h5 className="card-title">{review.reviewName}</h5>
          //           <p className="card-text tex-start">{review.review}</p>
          //         </div>
          //       </div>
          //     </div>
          //   </div>
          // </div>)}
          <div className="col-lg-6 col-md-6 p-5" key={review._id}>
            <div className=" d-flex align-items-center">
              <img src={review.reviewProfile} alt="" />
              <div className="customer-info ms-4">
                <h5>{review.reviewName}</h5>
                <span>CEO, facebook</span>
              </div>
            </div>
            <p className="mt-3 text-start">Janen The standard chunk of Lorem Ipsum used since reproduced below for those interested awesome design i love it so much for being awesome and great.</p>
          </div>)}
      </Slider>
    </div>
  );
};

export default Reviews;


/*


*/