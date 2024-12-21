import '../../assets/scss/Home/NavigationButton.scss';
import PropTypes from 'prop-types';
const NavigationButton = ({ label, isActive }) => {
  return <button className={`navigation-button ${isActive ? 'active' : ''}`}>{label}</button>;
};

// PropTypes validation
NavigationButton.propTypes = {
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};
export default NavigationButton;
