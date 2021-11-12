// import React from 'react';
// import { Redirect, Route } from 'react-router';
// import useAuth from '../../Hooks/useAuth';

// import './PrivateRoute.css'

// const PrivateRoute = ({ children, ...rest }) => {
//     const { user, isLoading } = useAuth();
//     if (isLoading) {
//         return (
//             <div className="d-flex justify-content-center align-items-center load-spinner">
//                 <div className="d-flex justify-content-center spinner-border" role="status">
//                     <span className="visually-hidden">Loading...</span>
//                 </div>
//             </div>
//         )
//     }
//     return (
//         <Route
//             {...rest}
//             render={({ location }) => 
//             (user.displayName || user.email || user.photoURL)? children:
//             <Redirect
//                 to={{
//                     pathname: "/login",
//                     state: { from: location }
//                 }}
//             ></Redirect>
//             }
//         >
//         </Route>
//     );
// };

// export default PrivateRoute;



import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ?
                    children : <Redirect to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                    ></Redirect>}>
        </Route>
    );
};

export default PrivateRoute;