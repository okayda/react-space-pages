const Video = function ({ classes, video }) {
  return (
    <video autoplay loop muted plays-inline className={classes}>
      <source src={video} type="video/mp4" />
    </video>
  );
};

export default Video;
