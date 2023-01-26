const AddTrans = function (animation) {
  return {
    variants: animation,
    initial: "hidden",
    animate: "visible",
    exit: "exit",
  };
};

export default AddTrans;
