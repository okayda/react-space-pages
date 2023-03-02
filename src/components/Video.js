const Video = function ({ classes, video }) {
  return (
    <video autoPlay loop muted playsInline className={classes}>
      <source src={video} type="video/mp4" />
    </video>
  );
};

export default Video;
