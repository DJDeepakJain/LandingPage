import React from 'react';
import YouTube from 'react-youtube';

const YouTubeVideo = () => {
  // Replace 'your-video-id' with the actual YouTube video ID you want to display
  const videoId = '9k99Gqucpw8';

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // You can add any additional YouTube player parameters here, e.g. autoplay: 1
      // autoplay: 1
    },
  };

  return (
    <div >
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default YouTubeVideo;