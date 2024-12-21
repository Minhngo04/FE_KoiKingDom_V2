import { useState } from 'react';
import NavigationButton from './NavigationButton.jsx';
import UserPanel from './UserPanel.jsx';
import { FaRegUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import koiicon from '../../assets/images/koi-icon.png';
import '../../assets/scss/Home/Header.scss';

const navigationItems = ['Home', 'Booking', 'Information'];

const Header = () => {
  const [activeItem, setActiveItem] = useState('Home');

  return (
    <>
      <header className="header-container">
        <nav className="navigation-wrapper">
          <div className="navigation-content">
            <div className="brand-name">KOIKINGDOM</div>
            <div className="button">
              {navigationItems.map((item) => (
                <Link key={item} to={item === 'Booking' ? '/tour' : '/'} onClick={() => setActiveItem(item)}>
                  <NavigationButton label={item} isActive={activeItem === item} />
                </Link>
              ))}
            </div>
            <div className="user-panel-wrapper">
              <UserPanel brand={<FaRegUserCircle />} username="Minhngo" />
            </div>
          </div>
        </nav>
        <section className="logo-section">
          <img loading="lazy" src={koiicon} className="logo" alt="Koi Kingdom Logo" />
        </section>
      </header>
    </>
  );
};

export default Header;
