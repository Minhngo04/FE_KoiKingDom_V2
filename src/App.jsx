import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AvailableBooking from '../src/components/Booking/AvailableBooking';
import BookingPage from './pages/BookingPage';
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
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
