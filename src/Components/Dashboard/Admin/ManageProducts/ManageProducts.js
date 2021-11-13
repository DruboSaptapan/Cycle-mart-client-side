import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../../../Hooks/useAuth';

const ManageProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://floating-brook-78748.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch((e) => { })
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

    /// delete a product
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
                        }
                    })
                Swal.fire(
                    'Deleted!',
                    'Successfully your order has been deleted.',
                    'success'
                )
            }
        })
    }
    return (
        <div>
            <div className="container">
                <div className="table-responsive">
                    <table className="table table-sm border table-hover">
                        <thead style={{ backgroundColor: '#2cbf8659' }}>
                            <tr>
                                <th className="text-start">Sl.</th>
                                <th className="text-start">Product full name</th>
                                <th className="text-start">Product price</th>
                                <th className="text-start">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product, index) =>
                                    <tr key={product._id}>
                                        <th className="text-start" scope="row">{index + 1}</th>
                                        <td className="text-start">{product.name}</td>
                                        <td className="text-start">{product.price} taka</td>
                                        <td className="text-start">
                                            <button onClick={handleDeleteProduct} className="btn btn-danger btn-sm">Delete</button>
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;