import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import { useEffect } from 'react';

function App() {
  const isAuthenticated = () => !!localStorage.getItem("token");

  const PrivateRoute = ({ element }) => {
    useEffect(() => {
      if (!isAuthenticated()) {
        alert("You are not authenticated. Please log in.");
      }
    }, []);

    return isAuthenticated() ? element : <Navigate to="/" />;
  };

  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route
        path="/dashboard"
        element={<PrivateRoute element={<Dashboard />} />}
      />
    </Routes>
  );
}

export default App;
