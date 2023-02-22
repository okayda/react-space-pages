export const MobileSlide = {
  hidden: {
    x: "100%",
  },

  visible: {
    x: 0,

    transition: {
      bounce: 0,
      duration: 0.25,
    },
  },

  exit: {
    x: "100%",

    transition: {
      duration: 0.3,
    },
  },
};

export const MobileListStagger = {
  open: {
    transition: {
      staggerChildren: 0.24,
      staggerDirection: 1,
    },
  },
};

export const MobileLinkStagger = {
  open: { opacity: 1 },

  closed: {
    opacity: 0,
  },
};
