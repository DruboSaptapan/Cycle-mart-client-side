import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAuth from '../../../../Hooks/useAuth';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        axios.post('https://floating-brook-78748.herokuapp.com/reviews', data)
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
    };
    return (
        <div className="container w-50 shadow-lg my-5">
            <h4 className="text-center pt-5 pb-3">Add a review</h4>
            <div className="text-start">
                <form onSubmit={handleSubmit(onSubmit)} className="px-4 pb-5">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">User Name</label>
                        <input type="text" className="form-control" defaultValue={user.displayName} {...register("name", { required: true })} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Comment</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" {...register("comment", { required: true })} placeholder="some text here" rows="3" required></textarea>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Rate here below</label>
                        <input type="text" className="form-control" id="exampleFormControlTextarea1" {...register("rating", { required: true })} placeholder="rating here" required></input>
                    </div>

                    <span className="w-50 mx-auto" style={{ display: "block" }}>
                        <input type="submit" className="btn btn-primary text-light w-100 text-center" value="Review" />
                    </span>
                </form>
            </div>
        </div>
    );
};

export default AddReview;