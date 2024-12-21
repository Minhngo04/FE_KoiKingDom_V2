import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/scss/Booking/BookingNavigation.scss';

const BookingNavigation = () => {
  const navigate = useNavigate();
  const [pageTitle, setPageTitle] = useState('AVAILABLE TOUR');

  const handleNavigation = (type) => {
    switch (type) {
      case 'available':
        setPageTitle('AVAILABLE TOUR');
        navigate('/tour/available-tour');
        break;
      case 'custom':
        setPageTitle('CUSTOM TOUR');
        navigate('/tour/custom-tour');
        break;
      case 'koiOrder':
        setPageTitle('ORDER KOI FISH');
        navigate('/koiOrder');
        break;
      default:
        console.error('Unknown navigation type');
    }
  };

  return (
    <>
      <h1 className="page-title">{pageTitle}</h1>
      <div className="tour-types">
        <button className="tour-type-button" onClick={() => handleNavigation('available')}>
          Available Tour
        </button>
        <button className="tour-type-button" onClick={() => handleNavigation('custom')}>
          Custom Tour
        </button>
        <button className="tour-type-button" onClick={() => handleNavigation('koiOrder')}>
          Order KOI Fish
        </button>
      </div>
    </>
  );
};

export default BookingNavigation;
