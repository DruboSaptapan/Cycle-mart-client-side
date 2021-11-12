import React from 'react';
// import { IoLocationSharp } from "react-icons/io5";
// import { BsFillTelephoneFill } from "react-icons/bs";
// import { MdEmail } from "react-icons/md";

import './Footer.css'

const Footer = () => {
    return (
        <div className="footer pb-5">
            <div className="container mt-5 pt-5 pb-3">
                <div>
                    <div className="row">
                        <div className="col-6 col-lg-3">
                            <ul className="important-list p-0 px-lg-4">
                                <li className="text-start">Quick Links</li>
                                <li className="text-start">Home</li>
                                <li className="text-start">About us</li>
                                <li className="text-start">Contact</li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-3">
                            <ul className="important-list p-0 px-lg-4">
                                <li className="text-start">Other pages</li>
                                <li className="text-start">My orders</li>
                                <li className="text-start">Manage all orders</li>
                                <li className="text-start">Add services</li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-3">
                            <ul className="important-list p-0 px-lg-4">
                                <li className="text-start">Contact Info</li>

                                {/* <li className="text-start my-1"><IoLocationSharp className="me-1" style={{ color: '#ddc5c5' }} /> Level-4, 34, Awal Centre, Banani, Dhaka</li> */}
                                <li className="text-start my-1">Level-4, 34, Awal Centre, Banani, Dhaka</li>

                                {/* <li className="text-start my-1"><BsFillTelephoneFill className="me-1" style={{ color: '#ddc5c5' }} />+8801322810867</li> */}
                                <li className="text-start my-1">+8801322810867</li>

                                {/* <li className="text-start my-1"><MdEmail className="me-1" style={{ color: '#ddc5c5' }} />heaven.peace@gmail.com</li> */}
                                <li className="text-start my-1">cycle.mart@gmail.com</li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-3">
                            <ul className="important-list p-0 px-lg-4">
                                <li className="text-start mb-1">Make a reservation</li>
                                <li className="text-start mt-1 mb-2" style={{lineHeight:1.6}}>Our team is always available 24/7 to answer your queries</li>
                                <li className="text-start mt-1">
                                    <button className="rounded-pill btn btn-footer" type="tel">+8801322810867</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p className="mt-5 mb-0 fw-bold pb-3">Copyright © 2021 | This website is made by Saptapan Barua</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;