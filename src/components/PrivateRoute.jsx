import useAuthContext from '../hooks/useAuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
  const { user } = useAuthContext();

  if (user === null) {
    // Tailwind spinner (centered full screen)
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-xl bg-secondary"></span>

      </div>
    );
  }

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
