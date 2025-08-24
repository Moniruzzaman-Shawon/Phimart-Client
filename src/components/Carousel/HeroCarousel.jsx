// HeroCarousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import book from '../../assets/images/book.png';
import fashion from '../../assets/images/fashion.png';
import technology from '../../assets/images/technology.png';


// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CarouselSlide from './CarouselSlide';

const HeroCarousel = () => {
  const slides = [
    {
      title: "This fine Pront book collections",
      subtitle: "Discount available.",
      image: book,
    },
    {
      title: "Discover New Arrivals",
      subtitle: "Latest trends in one place.",
      image: fashion,
    },
    {
      title: "Shop the Best Deals",
      subtitle: "Save more with our discounts.",
      image: technology,
    },
  ];

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <CarouselSlide 
            title={slide.title} 
            subtitle={slide.subtitle} 
            image={slide.image} 
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HeroCarousel;
