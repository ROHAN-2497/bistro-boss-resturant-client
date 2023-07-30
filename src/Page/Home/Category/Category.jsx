import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitles from "../../../Components/SectionTitles/SectionTitles";
const Category = () => {
  return (
    <section>
      <SectionTitles
      subHeading={"from 11.00am to 10.00pm"}
      heading={"ORDER ONLINE"}
      ></SectionTitles>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24 mt-24"
      >
        <SwiperSlide>
          <img src={slide1} />
          <h3 className="text-4xl text-center text-white -mt-16">SALADS</h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide2} />
          <h3 className="text-4xl text-center text-white -mt-16">PIZZA</h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide3} />
          <h3 className="text-4xl text-center text-white -mt-16">SOUPS</h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide4} />
          <h3 className="text-4xl text-center text-white -mt-16">DESERT</h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide5} />
          <h3 className="text-4xl text-center text-white -mt-16"></h3>
          <h3 className="text-4xl text-center text-white -mt-16">SALADS</h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide5} />
        </SwiperSlide>
        {/* <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </section>
  );
};

export default Category;
