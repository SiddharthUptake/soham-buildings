import React, { useRef, useState } from "react";
import "./banner.css";
import video from "../../assets/Main.mp4";

const Banner = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div className={`banner-container ${isPlaying ? "video-playing" : ""}`} id="">
      <div className="video-wrapper">
        <video
          ref={videoRef}
          className="background-video"
          controls={true}
          autoPlay={isPlaying}
          loop
          muted
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {!isPlaying && (
          <>
            <a
              id="play-video"
              className="video-play-button"
              onClick={handlePlayPause}
            >
              <span></span>
            </a>

            <div id="video-overlay" class="video-overlay">
              <a class="video-overlay-close">&times;</a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Banner;
