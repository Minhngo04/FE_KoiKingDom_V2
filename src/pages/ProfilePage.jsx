import Sidebar from './ProfileSidebar.jsx';
import { Outlet } from 'react-router-dom';
import '../assets/scss/Profile/Profile.scss';

const Profile = () => {
  return (
    <div className="profile-page">
      <main className="main-content">
        <Sidebar />
        <Outlet />
      </main>
    </div>
  );
};
export default Profile;
