import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

import loginImg from './login.jpg'

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    return (
        <div>
            {
                !isLoading &&
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <img src={loginImg} alt="" className="img-fluid" />
                        </div>
                        <div className="col-lg-6">
                            <div className="mx-auto my-5 border-radius custom-shadow">
                                <h4 className="pt-4">Please Login</h4>
                                <p><small>use social account</small></p>
                                <div>
                                    <button onClick={handleGoogleSignIn} type="submit" className="btn text-light me-2" style={{ backgroundColor: '#13b878' }}>Google login</button>
                                </div>

                                <form onSubmit={handleLoginSubmit} className="w-75 mx-auto mt-3">
                                    <p><small>or use your email account</small></p>
                                    <div className="form-floating mb-3">
                                        <input type="email" name="email" onBlur={handleOnChange} className="form-control border-bottom border-0 bg-transparent" placeholder="name@example.com" required />
                                        <label htmlFor="floatingInput">Email</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="password" name="password" onBlur={handleOnChange} className="form-control border-bottom border-0 bg-transparent" placeholder="Password" required />
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>
                                    {authError && <div className="alert alert-danger" role="alert">
                                        {authError}
                                    </div>}
                                    <button type="submit" className="btn px-5 my-3" style={{ backgroundColor: '#9282f2', color: '#fff' }}>Login</button>
                                </form>
                                <p className="pb-4">New user? <Link to="/register" className="text-decoration-none fw-bold" style={{ color: '#9282f2' }}>Register</Link></p>
                            </div>
                        </div>
                    </div>
                </div>

            }
            {isLoading && <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            }
        </div>
    );
};

export default Login;