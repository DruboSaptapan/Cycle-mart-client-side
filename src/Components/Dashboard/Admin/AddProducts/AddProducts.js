import React from 'react';
import { useForm } from 'react-hook-form';
// import axios from 'axios';
import Swal from 'sweetalert2';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // axios.post('https://floating-brook-78748.herokuapp.com/products', data)
        //     .then(res => {
        //         if (res.data.insertedId) {
        //             Swal.fire(
        //                 'Good job!',
        //                 'Successfully the product is added.!',
        //                 'success'
        //             )
        //             reset();
        //         }
        //     })
        fetch('https://floating-brook-78748.herokuapp.com/products')
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire(
                        'Good job!',
                        'Successfully the product is added.!',
                        'success'
                    )
                    reset();
                }
            })
    }

    return (
        <div className="container w-50 shadow-lg my-5">
            <h4 className="text-center pt-5 pb-3">Add Products</h4>
            <div className="text-start">
                <form onSubmit={handleSubmit(onSubmit)} className="px-4 pb-5">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Image URL</label>
                        <input className="form-control" id="exampleFormControlInput1" {...register("picture")} placeholder="image url" required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Product Title</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" {...register("name")} placeholder="Product title here" required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" {...register("description")} placeholder="some text here" rows="3" required></textarea>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Price</label>
                        <input type="number" className="form-control" id="exampleFormControlInput1" {...register("price")} placeholder="$ price" required />
                    </div>

                    <span className="w-50 mx-auto" style={{ display: "block" }}>
                        <input type="submit" className="btn btn-primary text-light w-100 text-center" value="Add" />
                    </span>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;