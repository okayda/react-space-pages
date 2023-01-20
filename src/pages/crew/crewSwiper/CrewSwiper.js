import { SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./CrewSwiper.scss";

import ParentSlider from "./ParentSlider";

import person1 from "../../../assets/crew/image-douglas-hurley.webp";
import person2 from "../../../assets/crew/image-mark-shuttleworth.webp";
import person3 from "../../../assets/crew/image-victor-glover.webp";
import person4 from "../../../assets/crew/image-anousheh-ansari.webp";

const CrewSwiper = function ({ setActiveContent }) {
  return (
    <>
      <ParentSlider setActiveContent={setActiveContent}>
        <SwiperSlide>
          <img src={person1} alt="Douglas Hurley" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={person2} alt="Mark Shuttleworth" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={person3} alt="Victor Glover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={person4} alt="Anousheh Ansari" />
        </SwiperSlide>
      </ParentSlider>
    </>
  );
};

export default CrewSwiper;
