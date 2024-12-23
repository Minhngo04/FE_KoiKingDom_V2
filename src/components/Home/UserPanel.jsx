import { useState } from 'react';
import '../../assets/scss/Home/UserPanel.scss';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
const UserPanel = ({ brand, username }) => {
  const navigate = useNavigate();
  const [showTooltip, setShowTooltip] = useState(false);

  const handleNavigation = (type) => {
    switch (type) {
      case 'profile':
        navigate('/profile-page');
        break;
      // Add other cases as needed
      default:
        break;
    }
  };

  return (
    <div className="user-panel" onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
      <div className="user-brand" onClick={() => handleNavigation('profile')}>
        {brand && <span className="icon">{brand}</span>}
      </div>
      {showTooltip && <div className="tooltip">{username || 'Người dùng'}</div>}
    </div>
  );
};

// PropTypes validation
UserPanel.propTypes = {
  brand: PropTypes.element.isRequired,
  username: PropTypes.string.isRequired,
};

export default UserPanel;
