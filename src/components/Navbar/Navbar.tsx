import logoIcon from '../../assets/icons/logo.svg';
import menuIcon from '../../assets/icons/icon-menu.svg';

const Navbar = () => {
  return (
    <header className='flex items-center justify-between px-4 py-6'>
      <img src={logoIcon} alt='logo icon for snap company' />
      <button aria-label='click to open mobile navbar'>
        <img src={menuIcon} alt='click to open mobile navbar' />
      </button>
    </header>
  );
};

export default Navbar;
