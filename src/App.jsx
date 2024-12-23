import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyInfo from '../src/components/Profile/MyInfo';
import AvailableBooking from '../src/components/Booking/AvailableBooking';
import KoiBooking from '../src/components/Booking/KoiBooking';
import BookingPage from './pages/BookingPage';
import ProfilePage from './pages/ProfilePage';
import CustomBooking from '../src/components/Booking/CustomBooking';
import Header from '../src/components/Home/Header';
import Footer from '../src/components/Home/Footer';
import './App.scss';

const NotFound = () => (
  <div className="container mt-3 alert alert-danger">404. Not found data with your current URL</div>
);

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/tour" element={<BookingPage />}>
        <Route index element={<AvailableBooking />} />
        <Route path="available-tour" element={<AvailableBooking />} />
        <Route path="custom-tour" element={<CustomBooking />} />
        <Route path="koi-order" element={<KoiBooking />} />
      </Route>
      <Route path="/profile-page" element={<ProfilePage />}>
        <Route index element={<MyInfo />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
