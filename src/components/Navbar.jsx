import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-dark bg-primary px-4">
      <span className="navbar-brand fw-bold">Task Manager</span>
      <div className="d-flex align-items-center gap-3">
        <span className="text-white">👋 {user?.name}</span>
        <button
          className="btn btn-outline-light btn-sm"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;