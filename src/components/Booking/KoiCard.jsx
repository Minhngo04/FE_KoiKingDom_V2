import PropTypes from 'prop-types';
import '../../assets/scss/Booking/OrderKoi.scss';
import { IoIosStar } from 'react-icons/io';
import { GiCirclingFish } from 'react-icons/gi';
import { FaWeightHanging, FaRuler } from 'react-icons/fa';
import { BsFillCalendar2HeartFill } from 'react-icons/bs';
const KoiCard = ({ price, name, rating, type, weight, height, age, imageUrl }) => {
  return (
    <div className="tour-card">
      <img loading="lazy" src={imageUrl} alt={`${type} koi fish`} className="koi-image" />
      <div className="card-content">
        <div className="card-header">
          <div className="price-info">
            <div className="price">{price}$</div>
            <div className="koi-name">{name}</div>
            <div className="koi-type">
              <GiCirclingFish size={24} className="type-icon" /> {type}
            </div>
          </div>
          <div className="badges">
            <div className="best-seller">Best seller</div>
            <div className="rating-wrapper">
              <IoIosStar size={24} style={{ color: 'gold' }} className="rating-icon" />
              <div className="rating">{rating}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="koi-stats">
        <div className="stat-item">
          <FaWeightHanging size={24} className="stat-icon" />
          <div className="stat-value">{weight} kg</div>
        </div>
        <div className="stat-item">
          <FaRuler size={24} className="stat-icon" />
          <div className="stat-value">{height} cm</div>
        </div>
        <div className="stat-item">
          <BsFillCalendar2HeartFill size={24} className="stat-icon" />
          <div className="stat-value">{age} age</div>
        </div>
      </div>
    </div>
  );
};

KoiCard.propTypes = {
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default KoiCard;
