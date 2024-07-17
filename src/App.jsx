
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import AuthRoute from './components/AuthRoute';
import ProfileDetails from './pages/ProfileDetails ';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <AuthRoute>
              <Profile />
            </AuthRoute>
          }
        />
        <Route
          path="/profiledetails"
          element={
            <AuthRoute>
              <ProfileDetails />
            </AuthRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
