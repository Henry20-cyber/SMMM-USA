import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Logic: Check if the admin is logged in (e.g., a token in localStorage)
  const isAuthenticated = localStorage.getItem('token'); 

  // If not authenticated, redirect to the login page
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the Admin components
  return children;
};

export default ProtectedRoute;