import { Outlet, Navigate, useLocation } from 'react-router-dom';

import { shallowEqual, useSelector } from 'react-redux';

import { getIsLogin } from '../../../redux/userAccount/userAccount-selectors';

const PrivateRoute = () => {
  const isLogin = useSelector(getIsLogin, shallowEqual);
  const location = useLocation();
 
  if (!isLogin) {
    return <Navigate to="auth" state={{from: location}}/>;
  }

  return <Outlet />;
};

export default PrivateRoute;
