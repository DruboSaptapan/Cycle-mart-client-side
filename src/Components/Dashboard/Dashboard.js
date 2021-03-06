import React from 'react';
import { NavLink, Switch, Route, useRouteMatch } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logoImg from './logo.png';
import AddProducts from './Admin/AddProducts/AddProducts';
import ManageOrders from './Admin/ManageOrders/ManageOrders';
import MakeAdmin from './Admin/MakeAdmin/MakeAdmin'
import ManageProducts from './Admin/ManageProducts/ManageProducts'
import MyOrders from './User/MyOrders/MyOrders';
import AddReview from './User/AddReview/AddReview';
import Pay from './User/Pay/Pay';
import AdminRoute from './Admin/AdminRoute/AdminRoute';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { admin, logOut } = useAuth();
    return (
        <div>
            <div className="d-lg-block d-none">
                <div className="row mt-3">
                    <div className="col-lg-2 border-end shadow-lg" style={{ height: '100vh' }}>
                        <img src={logoImg} alt="" className="img-fluid w-75" />
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item text-start border border-0">
                                <NavLink className="nav-link active" aria-current="page" style={{ color: '#000' }} activeStyle={{ fontWeight: 'bold' }} to="/home">Home</NavLink>
                            </li>

                            {!admin &&
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-start border border-0">
                                        <NavLink className="nav-link active" aria-current="page" style={{ color: '#000' }} activeStyle={{ fontWeight: 'bold' }} to={`${url}/myorders`}>My orders</NavLink>
                                    </li>
                                    <li className="list-group-item text-start border border-0">
                                        <NavLink className="nav-link active" aria-current="page" style={{ color: '#000' }} activeStyle={{ fontWeight: 'bold' }} to={`${url}/addreview`}>Add review</NavLink>
                                    </li>
                                    <li className="list-group-item text-start border border-0">
                                        <NavLink className="nav-link active" aria-current="page" style={{ color: '#000' }} activeStyle={{ fontWeight: 'bold' }} to={`${url}/pay`}>Pay</NavLink>
                                    </li>
                                </ul>
                            }

                            {admin &&
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-start border border-0">
                                        <NavLink className="nav-link active" aria-current="page" style={{ color: '#000' }} activeStyle={{ fontWeight: 'bold' }} to={`${url}/manageorders`}>Manage orders</NavLink>
                                    </li>
                                    <li className="list-group-item text-start border border-0">
                                        <NavLink className="nav-link active" aria-current="page" style={{ color: '#000' }} activeStyle={{ fontWeight: 'bold' }} to={`${url}/addproducts`}>Add products</NavLink>
                                    </li>
                                    <li className="list-group-item text-start border border-0">
                                        <NavLink className="nav-link active" aria-current="page" style={{ color: '#000' }} activeStyle={{ fontWeight: 'bold' }} to={`${url}/manageproducts`}>Manage products</NavLink>
                                    </li>
                                    <li className="list-group-item text-start border border-0">
                                        <NavLink className="nav-link active" aria-current="page" style={{ color: '#000' }} activeStyle={{ fontWeight: 'bold' }} to={`${url}/makeadmin`}>Make admin</NavLink>
                                    </li>
                                </ul>
                            }
                            <NavLink to="/" className="text-start ms-4" activeStyle={{ fontWeight: 'bold' }}>
                                <button className="btn" onClick={logOut}>Log Out</button>
                            </NavLink>
                        </ul>
                    </div>
                    <div className="col-lg-10">

                        {admin && <h3 className="ms-3 me-5 text-start pb-2 border-bottom border-dark border-2 border-bottom">Admin Dashboard</h3>}
                        {!admin && <h3 className="ms-3 me-5 text-start pb-2 border-bottom border-dark border-2 border-bottom">User Dashboard</h3>}

                        <Switch>
                            <Route exact path={`${path}`}>
                                {!admin && <MyOrders></MyOrders>}
                                {admin && <ManageOrders></ManageOrders>}
                            </Route>

                            <Route path={`${path}/myorders`}>
                                <MyOrders></MyOrders>
                            </Route>

                            <AdminRoute path={`${path}/manageorders`}>
                                <ManageOrders></ManageOrders>
                            </AdminRoute>

                            <AdminRoute path={`${path}/addproducts`}>
                                <AddProducts></AddProducts>
                            </AdminRoute>

                            <Route path={`${path}/addreview`}>
                                <AddReview></AddReview>
                            </Route>

                            <AdminRoute path={`${path}/makeadmin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>

                            <Route path={`${path}/pay`}>
                                <Pay></Pay>
                            </Route>

                            <AdminRoute path={`${path}/manageproducts`}>
                                <ManageProducts></ManageProducts>
                            </AdminRoute>
                        </Switch>
                    </div>
                </div>
            </div>

            {/* drawer */}
            <div className="d-lg-none d-block">
                <nav className="navbar navbar-light bg-light fixed-top">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <NavLink className="navbar-brand mx-auto" to="#">
                            <img src={logoImg} alt="" className="img-fluid" width={'120px'} />
                        </NavLink>
                        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Cycle Mart</h5>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <li className="list-group-item text-start border border-0">
                                    <NavLink className="nav-link active" aria-current="page" style={{ color: '#000' }} activeStyle={{ fontWeight: 'bold' }} to="/home">Home</NavLink>
                                </li>
                                {!admin &&
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item text-start border border-0">
                                            <NavLink className="nav-link active" aria-current="page" style={{ color: '#000' }} activeStyle={{ fontWeight: 'bold' }} to={`${url}/myorders`}>My orders</NavLink>
                                        </li>
                                        <li className="list-group-item text-start border border-0">
                                            <NavLink className="nav-link active" aria-current="page" style={{ color: '#000' }} activeStyle={{ fontWeight: 'bold' }} to={`${url}/addreview`}>Add review</NavLink>
                                        </li>
                                        <li className="list-group-item text-start border border-0">
                                            <NavLink className="nav-link active" aria-current="page" style={{ color: '#000' }} activeStyle={{ fontWeight: 'bold' }} to={`${url}/pay`}>Pay</NavLink>
                                        </li>
                                    </ul>
                                }

                                {admin &&
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item text-start border border-0">
                                            <NavLink className="nav-link active" aria-current="page" style={{ color: '#000' }} activeStyle={{ fontWeight: 'bold' }} to={`${url}/manageorders`}>Manage orders</NavLink>
                                        </li>
                                        <li className="list-group-item text-start border border-0">
                                            <NavLink className="nav-link active" aria-current="page" style={{ color: '#000' }} activeStyle={{ fontWeight: 'bold' }} to={`${url}/addproducts`}>Add products</NavLink>
                                        </li>
                                        <li className="list-group-item text-start border border-0">
                                            <NavLink className="nav-link active" aria-current="page" style={{ color: '#000' }} activeStyle={{ fontWeight: 'bold' }} to={`${url}/manageproducts`}>Manage Products</NavLink>
                                        </li>
                                        <li className="list-group-item text-start border border-0">
                                            <NavLink className="nav-link active" aria-current="page" style={{ color: '#000' }} activeStyle={{ fontWeight: 'bold' }} to={`${url}/makeadmin`}>Make admin</NavLink>
                                        </li>
                                    </ul>
                                }
                            </div>
                        </div>
                        <Switch>
                            <Route exact path={`${path}`}>
                                {!admin && <MyOrders></MyOrders>}
                                {admin && <ManageOrders></ManageOrders>}
                            </Route>

                            <Route exact path={`${path}/myorders`}>
                                {/* <IndexRoute component={MyOrders} /> */}
                                <MyOrders></MyOrders>
                            </Route>

                            <Route path={`${path}/manageorders`}>
                                <ManageOrders></ManageOrders>
                            </Route>

                            <Route path={`${path}/addproducts`}>
                                <AddProducts></AddProducts>
                            </Route>

                            <Route path={`${path}/makeadmin`}>
                                <MakeAdmin></MakeAdmin>
                            </Route>

                            <Route path={`${path}/pay`}>
                                <Pay></Pay>
                            </Route>

                            <Route path={`${path}/manageproducts`}>
                                <ManageProducts></ManageProducts>
                            </Route>
                        </Switch>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Dashboard;