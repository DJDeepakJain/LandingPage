import React, { useState, useRef } from 'react';

const ModalVideo = ({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  video,
  videoWidth,
  videoHeight,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef(null);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      {/* Video thumbnail */}
      <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
        <div className="flex flex-col justify-center">
          <img src={thumb} alt={thumbAlt} width={thumbWidth} height={thumbHeight} />
          {/* You can add any additional elements inside the thumbnail container */}
        </div>
        <button
          className="absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg"
          onClick={openModal}
        >
          <svg
            className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 shrink-0"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
            <path d="M10 17l6-5-6-5z" />
          </svg>
          <span className="ml-3">Watch the full video (2 min)</span>
        </button>
      </div>
      {/* End: Video thumbnail */}

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[99999] bg-black bg-opacity-75 flex items-center justify-center">
          <div className="modal-content max-w-6xl mx-auto">
            <button
              className="absolute top-0 right-0 p-4 text-white text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <video ref={videoRef} width={videoWidth} height={videoHeight} loop controls>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
      {/* End: Modal */}
    </div>
  );
};

export default ModalVideo;
