import React, { useEffect, useState } from 'react'
import useMovieById from '../custom_hooks/useMovieById'
import { useSelector } from 'react-redux';

function VideoBackground({ movieId, bool }) {
  const trailer = useSelector((state) => state.movieApp.trailerMovie);
  useMovieById(movieId);

  const initialVideo = "https://www.youtube-nocookie.com/embed/itnqEauWQZM?si=UWee8uppu2jF37yy&controls=0&start=34&autoplay=1&mute=1&loop=1&playlist=itnqEauWQZM";
  const [videoSrc, setVideoSrc] = useState(initialVideo);

  useEffect(() => {
    // If it's the popup dialog (bool is true), show the fetched movie trailer.
    // If it's the main background (bool is false/undefined), keep the user's custom initial video.
    if (trailer?.key && bool) {
      setVideoSrc(
        `https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&loop=1&playlist=${trailer.key}`
      );
    }
  }, [trailer, bool]);

  return (
    <div className="w-full overflow-hidden relative z-0">
      <iframe
        className={`${bool ? "w-full aspect-video" : "w-screen aspect-video"}`}
        src={videoSrc}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  )
}

export default VideoBackground
