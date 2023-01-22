import { Autoplay, Pagination, Navigation } from "swiper";

const SwiperConfig = function () {
  const manualStyles = {
    "--swiper-pagination-color": "#FFF",
    "--swiper-pagination-bullet-inactive-color": "#41444c",
    "--swiper-pagination-bullet-inactive-opacity": "1",
    "--swiper-pagination-bullet-size": "10px",
    "--swiper-pagination-bullet-horizontal-gap": "8px",
    "--swiper-pagination-bullet-top": "26px",
  };

  return {
    spaceBetween: 40,
    centeredSlides: true,
    navigation: true,
    modules: [Autoplay, Pagination, Navigation],
    style: manualStyles,
    autoplay: { delay: 3000, disableOnInteraction: false },
    pagination: {
      clickable: true,
    },
  };
};

export default SwiperConfig;
