import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import Offers from './pages/Offers';
import Header from './Components/Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Sign-Up" element={<SignUp />} />
        <Route path="/Sign-In" element={<SignIn />} />
        <Route path="/Offers" element={<Offers />} />
        <Route path="/Forgot-Password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}
