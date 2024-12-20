import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import 'swiper/css';
import 'swiper/css/autoplay';
import '../assets/scss/Home/SwiperSlide.scss';
import PropTypes from 'prop-types'; // Import PropTypes

const SwiperSlideFunc = ({ text, images, slidesPerView = 3, autoplayDelay = 2500 }) => {
  return (
    <div className="introduce-2">
      <div>{text}</div>
      <Swiper
        spaceBetween={20}
        loop={true}
        slidesPerView={slidesPerView}
        autoplay={{
          delay: autoplayDelay, // Autoplay delay time (milliseconds)
          disableOnInteraction: false, // Keep autoplay running even after user interaction
        }}
        modules={[Autoplay, Navigation]} // Add the Autoplay and Navigation modules here
        onSlideChange={() => console.log('Slide changed')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }} // Enable navigation with custom button selectors
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img className="imgslide" src={img} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}

        {/* Custom navigation buttons */}
        <div className="swiper-button-prev">
          <FaArrowLeft className="icon" />
        </div>
        <div className="swiper-button-next">
          <FaArrowRight className="icon" />
        </div>
      </Swiper>
    </div>
  );
};

// PropTypes validation
SwiperSlideFunc.propTypes = {
  text: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  slidesPerView: PropTypes.number,
  autoplayDelay: PropTypes.number, // Validate autoplayDelay prop
};

export default SwiperSlideFunc;
