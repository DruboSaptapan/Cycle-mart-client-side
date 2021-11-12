import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';

import registrationImg from './registration.jpg'


const Register = () => {
    const [registerData, setRegisterData] = useState();
    const { user, registerUser, isLoading, authError } = useAuth();

    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    }

    const handleRegistrationSubmit = e => {
        if (registerData.password !== registerData.password2) {
            // alert('Your password did not match. Please, Try again!');
            Swal.fire(
                'Oops!',
                'Password didn\'t match!',
                'error'
            )
            return
        }
        registerUser(registerData.name, registerData.email, registerData.password, history)
        e.preventDefault();
    }

    return (
        <div>
            {!isLoading &&
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="bg-color mx-auto my-5 border-radius">
                                <h4 className="pt-4">Create an Account</h4>
                                <p><small>use social account to create an account</small></p>
                                <div>
                                    <button type="submit" className="btn btn-google text-light me-2" style={{backgroundColor: '#13b878'}}>Google login</button>
                                </div>
                                <form onSubmit={handleRegistrationSubmit} className="w-75 mx-auto mt-3">
                                    <p><small>or use your email account</small></p>
                                    <div className="form-floating mb-3">
                                        <input type="text" name="name" onBlur={handleOnChange} className="form-control border-bottom border-0 bg-transparent" placeholder="Your name here" required />
                                        <label htmlFor="floatingInput">Name</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="email" name="email" onBlur={handleOnChange} className="form-control border-bottom border-0 bg-transparent" placeholder="name@example.com" required />
                                        <label htmlFor="floatingInput">Email</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="password" name="password" onBlur={handleOnChange} className="form-control border-bottom border-0 bg-transparent" placeholder="Password" required />
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="password" name="password2" onBlur={handleOnChange} className="form-control border-bottom border-0 bg-transparent" placeholder="Password" required />
                                        <label htmlFor="floatingPassword">Confirm Password</label>
                                    </div>

                                    <button type="submit" className="btn px-5 text-light my-3" style={{backgroundColor: '#9282f2', color: '#fff'}}>Submit</button>
                                    <p className="pb-4">Already have an account? <Link to="/login" className="text-decoration-none fw-bold" style={{color: '#9282f2'}}>Login</Link></p>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src={registrationImg} alt="" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            }
            {isLoading && <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            }

            {user?.email && <div className="alert alert-success" role="alert">
                User created Successfully.!
            </div>}

            {authError && <div className="alert alert-danger" role="alert">
                {authError}
            </div>}
        </div >
    );
};

export default Register;