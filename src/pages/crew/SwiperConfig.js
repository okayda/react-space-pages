import { Autoplay, Pagination, Navigation } from "swiper";

const SwiperConfig = function () {
  return {
    slidesPerView: 1,
    spaceBetween: 120,
    centeredSlides: true,

    navigation: true,
    modules: [Autoplay, Pagination, Navigation],
    autoplay: { delay: 3000, disableOnInteraction: false },
    pagination: {
      clickable: true,
    },
  };
};

export default SwiperConfig;
