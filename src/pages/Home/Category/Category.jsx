import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
const Category = () => {
  return (
    <section>
        <SectionTitle
        subHeading={'From 11:00am to 10:00pm'}
        mainHeading={'ORDER ONLINE'}
        > 

        </SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
          <h3 className="text-4xl text-center uppercase text-white -mt-20 title-font title-shadow">
            Salad
          </h3>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slider2} alt="" />
          <h3 className="text-4xl text-center uppercase text-white title-font title-shadow -mt-20">
            pizzas
          </h3>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slider3} alt="" />
          <h3 className="text-4xl text-center uppercase text-white -mt-20 title-font title-shadow">
            Soups
          </h3>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slider4} alt="" />
          <h3 className="text-4xl text-center uppercase text-white -mt-20 title-font title-shadow">
            desserts
          </h3>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slider5} alt="" />
          <h3 className="text-4xl text-center uppercase text-white -mt-20 title-font title-shadow">
            Salad
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
