import Navbar from '../components/Navbar/Navbar';
import heroImage from '../assets/images/image-hero-mobile.png';

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
    <section aria-label='Landing page for snap company'>
      <div>
        <Navbar />

        <img src={heroImage} role='presentation' />
      </div>

      <div className='mt-12 flex flex-col items-center justify-center px-4'>
        <div>
          <h1 className='text-almostBlack font-bold text-4xl text-center'>
            Make remote work
          </h1>

          <p className='text-center mt-4 text-mediumGray'>
            Get your team in sync, no matter the location. Streamline processes,
            create team rituals, and watch productivity soar.
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
              className='w-[20%]'
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
