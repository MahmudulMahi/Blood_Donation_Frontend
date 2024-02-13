// import React, { useContext } from 'react';
// import { Route,  Navigate, Outlet,  } from 'react-router-dom';
// import { AuthContext } from './AuthProvider';

// const PrivateRoute = ({ element: Element, ...rest }) => {

//   const { token } = useContext(AuthContext);
//   // const token =localStorage.getItem('token')
//   console.log("tokenn",token)
//   return (
//     <Route
//     {...rest}
//     element={token ? <Element /> : <Navigate to="/login" />}
//   />
//   )
// };

// export default PrivateRoute;