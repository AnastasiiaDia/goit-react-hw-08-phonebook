import { Navigate } from 'react-router-dom';
import { useRefreshQuery } from 'redux/authReducer';

const PrivateRout = ({ children }) => {
  const { isSuccess } = useRefreshQuery();
  console.log(isSuccess);
  console.log(useRefreshQuery());
  return isSuccess ? children : <Navigate to="/login" />;
};

export default PrivateRout;
