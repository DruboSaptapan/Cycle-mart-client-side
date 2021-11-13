import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../../../Hooks/useAuth';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://floating-brook-78748.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch((e) => { })
    }, [products])

    const { isLoading } = useAuth();
    if (isLoading) {
        return (
            <div className="d-flex justify-content-center align-items-center spinner-style">
                <div className="d-flex justify-content-center spinner-grow" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    // Remove product form manage products
    const handleDeleteProduct = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `https://floating-brook-78748.herokuapp.com/orders/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            const remainingOrder = products.filter(order => order._id !== id);
                            setProducts(remainingOrder);
                            Swal.fire(
                                'Deleted!',
                                'Successfully your order has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className="container">
            <h2 className="mt-5 mb-3">Manage Products</h2>
            <div className="table-responsive">
                <table className="table border table-hover">
                    <thead>
                        <tr>
                            <th className="text-start">SL.</th>
                            <th className="text-start">Product Name</th>
                            <th className="text-start">Amount</th>
                            <th className="text-start">Status</th>
                            <th className="text-start"></th>
                            <th className="text-start"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) =>
                                <tr key={product._id}>
                                    <th className="text-start" scope="row">{index + 1}</th>
                                    <td className="text-start">{product.name}</td>
                                    <td className="text-start">${product.price}</td>
                                    {
                                        product.status === 'Pending' ? <td className="text-danger fw-bold">{product.status}</td> : <td className="text-success fw-bold">{product.status}</td>
                                    }

                                    <td><button className="btn btn-sm btn-success">In Stock</button></td>
                                    <td><button onClick={() => handleDeleteProduct(product._id)} className="btn btn-sm btn-danger">Delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;