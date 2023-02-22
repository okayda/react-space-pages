export const WideSlide = {
  hidden: {
    x: "100%",
  },

  visible: {
    x: 0,

    transition: {
      bounce: 0,
      delay: 0.4,
      duration: 0.85,
    },
  },
};

export const WideListStagger = {
  open: {
    transition: {
      delayChildren: 1.2,

      staggerChildren: 0.4,
      staggerDirection: 1,
    },
  },
};

export const WideLinkStagger = {
  closed: {
    opacity: 0,
    y: "-20%",
  },

  open: {
    opacity: 1,
    y: 0,
  },
};
