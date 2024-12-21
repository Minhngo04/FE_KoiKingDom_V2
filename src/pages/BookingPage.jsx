import BookingNavigation from '../components/Booking/BookingNavigation.jsx';
import { Outlet } from 'react-router-dom';
import '../assets/scss/Booking/BookingPage.scss';

const BookingPage = () => {
  return (
    <div className="booking-container">
      <BookingNavigation />
      <main className="booking-main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default BookingPage;
