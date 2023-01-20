import { useState } from "react";
import { Swiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

const ParentSlider = function ({ children, setActiveContent }) {
  const manualStyles = {
    "--swiper-pagination-color": "#FFF",
    "--swiper-pagination-bullet-inactive-color": "#41444c",
    "--swiper-pagination-bullet-inactive-opacity": "1",
    "--swiper-pagination-bullet-size": "10px",
    "--swiper-pagination-bullet-horizontal-gap": "9px",
    "--swiper-pagination-bullet-top": "26px",
  };

  const swiperConfig = {
    onRealIndexChange: (e) => setActiveContent(e.activeIndex), // Getting current slider
    spaceBetween: 40, // Gap Distance
    centeredSlides: true,
    navigation: true,
    modules: [Autoplay, Pagination, Navigation],
    style: manualStyles,
    autoplay: { delay: 2500, disableOnInteraction: false },
    pagination: {
      clickable: true,
    },
  };

  return <Swiper {...swiperConfig}>{children}</Swiper>;
};

export default ParentSlider;
