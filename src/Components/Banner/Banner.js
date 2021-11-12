import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'
import img from './banner.png'

const Banner = () => {
    return (
        <div className="container banner">
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 col-12">
                    <img src={img} className="img-fluid" alt="" />
                </div>
                <div className="col-lg-6 col-12 text-start">
                    <h1 className="fw-bold">Recoils Gents Bicycle Black -24inch (MTB Dual)</h1>
                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur corporis aspernatur natus obcaecati alias distinctio eius delectus veritatis tenetur rerum.</p>
                    <Link to="/products" className="btn btn-secondary px-5 text-light">Explore...</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;