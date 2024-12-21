import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import PropTypes from 'prop-types';
import '../../assets/scss/Booking/RangeFilter.scss';
import { useState } from 'react';

const minDistance = 10;

const RangeFilter = ({ title, min, max }) => {
  const [value, setValue] = useState([min, max]);

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      // Khi di chuyển nút bên trái
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      // Khi di chuyển nút bên phải
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };

  return (
    <div className="range-filters">
      <div className="filter-title">{title}</div>
      <div className="range-slider">
        <Box sx={{ width: 300, display: 'flex', justifyContent: 'center' }}>
          <Slider
            getAriaLabel={() => 'Minimum distance'}
            value={value}
            min={min}
            max={max}
            onChange={handleChange}
            valueLabelDisplay="auto"
            disableSwap
            className="custom-slider"
          />
        </Box>
      </div>
    </div>
  );
};

RangeFilter.propTypes = {
  title: PropTypes.string.isRequired, // title is a required string
  min: PropTypes.number.isRequired, // min is a required number
  max: PropTypes.number.isRequired, // max is a required number
};

export default RangeFilter;
