import { useEffect, useState, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperConfig from "../SwiperConfig";

import "swiper/css";
import "swiper/css/pagination";
import "./CrewImages.scss";

import { CrewImgs } from "../CrewData";

const CrewImages = function ({ updateContent, setCount, count }) {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (count === null) return;

    swiperRef.current.swiper.slideTo(+count);
    setCount(null);
  }, [count]);

  const persons = CrewImgs.map(({ url, alt, id }) => {
    return (
      <SwiperSlide key={id}>
        <img src={require(`../../../assets/crew/${url}`)} alt={alt} />
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      ref={swiperRef}
      onRealIndexChange={(e) => updateContent(e.activeIndex)}
      {...SwiperConfig()}
    >
      {persons}
    </Swiper>
  );
};

export default CrewImages;
