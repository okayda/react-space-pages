// Mobile Destination Animation
export const imgAnimation = {
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

export const linksAnimation = function (index) {
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

export const contentAnimation = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },

  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.35,
    },
  },

  exit: {
    x: "100vw",
    opacity: 0,
    transition: {
      duration: 0.35,
    },
  },
};

export const listAnimation = {
  hidden: {
    y: "20vh",
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.55,
    },
  },
};
