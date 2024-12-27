import { useNavigate } from 'react-router-dom';
import '../assets/scss/Booking/ProfileSidebar.scss';

const ProfileSidebar = ({ currentUser, setCurrentUser }) => {
  // Nhận currentUser và setCurrentUser qua props
  const navigate = useNavigate();
  const menuItems = [
    { label: 'Profile', id: 'profile-details', path: '/profile-page/myProfile' },
    { label: 'Add To Cart', id: 'cart', path: '/profile-page/myCard' },
    { label: 'Favourite', id: 'favorites' },
    { label: 'My Booking', id: 'bookings', path: '/myBooking' },
    { label: 'My Koi Fish', id: 'koi', path: '/myKoiOrder' },
    { label: 'Change Password', id: 'password' },
    { label: 'Logout', id: 'logout', path: '/' },
  ];

  const handleNavigation = (item) => {
    if (item.id === 'logout') {
      setCurrentUser(null); // Đăng xuất người dùng
      navigate(item.path);
    } else if (item.path) {
      navigate(item.path);
    } else {
      console.error('Invalid path provided for navigation');
    }
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/28ba4404306d44e793d93f465a1a0e87/6d1a6d0a-c558-4a36-b00e-d1e1ccff81f7?apiKey=28ba4404306d44e793d93f465a1a0e87&"
          className="profile-image"
          alt="User profile"
        />
        <div>
          {/* Kiểm tra xem currentUser có null hay không */}
          <h1 className="name-user">
            {currentUser === null ? 'Guest' : `${currentUser.firstName} ${currentUser.lastName}`}
          </h1>
        </div>
        <div className="btn">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className="menu-item"
              tabIndex="0"
              aria-label={item.label}
              onClick={() => handleNavigation(item)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default ProfileSidebar;
