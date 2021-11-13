import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Product = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://floating-brook-78748.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch((e) => { })
    }, [productId])

    const onSubmit = data => {
        fetch('https://floating-brook-78748.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    Swal.fire(
                        'Good job!',
                        'Successfully order proceed!',
                        'success'
                    )
                    reset();
                }
            })
    };

    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-lg-6 col-md-12 col-sm-12 text-center mt-5 ">
                        <h3 className="text-center pt-lg-5 pb-3 theme-color d-block d-lg-none">Order your favorite cycle</h3>
                        <img height="300px" src={product.picture} alt="" className="img-fluid -w75" /><br />
                        <h3 className="theme-color mt-3 fw-bold">{product.name}</h3>
                        <h5>Tour Charge: {product.price} Rs.</h5>
                    </div>
                    <div className="col-lg-6 shadow-lg">
                        <h3 className="text-center pt-5 pb-3 theme-color d-none d-lg-block">Order your favorite cycle</h3>
                        <div className="text-start px-0 px-lg-5">
                            <form onSubmit={handleSubmit(onSubmit)} className="px-4 pb-5">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">User Name</label>
                                    <input type="text" className="form-control" defaultValue={user.displayName} {...register("name")} />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">User Email</label>
                                    <input type="email" className="form-control" defaultValue={user.email} {...register("email")} />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Cycle Name</label>
                                    <input type="text" className="form-control" defaultValue={product.name} {...register("productTitle", { required: true })} placeholder="Cycle name" />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Cycle Price</label>
                                    <input type="text" className="form-control" defaultValue={product.price} {...register("price", { required: true })} placeholder="$ price" required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">User Address</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" defaultValue="" {...register("address", { required: true })} placeholder="User address" required />
                                </div>

                                <span className="w-50 mx-auto" style={{ display: "block" }}>
                                    <input type="submit" className="btn text-light w-100 text-center" value="Order" style={{ backgroundColor: '#9282f2', color: '#fff' }} />
                                </span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Product;