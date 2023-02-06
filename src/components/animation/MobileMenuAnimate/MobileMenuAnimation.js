export const sideSlide = {
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

export const sideListStaggler = {
  open: {
    transition: {
      staggerChildren: 0.24,
      staggerDirection: 1,
    },
  },
};

export const sideLinkStagger = {
  open: { opacity: 1 },

  closed: {
    opacity: 0,
  },
};
