import PropTypes from 'prop-types';
import '../../assets/scss/Booking/CustomBooking.scss';

const Button = ({ child, variant = 'primary', onClick, type = 'button' }) => {
  return (
    <button className={`button ${variant}`} onClick={onClick} type={type}>
      {child}
    </button>
  );
};

Button.propTypes = {
  child: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'submit', 'danger']),
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
  variant: 'primary',
  type: 'button',
};

export default Button;
