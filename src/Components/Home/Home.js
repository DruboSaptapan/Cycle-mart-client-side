import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import useAuth from '../../Hooks/useAuth';
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://floating-brook-78748.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const { isLoading } = useAuth();
    if (isLoading) {
        return (
            <div className="d-flex justify-content-center align-items-start">
                <div className="d-flex justify-content-center spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <div className="container">
                <h2 className="mt-5 mb-4">Products</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        products.slice(0, 6).map(product =>
                            <div className="col-lg-4 col-12" key={product._id}>
                                <div className="card h-100 product border-0">
                                    <img src={product.picture} className="card-img-top img-fluid" alt="..." />
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <h5 className="card-title text-start mb-4" style={{ lineHeight: '32px' }}>{product.name}</h5>
                                            </div>
                                            <div className="col-lg-4">
                                                <h3 className="card-text text-start">{product.price}</h3>
                                            </div>
                                        </div>
                                        <Link to={`/product/${product._id}`}>
                                            <button className="btn px-4" style={{ backgroundColor: '#9282f2', color: '#fff' }} product={product}><FaCartPlus className="me-2" />Add to cart</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            </div>
            <ContactUs></ContactUs>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;