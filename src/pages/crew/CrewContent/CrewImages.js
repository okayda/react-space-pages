import { Swiper, SwiperSlide } from "swiper/react";
import SwiperConfig from "../SwiperConfig";

import "swiper/css";
import "swiper/css/pagination";
import "./CrewImages.scss";

import { CrewImgs } from "../CrewData";

const CrewImages = function ({ updateContent }) {
  const persons = CrewImgs.map(({ url, alt, id }) => {
    return (
      <SwiperSlide key={id}>
        <img src={require(`../../../assets/crew/${url}`)} alt={alt} />
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      onRealIndexChange={(e) => updateContent(e.activeIndex)}
      {...SwiperConfig()}
    >
      {persons}
    </Swiper>
  );
};

export default CrewImages;
