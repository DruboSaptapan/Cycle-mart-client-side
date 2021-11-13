import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'
import img from './banner.png'

const Banner = () => {
    return (
        <div className="container banner">
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 col-12 order-2 order-lg-1">
                    <img src={img} className="img-fluid" alt="" />
                </div>
                <div className="col-lg-6 col-12 text-start order-1 order-lg-2">
                    <h1 className="fw-bold">Recoils Gents Bicycle Black -24inch (MTB Dual)</h1>
                    <p className="">Riding cycle in the morning is a good exercise for health. Riding cycle in the morning is a good exercise for health. Riding cycle in the morning is a good exercise for health.</p>
                    <Link to="/products" className="btn btn-secondary px-5 text-light">Explore...</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;