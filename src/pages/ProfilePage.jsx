import { Outlet } from 'react-router-dom';
import Sidebar from './ProfileSidebar.jsx';
import '../assets/scss/Profile/Profile.scss';

const ProfilePage = ({ currentUser, setCurrentUser }) => {
  return (
    <div className="profile-page">
      <main className="main-content">
        <Sidebar currentUser={currentUser} setCurrentUser={setCurrentUser} />
        {/* Truyền tiếp currentUser và setCurrentUser vào Outlet */}
        <Outlet currentUser={currentUser} setCurrentUser={setCurrentUser} />
      </main>
    </div>
  );
};

export default ProfilePage;
