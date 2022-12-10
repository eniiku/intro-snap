import Navbar from '../components/Navbar/Navbar';
import heroImageMobile from '../assets/images/image-hero-mobile.png';
import heroImageDesktop from '../assets/images/image-hero-desktop.png';

const trustedClients = [
  {
    name: 'databiz',
    src: '/src/assets/icons/client-databiz.svg',
  },
  {
    name: 'audiophile',
    src: '/src/assets/icons/client-audiophile.svg',
  },
  {
    name: 'meet',
    src: '/src/assets/icons/client-meet.svg',
  },
  {
    name: 'maker',
    src: '/src/assets/icons/client-maker.svg',
  },
];
const Home = () => {
  return (
    <section
      aria-label='Landing page for snap company'
      className='md:px-8 md:py-6'
    >
      <div>
        <Navbar />

        <img src={heroImageMobile} role='presentation' className='md:hidden' />
      </div>

      <div className='md:flex md:justify-center md:items-center md:px-[8vw] md:py-[2vh]'>
        <div
          className='mt-12 flex flex-col items-center justify-center px-4
        md:grid md:grid-cols-2 md:gap-12'
        >
          <div className='md:flex md:flex-col md:justify-between md:items-start text-center'>
            <div>
              <h1
                className='text-almostBlack font-bold text-4xl md:text-7xl text-center
              md:text-left'
              >
                Make remote work
              </h1>

              <p className='text-center md:text-left mt-4 text-mediumGray md:w-4/6'>
                Get your team in sync, no matter the location. Streamline
                processes, create team rituals, and watch productivity soar.
              </p>
            </div>

            <button
              className='bg-almostBlack rounded-[1.3rem] py-4 px-6 font-bold 
              text-almostWhite my-6'
            >
              Learn more
            </button>

            <div
              aria-label='list of clients that trust in our work'
              className='flex justify-between items-center py-4'
            >
              {trustedClients.map((client) => (
                <img
                  key={client.name}
                  src={client.src}
                  alt={client.name}
                  className='w-[20%] md:w-[15%]'
                />
              ))}
            </div>
          </div>

          {/* Image for desktop view */}

          <div className='hidden md:block'>
            <img src={heroImageDesktop} role-='presentation' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
