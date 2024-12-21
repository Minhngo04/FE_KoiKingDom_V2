import '../../assets/scss/Home/FooterLinks.scss';
import PropTypes from 'prop-types';

const FooterLinks = ({ title, links }) => {
  return (
    <nav className="link-group">
      <h3 className="link-title">{title}</h3>
      {links.map((link, index) => (
        <p key={index} href="#" className="link">
          {link}
        </p>
      ))}
    </nav>
  );
};
// PropTypes validation
FooterLinks.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
};
export default FooterLinks;
