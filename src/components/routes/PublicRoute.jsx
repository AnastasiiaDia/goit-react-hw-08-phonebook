import { Navigate } from 'react-router-dom';
import { useRefreshQuery } from 'redux/authReducer';

const PublicRoute = ({ children }) => {
  const { isSuccess } = useRefreshQuery();
  return isSuccess ? <Navigate to="/bookpage" /> : children;
};

export default PublicRoute;
