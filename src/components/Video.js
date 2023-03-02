import { motion } from "framer-motion";
import Applied from "./animation/Applied";
import { VideoFade } from "./animation/Animation";

const Video = function ({ classes, video }) {
  return (
    <motion.video
      {...Applied(VideoFade)}
      autoPlay
      loop
      muted
      playsInline
      className={classes}
    >
      <source src={video} type="video/mp4" />
    </motion.video>
  );
};

export default Video;
