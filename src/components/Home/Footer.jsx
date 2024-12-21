import '../../assets/scss/Home/Footer.scss';
import FooterLinks from './FooterLinks';
import SocialLinks from './SocialLinks';

const Footer = () => {
  let categoryLinks = ['Famous Tours', 'Available Tours', 'Koi Farms', 'Popular Koi Breeds', 'Koi Species'];
  let serviceLinks = ['My Profile', 'Order history', 'Notifications', 'Shopping cart', 'Chat with us'];
  let informationLinks = ['FAQs', 'Articles', 'About us', 'Contact us'];

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <section className="contact-info">
          <h3 className="link-title">Contact us for support</h3>
          <a href="tel:0931339228" className="phone">
            0931 339 228
          </a>
          <a href="mailto:koikingdomsystem@gmail.com" className="email">
            koikingdomsystem@gmail.com
          </a>
        </section>

        <FooterLinks title="Categories" links={categoryLinks} />
        <FooterLinks title="Services" links={serviceLinks} />
        <FooterLinks title="Information" links={informationLinks} />
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;
