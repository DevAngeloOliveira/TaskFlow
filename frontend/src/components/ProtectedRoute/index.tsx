import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import LoadingSpinner from '../LoadingSpinner';

const ProtectedRoute = () => {
  const { token, isAuthenticated } = useSelector((state: RootState) => state.auth);

  // If there's no token at all, redirect to login
  if (!token) {
    return <Navigate to="/login" />;
  }

  // If we're already authenticated, render the children
  if (isAuthenticated) {
    return <Outlet />;
  }

  // If we have a token but aren't authenticated yet, show loading
  return (
    <div className="min-h-screen flex items-center justify-center">
      <LoadingSpinner />
    </div>
  );
};

export default ProtectedRoute; 