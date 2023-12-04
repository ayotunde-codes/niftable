export const slideUpOpacityGlitchVariant = {
    initial: {
      y: "50%",
      opacity: 0,
    },
    animate: {
      y: "0%",
      opacity: [0, 0.7, 1, 0.7, 0.4, 1, 0.2, 1],
      transition: {
        duration: 0.35,
        easings: "easeInOut",
        y: {
          type: "spring",
          stiffness: 100,
          damping: 20,
        },
        opacity: {
          duration: 1.2,
          easings: "easeInOut",
        },
      },
    },
  };

  export const slideUpOpacityVariant =  {
    initial: {
      y: "50%",
      opacity: 0,
    },
    animate: {
      y: "0%",
      opacity: 1,
      transition: {
        delay: 1.2,
        y: {
          type: "spring",
          stiffness: 100,
          damping: 20,
        },
        opacity: {
          duration: 0.5,
          easings: "easeInOut",
        },
      },
    },
  };
  export const slideUpOpacityVariantWithoutDelay =  {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: "0%",
      opacity: 1,
      transition: {
        y: {
            duration: 0.5,
            ease: "easeInOut",
        },
        opacity: {
          duration: 0.5,
          easings: "easeInOut",
        },
      },
    },
  };

  export  const viewport = {
    margin: "-200px",
    once: true,
  };