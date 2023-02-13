// Menu Animation
// ==================================
export const menuAnimation = {
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

export const listStaggerAnimation = {
  open: {
    transition: {
      staggerChildren: 0.24,
      staggerDirection: 1,
    },
  },
};

export const linkStaggerAnimation = {
  open: { opacity: 1 },

  closed: {
    opacity: 0,
  },
};
// ==================================

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

export const scaleAnimation = {
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

export const fadeAnimation = {
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

export const slideAnimation = {
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
