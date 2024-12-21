import '../../assets/scss/Booking/TourCard.scss';
import PropTypes from 'prop-types';
const TourCard = ({ price, name, rating, duration, startDate, endDate, image, isBestSeller, icon }) => {
  return (
    <div className="tour-card">
      {icon}
      <img loading="lazy" src={image} alt={`Tour of ${name}`} className="tour-image" />
      <div className="tour-info">
        <div className="price-section">
          <div className="price">{price}$</div>
          <div className="tour-name">{name}</div>
        </div>
        <div className="rating-section">
          {isBestSeller && <div className="best-seller-booking">Best seller</div>}
          <div className="rating">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/28ba4404306d44e793d93f465a1a0e87/2fedf92be94998dcda7e39a3d6e7077d34f35bc2f3ad9dfd7c880dde647469ae?apiKey=28ba4404306d44e793d93f465a1a0e87&"
              alt=""
              className="rating-icon"
            />
            <div>{rating}</div>
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/28ba4404306d44e793d93f465a1a0e87/0727f548ecdc6c4b40d2a9dff14d3dc42a4fa103ee336b6b6abbcbf93d1e6d6f?apiKey=28ba4404306d44e793d93f465a1a0e87&"
        alt=""
        className="divider"
      />
      <div className="tour-details">
        <div className="duration">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/28ba4404306d44e793d93f465a1a0e87/77546285689f9b03a8932fd292e9f413860dcae0196a41165ac3eaf82189014f?apiKey=28ba4404306d44e793d93f465a1a0e87&"
            alt=""
            className="duration-icon"
          />
          <div>{duration}</div>
        </div>
        <div className="dates">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/28ba4404306d44e793d93f465a1a0e87/900cd3b599d0ed74421c84f58a091cd33010664766c339fdce420bb694e39cbf?apiKey=28ba4404306d44e793d93f465a1a0e87&"
            alt=""
            className="date-icon"
          />
          <div>{startDate}</div>
        </div>
        <div className="dates">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/28ba4404306d44e793d93f465a1a0e87/528c36941e2d11b2c4a7478ec9b13f1c1a51d6d5ad0b9e1fdba44a796ade10c9?apiKey=28ba4404306d44e793d93f465a1a0e87&"
            alt=""
            className="date-icon"
          />
          <div>{endDate}</div>
        </div>
      </div>
    </div>
  );
};

TourCard.propTypes = {
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  duration: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isBestSeller: PropTypes.bool.isRequired,
  icon: PropTypes.element.isRequired,
};

TourCard.defaultProps = {
  isBestSeller: false,
  icon: null,
};

export default TourCard;
