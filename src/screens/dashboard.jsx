import VideoThumb from '../images/hero.png';
import ModalVideo from '../component/modalVedio';
import Video from '../video/video.mp4';

export default function Dashboard() {
  // const openNewTab = (url) => {
  //   window.open(url, '_blank');
  // };

  return (
    <section >
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
       
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h3 className="text-2xl md:text-4xl font-extrabold leading-tighter  mb-2"> No More Candidate Ghosting. </h3>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out"> Let's Make Work Commitments <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-yellow-400">Real Again.</span></h2>
            <div className="max-w-3xl mx-auto">
              <cite className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Our Platform helps transform the future of hiring by maintaining transparent and immutable applicants' data forever in the <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">blockchain.</span></cite>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300" style={{ margin: '50px' }}>
                <div>
                  {/* class="btn-sm rounded-md text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3 flex items-center p-2" */}
                  <a className="btn text-white rounded-lg  bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0 p-4" target="_blank" href="http://app.offerghosting.com/register" rel="noopener noreferrer">Start free trial</a>
                </div>
                <div>
                  <a className="btn text-white rounded-lg  bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4 p-4" target="_blank" href="http://app.offerghosting.com" rel="noopener noreferrer">Learn more about Alpha Launch</a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <ModalVideo
        thumb={VideoThumb}
        thumbWidth={768}
        thumbHeight={432}
        thumbAlt="Modal video thumbnail"
        video={Video}
        videoWidth={1920}
        videoHeight={1080}
      />
        </div>
      </div>
    </section>
  );
}
