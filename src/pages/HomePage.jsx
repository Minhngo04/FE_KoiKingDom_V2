import img_koitour from '../assets/images/koi-farm.jpg';
import img_koifish from '../assets/images/Kohaku.jpg';
import img_farm from '../assets/images/FarmImage/4.jpg';
import SwiperSlideFunc from '../components/Home/SwiperSlide.jsx';
import 'swiper/css';
import 'swiper/css/autoplay';
import '../assets/scss/Home/HomePage.scss';
const HomePage = () => {
  const images_tour = Array(8).fill(img_koitour);
  const images_koifish = Array(8).fill(img_koifish);
  let text_tour = 'Best Tour Available seller';
  let text_koifish = 'Best KOI seller';

  return (
    <>
      <div className="homepage">
        <div className="introduce-1">
          <div className="information">
            <div>- Explore the world of Koi with our exclusive farm tours.</div>
            <div>- Experience Japan&apos;s top Koi farms, learn from experts, and see stunning fish up close.</div>
            <div>
              - Whether you&apos;re a Koi enthusiast or new to the hobby, our tours offer an unforgettable glimpse into
              Koi culture.
            </div>
          </div>
          <div>
            <img src={img_farm} alt="Koi Farm Tour" />
          </div>
        </div>

        <SwiperSlideFunc text={text_tour} images={images_tour} slidesPerView={3} autoplayDelay={2500} />
        <SwiperSlideFunc text={text_koifish} images={images_koifish} slidesPerView={3} autoplayDelay={2500} />
      </div>
    </>
  );
};

export default HomePage;
