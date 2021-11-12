import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const ManageOrders = () => {
    const [orders, setServices] = useState([]);

    useEffect(() => {
        fetch('https://floating-brook-78748.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleShipped = id => {

    }

    // DELETE ORDER
    const handleCancelOrder = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    const url = `https://floating-brook-78748.herokuapp.com/orders/${id}`;
                    fetch(url, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount) {
                                const remaining = orders.filter(order => order._id !== id);
                                setServices(remaining);
                            }
                        })
                    Swal.fire(
                        'Deleted!',
                        'The order has been deleted.',
                        'success'
                    )
                }
            })
    }
    return (
        <div className="container">
            <h2 className="mt-5 mb-3">Manage All Orders</h2>
            <div className="table-responsive table-sm-responsive">
                <table className="table border table-hover table-sm">
                    <thead>
                        <tr>
                            <th className="text-start">SL.</th>
                            <th className="text-start">Name</th>
                            <th className="text-start">Email</th>
                            <th className="text-start">Name of cycle</th>
                            {/* <th className="text-start">Reg. Date</th> */}
                            <th className="text-start">Address</th>
                            <th className="text-start">Amount</th>
                            <th className="text-start">Status</th>
                            <th className="text-start">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>
                                <tr key={order._id}>
                                    <th className="text-start" scope="row">{index + 1}</th>
                                    <td className="text-start">{order.name.slice(0,20)}</td>
                                    <td className="text-start">{order.email}</td>
                                    <td className="text-start">{order?.productTitle}</td>
                                    <td className="text-start">{order.address}</td>
                                    <td className="text-start">{order.price}</td>
                                    <td className="text-start">
                                        {
                                            orders.status
                                        }
                                        <span className="badge bg-danger" id="pending">Pending</span>
                                    </td>
                                    <td className="text-start">
                                        <button onClick={() => handleShipped(order._id)} className="btn btn-sm btn-success me-1">Shipped</button>
                                        <button onClick={() => handleCancelOrder(order._id)} className="btn btn-sm btn-danger ms-1">Cancel</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;