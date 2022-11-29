import logoIcon from '../../assets/icons/logo.svg';
import menuIcon from '../../assets/icons/icon-menu.svg';
import closeMenuIcon from '../../assets/icons/icon-close-menu.svg';

const navLinks = ['features', 'company', 'careers', 'about'];

const Navbar = () => {
  return (
    <header className='flex items-center justify-between px-4 py-6'>
      <img src={logoIcon} alt='logo icon for snap company' />

      <button aria-label='click to open mobile navbar'>
        <img src={menuIcon} alt='click to open mobile navbar' />
      </button>

      <div
        className='fixed z-30 top-0 bottom-0 right-0 w-8/12 bg-almostWhite flex 
          flex-col gap-4 p-6 mobile-nav-shadow'
      >
        <button className='self-end'>
          <img src={closeMenuIcon} alt='click to close mobile navbar' />
        </button>

        <nav className='mt-2'>
          <ul>
            {navLinks.map((navLink) => (
              <li key={navLink} className='py-2'>
                <button className='capitalize text-mediumGray'>
                  {navLink}
                </button>
              </li>
            ))}
          </ul>

          <div className='flex flex-col items-center justify-center'>
            <button className='py-2 text-center text-mediumGray'>Login</button>

            <button
              className='py-2 text-center border-2 border-mediumGray
              text-mediumGray w-full rounded-2xl'
            >
              Register
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
