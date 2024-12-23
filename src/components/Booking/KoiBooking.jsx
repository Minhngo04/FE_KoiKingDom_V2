import { useState } from 'react';
import KoiCard from './KoiCard.jsx';
import '../../assets/scss/Booking/OrderKoi.scss';
import AsideFilter from './AsideFilter.jsx';
import { kois } from '../../data/mockAPI.js';
import Pagination from '@mui/material/Pagination';
const filters = [
  { title: 'Price Range', min: 0, max: 200 },
  { title: 'Weight', min: 0, max: 500 },
  { title: 'Height', min: 0, max: 500 },
  { title: 'Age', min: 0, max: 500 },
];

export const KoiBooking = () => {
  const [koiTypeChecked, setKoiTypeChecked] = useState([false, false, false]);
  const koiTypeOptions = ['name checkbox', 'name checkbox', 'name checkbox'];
  const [currentPage, setCurrentPage] = useState(1);
  const koisPerPage = 6;

  const handleKoiTypeCheckboxChange = (index) => {
    const updatedChecked = [...koiTypeChecked];
    updatedChecked[index] = !updatedChecked[index];
    setKoiTypeChecked(updatedChecked);
  };
  const indexOfLastKoi = currentPage * koisPerPage;
  const indexOfFirstKoi = indexOfLastKoi - koisPerPage;
  const currentKois = kois.slice(indexOfFirstKoi, indexOfLastKoi);
  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <AsideFilter
        filters={filters}
        sections={[
          {
            title: 'Koi Type',
            options: koiTypeOptions,
            checkedOptions: koiTypeChecked,
            onCheckboxChange: handleKoiTypeCheckboxChange,
          },
        ]}
      />

      <div className="booking-tour-wrapper">
        <section className="booking-tour-grid">
          {currentKois.map((koi, index) => (
            <KoiCard key={index} {...koi} />
          ))}
        </section>
        <div className="pagination-container">
          <Pagination
            count={Math.ceil(kois.length / koisPerPage)} // Removed extra closing parenthesis
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

export default KoiBooking;
