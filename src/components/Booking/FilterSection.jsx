import { useState } from 'react';
import '../../assets/scss/Booking/FilterSection.scss';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import CheckboxGroup from './CheckboxGroup.jsx';
import PropTypes from 'prop-types'; // Import PropTypes

const FilterSection = ({ title, options = [], checkedOptions, onCheckboxChange }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSection = () => setIsOpen(!isOpen);

  return (
    <div className="filter-section">
      <div className="filter-header" onClick={toggleSection}>
        <div className="filter-title">{title}</div>
        {isOpen ? <FaChevronUp className="filter-icon" /> : <FaChevronDown className="filter-icon" />}
      </div>
      {isOpen && (
        <div className="filter-content">
          <CheckboxGroup options={options} checkedOptions={checkedOptions} onCheckboxChange={onCheckboxChange} />
        </div>
      )}
    </div>
  );
};

FilterSection.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string), // An array of strings for the checkbox options
  checkedOptions: PropTypes.arrayOf(PropTypes.bool).isRequired, // An array of booleans to represent the checked state of options
  onCheckboxChange: PropTypes.func.isRequired, // A function that handles checkbox change events
};

FilterSection.defaultProps = {
  options: [],
};
export default FilterSection;
