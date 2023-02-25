export const Diagonal = function (index) {
  return {
    hidden: {
      opacity: 0,
      translateX: -25,
      translateY: -50,
    },

    visible: {
      opacity: 1,
      translateX: 0,
      translateY: 0,
      transition: {
        duration: 0.45,
        delay: index * 0.3,
      },
    },
  };
};

export const Scale = {
  hidden: {
    scale: 0.6,
    opacity: 0,
  },

  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },

  exit: {
    scale: 0.6,
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export const Fade = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },

  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export const Slide = {
  hidden: {
    translateX: "-8vw",
    opacity: 0,
  },

  visible: {
    translateX: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },

  exit: {
    translateX: "8vw",
    opacity: 0,
    transition: {
      duration: 0.25,
    },
  },
};

export const PageFade = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 0.9,
    },
  },
};
