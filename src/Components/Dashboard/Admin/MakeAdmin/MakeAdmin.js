import React, { useState } from 'react';
import Swal from 'sweetalert2';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };

        fetch('https://floating-brook-78748.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire(
                    'Good job!',
                    'Successfully admin created!',
                    'success'
                )
            })
        e.preventDefault();
    }

    return (
        <div>
            <div className="container w-50">
                <h2 className="mt-4 mb-2">Create an admin</h2>
                <form onSubmit={handleAdminSubmit}>
                    <div className="form-floating mt-5 mb-5 ">
                        <input type="email" name="email" onBlur={handleOnBlur} className="form-control border-bottom border-0 bg-transparent" placeholder="name@example.com" required />
                        <label htmlFor="floatingInput">Email</label>
                    </div>
                    <button type="submit" className="btn btn-primary text-light px-5" style={{ backgroundColor: '#9282f2', color: '#fff' }}>Make Admin</button>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;