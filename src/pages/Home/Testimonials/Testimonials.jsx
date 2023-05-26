import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import {FaQuoteLeft} from 'react-icons/fa';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="my-20">
      <SectionTitle
        subHeading={"What Our Clients Say"}
        mainHeading={"TESTIMONIALS"}
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="mx-24  my-16 text-center">
              <Rating className="mx-auto" style={{ maxWidth: 180 }} value={review.rating} readOnly />
               <FaQuoteLeft className=" mx-auto text-gray-700 text-7xl my-8"> </FaQuoteLeft>
              <p className="my-4 w-10/12 mx-auto">{review?.details}</p>
              <h3 className="text-2xl text-orange-400">{review?.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
