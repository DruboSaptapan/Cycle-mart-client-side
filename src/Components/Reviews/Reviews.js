import React, { useEffect, useState } from 'react';
import Slider from "react-slick";

// const reviews = [
//   {
//     "_id": "111",
//     "reviewName": "Rudra",
//     "reviewProfile": "https://i.postimg.cc/0278pWts/people-1.png",
//     "reviewEmail": "rudra@gmail.com",
//     "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
//   },
//   {
//     "_id": "112",
//     "reviewName": "Rimon",
//     "reviewProfile": "https://i.postimg.cc/RZ9vG78n/people-2.png",
//     "reviewEmail": "rimon.imam@gmail.com",
//     "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
//   },
//   {
//     "_id": "113",
//     "reviewName": "Emon",
//     "reviewProfile": "https://i.postimg.cc/DwgnNWkp/people-3.png",
//     "reviewEmail": "rimon.yahoo.com",
//     "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
//   },
//   {
//     "_id": "114",
//     "reviewName": "Ritu",
//     "reviewProfile": "https://i.postimg.cc/RZ9vG78n/people-2.png",
//     "reviewEmail": "ritu.yahoo.com",
//     "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
//   },
//   {
//     "_id": "115",
//     "reviewName": "Ritu",
//     "reviewProfile": "https://i.postimg.cc/DwgnNWkp/people-3.png",
//     "reviewEmail": "ritu.gmail.com",
//     "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
//   },
//   {
//     "_id": "116",
//     "reviewName": "Ritu",
//     "reviewProfile": "https://i.postimg.cc/DwgnNWkp/people-3.png",
//     "reviewEmail": "ritu.gmail.com",
//     "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
//   },
//   {
//     "_id": "117",
//     "reviewName": "Ritu",
//     "reviewProfile": "https://i.postimg.cc/DwgnNWkp/people-3.png",
//     "reviewEmail": "ritu.gmail.com",
//     "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
//   },
//   {
//     "_id": "118",
//     "reviewName": "Ritu",
//     "reviewProfile": "https://i.postimg.cc/DwgnNWkp/people-3.png",
//     "reviewEmail": "ritu.gmail.com",
//     "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
//   },
//   {
//     "_id": "119",
//     "reviewName": "Ritu",
//     "reviewProfile": "https://i.postimg.cc/DwgnNWkp/people-3.png",
//     "reviewEmail": "ritu.gmail.com",
//     "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
//   },
//   {
//     "_id": "120",
//     "reviewName": "Ritu",
//     "reviewProfile": "https://i.postimg.cc/DwgnNWkp/people-3.png",
//     "reviewEmail": "ritu.gmail.com",
//     "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
//   },
//   {
//     "_id": "121",
//     "reviewName": "Ritu",
//     "reviewProfile": "https://i.postimg.cc/DwgnNWkp/people-3.png",
//     "reviewEmail": "ritu.gmail.com",
//     "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
//   },
//   {
//     "_id": "122",
//     "reviewName": "Ritu",
//     "reviewProfile": "https://i.postimg.cc/DwgnNWkp/people-3.png",
//     "reviewEmail": "ritu.gmail.com",
//     "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
//   },
//   {
//     "_id": "123",
//     "reviewName": "Ritu",
//     "reviewProfile": "https://i.postimg.cc/DwgnNWkp/people-3.png",
//     "reviewEmail": "ritu.gmail.com",
//     "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
//   },
//   {
//     "_id": "124",
//     "reviewName": "Ritu",
//     "reviewProfile": "https://i.postimg.cc/DwgnNWkp/people-3.png",
//     "reviewEmail": "ritu.gmail.com",
//     "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
//   },
//   {
//     "_id": "125",
//     "reviewName": "Ritu",
//     "reviewProfile": "https://i.postimg.cc/DwgnNWkp/people-3.png",
//     "reviewEmail": "ritu.gmail.com",
//     "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
//   },
//   {
//     "_id": "126",
//     "reviewName": "Ritu",
//     "reviewProfile": "https://i.postimg.cc/DwgnNWkp/people-3.png",
//     "reviewEmail": "ritu.gmail.com",
//     "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
//   },
//   {
//     "_id": "127",
//     "reviewName": "Ritu",
//     "reviewProfile": "https://i.postimg.cc/DwgnNWkp/people-3.png",
//     "reviewEmail": "ritu.gmail.com",
//     "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
//   },
//   {
//     "_id": "128",
//     "reviewName": "Ritu",
//     "reviewProfile": "https://i.postimg.cc/DwgnNWkp/people-3.png",
//     "reviewEmail": "ritu.gmail.com",
//     "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
//   },
//   {
//     "_id": "128",
//     "reviewName": "Ritu",
//     "reviewProfile": "https://i.postimg.cc/DwgnNWkp/people-3.png",
//     "reviewEmail": "ritu.gmail.com",
//     "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
//   },
//   {
//     "_id": "129",
//     "reviewName": "Ritu",
//     "reviewProfile": "https://i.postimg.cc/DwgnNWkp/people-3.png",
//     "reviewEmail": "ritu.gmail.com",
//     "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
//   },
//   {
//     "_id": "130",
//     "reviewName": "Ritu",
//     "reviewProfile": "https://i.postimg.cc/DwgnNWkp/people-3.png",
//     "reviewEmail": "ritu.gmail.com",
//     "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
//   },
//   {
//     "_id": "131",
//     "reviewName": "Ritu",
//     "reviewProfile": "https://i.postimg.cc/DwgnNWkp/people-3.png",
//     "reviewEmail": "ritu.gmail.com",
//     "review": "I bought Steel 21-Spd Dynamic X-300 26inch Red. Order delivery is very satisfaction."
//   }
// ]

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
                <h5 className="text-start">{review.name}</h5>
              </div>
              <p className="mt-3 text-start">{review.comment}</p>
            </div>
          </div>)}
      </Slider>
    </div>
  );
};

export default Reviews;