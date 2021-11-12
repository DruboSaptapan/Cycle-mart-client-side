import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Product.css'

const Products = () => {
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
            <div className="container my-5">
                <h2 className="mb-3">Products</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        products.map(product =>
                            <div className="col-lg-4 col-12" key={product._id}>
                                <div className="card h-100 d-flex flex-column align-items-center bg-light product-card m-2">
                                    <img src={product.picture} className="card-img-top img-fluid w-75" alt="..." />
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-8">
                                                <h6 className="card-title text-start mb-4" style={{lineHeight: '32px'}}>{product.name}</h6>
                                            </div>
                                            <div className="col-4">
                                                <h6 className="card-text text-start">{product.price}</h6>
                                            </div>
                                            <div className="col-12">
                                                <p className="text-start" style={{fontSize: '16px'}}>{product.description}</p>
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
            <Footer></Footer>
        </div>
    );
};

export default Products;