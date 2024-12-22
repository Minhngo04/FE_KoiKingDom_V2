import PropTypes from 'prop-types';
import '../../assets/scss/Booking/CustomBooking.scss';

const Checkbox = ({ label, id, icon }) => {
  return (
    <div className="checkbox-wrapper">
      {icon}
      <label htmlFor={id} className="checkbox-label">
        {label}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.PropTypes.number.isRequired,
  icon: PropTypes.node.isRequired,
};

export default Checkbox;
