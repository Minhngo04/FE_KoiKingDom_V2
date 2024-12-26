import '../../assets/scss/Profile/MyCardForm.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { IoAdd, IoClose } from 'react-icons/io5';
import { FiMinus } from 'react-icons/fi';
import { tours } from '../../data/mockAPI';

const MyCardForm = ({ myCard }) => {
  const tourInCard = tours.find((tour) => tour.id === myCard.tourId);
  const [number, setNumber] = useState(0);
  const handleIncrease = () => {
    setNumber(number + 1);
  };
  const handleDecrease = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  if (!tourInCard) return null;

  return (
    <div className="box">
      {/* Khối thông tin và số lượng */}
      <div className="row">
        {/* Khối thông tin tour */}
        <div className="tour-info">
          {/* Hình ảnh */}
          <img src={tourInCard.image} alt="Tour" className="tour-image" />
          {/* Chi tiết */}
          <div className="tour-detail">
            <div className="tour-name">{tourInCard.name}</div>
            <div className="tour-startdate">Start Date: {tourInCard.startDate}</div>
            <div className="tour-enddate">End Date: {tourInCard.endDate}</div>
            <div className="tour-location">Departure Location: {tourInCard.duration}</div>
          </div>
        </div>

        {/* Khối số lượng */}
        <div className="count">
          {/* Nút trừ */}
          <div className="minus">
            <FiMinus size={24} onClick={() => handleDecrease()} />
          </div>
          {/* Số hiển thị */}
          <div className="number">{number}</div>
          {/* Nút cộng */}
          <div className="add" onClick={() => handleIncrease()}>
            <IoAdd size={24} />
          </div>
        </div>

        {/* Giá tour */}
        <div
          className="tour-price"
          style={{
            textAlign: 'center',
            fontSize: '1.6rem',
            fontWeight: '600',
            color: '#22181C',
            flex: 1, // Chiếm 1 phần không gian
          }}
        >
          ${tourInCard.price}
        </div>

        <div className="close">
          <IoClose size={24} />
        </div>
      </div>
    </div>
  );
};

MyCardForm.propTypes = {
  myCard: PropTypes.shape({
    tourId: PropTypes.string.isRequired,
  }).isRequired,
};

export default MyCardForm;
