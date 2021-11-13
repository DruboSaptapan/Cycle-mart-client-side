import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [updater, setUpdater] = useState();

    useEffect(() => {
        axios.get('https://floating-brook-78748.herokuapp.com/orders')
            .then(res => setOrders(res.data));
    }, [updater]);

    const handleUpdateStatus = (id, status) => {
        console.log(id, status);
        const data = { id: id, status: status };
        axios.post('https://floating-brook-78748.herokuapp.com/updateStatus', data)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    setUpdater(res)
                }
            })
    }

    // Cancel Order
    const handleCancelOrder = id => {
        const confirmation = window.confirm("Are you sure you want to delete this item?")
        if (confirmation) {
            axios.delete(`https://floating-brook-78748.herokuapp.com/orders/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        Swal.fire(
                            'Good job!',
                            'Successfully delete the product!',
                            'success'
                          )
                    }
                });
        }

        if (confirmation) {
            axios.get(`https://floating-brook-78748.herokuapp.com/orders/${id}`)
                .then(res => {
                    console.log(res);
                    if (res.data.deletedCount > 0) {
                        const restData = orders.filter(sOrder => sOrder._id !== id);
                        setOrders(restData);
                    }
                })
        }
    }

    return (
        <div className="container">
            <h3 className="mt-5 mb-3 text-color">Manage All Orders</h3>
            <div className="table-responsive">
                <table className="table border table-hover">
                    <thead className="bg-color">
                        <tr>
                            <th className="text-start text-color">SL.</th>
                            <th className="text-start text-color">Name</th>
                            <th className="text-start text-color">Email</th>
                            <th className="text-start text-color">Address</th>
                            <th className="text-start text-color">Product Name</th>
                            <th className="text-start text-color">Price</th>
                            <th className="text-start text-color">Status</th>
                            <th className="text-start text-color">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>
                                <tr key={order._id}>
                                    <th className="text-start" scope="row">{index + 1}</th>
                                    <td className="text-start">{order.name}</td>
                                    <td className="text-start">{order.email}</td>
                                    <td className="text-start">{order.address}</td>
                                    <td className="text-start">{order.productTitle}</td>
                                    <td className="text-start">${order.price}</td>
                                    <td>
                                        {order.status === 'pending' ?
                                            <span className="badge bg-danger">{order.status}</span>
                                            :
                                            <span className="badge bg-success">{order.status}</span>
                                        }
                                        {/* {
                                            orders.status === 'shipped' ?
                                                <span className="badge bg-success">
                                                    {order?.status}</span>
                                                :
                                                orders.status === 'Approved' ?
                                                    <span className="badge bg-primary">{order?.status}</span>
                                                    :
                                                    <span className="badge bg-danger" >Pending</span>
                                        } */}
                                    </td>
                                    <td>
                                        <button onClick={() => handleCancelOrder(order._id)} className="btn btn-sm btn-outline-danger mx-1 mt-1">delete</button>
                                        <button onClick={() => handleUpdateStatus(order._id, order.status)} className="btn btn-sm btn-outline-success mx-1 mt-1">status</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default ManageOrders;