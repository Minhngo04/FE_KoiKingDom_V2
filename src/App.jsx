import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import MyCard from '../src/components/Profile/MyCard';
import MyInfo from '../src/components/Profile/MyInfo';
import AvailableBooking from '../src/components/Booking/AvailableBooking';
import KoiBooking from '../src/components/Booking/KoiBooking';
import BookingPage from './pages/BookingPage';
import ProfilePage from './pages/ProfilePage';
import CustomBooking from '../src/components/Booking/CustomBooking';
import Header from '../src/components/Home/Header';
import Footer from '../src/components/Home/Footer';
import { users } from './data/mockAPI';
import './App.scss';

const NotFound = () => <div className="container mt-3 alert alert-danger">404. Page not found.</div>;

const App = () => {
  // Quản lý trạng thái người dùng
  const [currentUser, setCurrentUser] = useState(null);
  // Khởi tạo người dùng giả lập từ mockAPI
  useEffect(() => {
    // Giả sử người dùng mặc định là users[0]
    if (users && users.length > 0) {
      setCurrentUser(users[0]);
    }
  }, []);

  return (
    <BrowserRouter>
      {/* Header nhận currentUser và setCurrentUser */}
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Routes>
        {/* Trang chính */}
        <Route index element={<HomePage />} />

        {/* Các trang liên quan đến Booking */}
        <Route path="/tour" element={<BookingPage />}>
          <Route index element={<AvailableBooking />} />
          <Route path="available-tour" element={<AvailableBooking />} />
          <Route path="custom-tour" element={<CustomBooking />} />
          <Route path="koi-order" element={<KoiBooking />} />
        </Route>

        {/* Các trang liên quan đến hồ sơ người dùng */}
        <Route path="/profile-page" element={<ProfilePage currentUser={currentUser} setCurrentUser={setCurrentUser} />}>
          <Route index element={<MyInfo currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
          <Route path="myProfile" element={<MyInfo currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
          <Route path="myCard" element={<MyCard />} />
        </Route>

        {/* Trang lỗi 404 */}
        <Route path="*" element={<NotFound />} />

        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/register-page" element={<RegisterPage />} />
      </Routes>
      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;
