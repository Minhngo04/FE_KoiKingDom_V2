import { useState } from 'react';
import TourCard from './TourCard';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import AsideFilter from './AsideFilter.jsx';
import { tours } from '../../data/mockAPI.js';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import '../../assets/scss/Booking/AvailableBooking.scss';
import Pagination from '@mui/material/Pagination';

const AvailableBooking = () => {
  const farmOptions = ['name checkbox', 'name checkbox', 'name checkbox'];
  const koiTypeOptions = ['name checkbox', 'name checkbox', 'name checkbox'];

  const [farmChecked, setFarmChecked] = useState([false, false, false]);
  const [koiChecked, setKoiChecked] = useState([false, false, false]);
  const [likedTours, setLikedTours] = useState(new Array(tours.length).fill(false));
  const [currentPage, setCurrentPage] = useState(1);
  const toursPerPage = 6; // Số tour hiển thị trên mỗi trang

  const handleFarmCheckboxChange = (index) => {
    const updatedChecked = [...farmChecked];
    updatedChecked[index] = !updatedChecked[index];
    setFarmChecked(updatedChecked);
  };

  const handleKoiCheckboxChange = (index) => {
    const updatedChecked = [...koiChecked];
    updatedChecked[index] = !updatedChecked[index];
    setKoiChecked(updatedChecked);
  };

  const toggleLike = (index) => {
    setLikedTours((prevLikedTours) => prevLikedTours.map((liked, i) => (i === index ? !liked : liked)));
  };

  // Pagination Logic
  const indexOfLastTour = currentPage * toursPerPage;
  const indexOfFirstTour = indexOfLastTour - toursPerPage;
  const currentTours = tours.slice(indexOfFirstTour, indexOfLastTour);

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <AsideFilter
        filters={[{ title: 'Price', min: 0, max: 200 }]}
        dateRange={true}
        sections={[
          {
            title: 'Farm',
            options: farmOptions,
            checkedOptions: farmChecked,
            onCheckboxChange: handleFarmCheckboxChange,
          },
          {
            title: 'Koi Type',
            options: koiTypeOptions,
            checkedOptions: koiChecked,
            onCheckboxChange: handleKoiCheckboxChange,
          },
        ]}
      />

      <div className="booking-tour-wrapper">
        <section className="booking-tour-grid">
          {currentTours.map((tour, index) => (
            <TourCard
              key={index}
              {...tour}
              icon={
                likedTours[indexOfFirstTour + index] ? (
                  <FaHeart className="icon-heart" size={30} onClick={() => toggleLike(indexOfFirstTour + index)} />
                ) : (
                  <FaRegHeart className="icon-heart" size={30} onClick={() => toggleLike(indexOfFirstTour + index)} />
                )
              }
            />
          ))}
        </section>
        <div className="pagination-container">
          <Pagination
            count={Math.ceil(tours.length / toursPerPage)} // Removed extra closing parenthesis
            page={currentPage}
            onChange={handleChangePage}
            color="primary"
            showFirstButton
            showLastButton
            sx={{
              '& .MuiPaginationItem-root': {
                fontSize: '1.25rem', // Increase font size
                padding: '10px 20px', // Increase button size
                backgroundColor: '#c96161', // Dark red background color
                color: '#ffffff', // White text color
                borderRadius: '4px', // Rounded corners
                margin: '0 5px', // Space between pagination items
                transition: 'background-color 0.3s, color 0.3s',
                '&:hover': {
                  backgroundColor: '#a52a2a', // Darker red on hover
                },
                '&.Mui-selected': {
                  backgroundColor: '#a52a2a', // Darker red when selected
                  color: '#ffffff', // White text color when selected
                  '&:hover': {
                    backgroundColor: '#b22222', // Even darker red on hover when selected
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </>
  );
};

export default AvailableBooking;
