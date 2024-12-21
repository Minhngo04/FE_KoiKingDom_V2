import '../../assets/scss/Home/FooterLinks.scss';
import { FaFacebook, FaTelegram, FaGoogle, FaTiktok } from 'react-icons/fa';

const SocialLinks = () => {
  const socialIcons = [
    {
      src: <FaFacebook />,
      alt: 'Facebook Icon',
    },
    {
      src: <FaTelegram />,
      alt: 'Telegram Icon',
    },
    {
      src: <FaGoogle />,
      alt: 'Google Icon',
    },
    {
      src: <FaTiktok />,
      alt: 'Tiktok Icon',
    },
  ];

  return (
    <div className="link-group">
      <h3 className="link-title">Connect with us</h3>
      <div className="social-icons">
        {socialIcons.map((icon, index) => (
          <div key={index} className="social-icon">
            {icon.src}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
