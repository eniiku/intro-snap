import { useState } from 'react';

import DropDown from './DropDown';
import logoIcon from '../../assets/icons/logo.svg';
import menuIcon from '../../assets/icons/icon-menu.svg';
import closeMenuIcon from '../../assets/icons/icon-close-menu.svg';

const navLinks = ['features', 'company', 'careers', 'about'];

const featuresContent = [
  { icon: '/src/assets/icons/icon-todo.svg', text: 'todo list' },
  { icon: '/src/assets/icons/icon-calendar.svg', text: 'calender' },
  { icon: '/src/assets/icons/icon-reminders.svg', text: 'reminders' },
  { icon: '/src/assets/icons/icon-planning.svg', text: 'planning' },
];

const companyContent = [
  { text: 'history' },
  { text: 'our team' },
  { text: 'blog' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => setIsMenuOpen(true);
  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <header
      className='md:flex items-center md:gap-12 px-4 
        py-6 md:p-0'
    >
      <img
        src={logoIcon}
        alt='logo icon for snap company'
        className='inline-block my-auto'
      />

      <button
        aria-label='click to open mobile navbar'
        onClick={handleOpenMenu}
        className='md:hidden inline-block float-right my-auto'
      >
        <img src={menuIcon} role='presentation' />
      </button>

      {/* Navbar for Desktop view */}

      <nav className='hidden md:flex w-full items-center justify-between text-sm'>
        <ul className='flex gap-8'>
          <li>
            <DropDown dropDownContent={featuresContent}>feature</DropDown>
          </li>

          <li>
            <DropDown dropDownContent={companyContent}>company</DropDown>
          </li>

          {navLinks.slice(2).map((navLink) => (
            <li key={navLink} className='py-2 md:p-0'>
              <button
                className='capitalize text-mediumGray hover:text-almostBlack transition-all 
                duration-300 ease-in-out delay-75'
              >
                {navLink}
              </button>
            </li>
          ))}
        </ul>

        <div className='flex flex-col md:flex-row gap-4 md:gap-10 items-center justify-center'>
          <button
            className='py-2 text-center text-mediumGray hover:text-almostBlack transition-all 
            duration-300 ease-in-out delay-75'
          >
            Login
          </button>

          <button
            className='py-2 md:px-5 text-center border-2 border-mediumGray
              text-mediumGray w-full rounded-2xl md:rounded-xl hover:text-almostBlack
              hover:border-almostBlack transition-all duration-300 ease-in-out delay-75'
          >
            Register
          </button>
        </div>
      </nav>

      {/* Navbar for Mobile Layout */}

      {isMenuOpen ? (
        <div
          className='fixed z-30 top-0 bottom-0 right-0 w-8/12 bg-almostWhite flex 
          flex-col gap-4 p-6 mobile-nav-shadow'
        >
          <button
            className='self-end'
            aria-label='click to close mobile navbar'
            onClick={handleCloseMenu}
          >
            <img src={closeMenuIcon} role='presentation' />
          </button>

          <nav className='mt-2 transition-all duration-300 ease-in delay-300'>
            <ul>
              <li>
                <DropDown dropDownContent={featuresContent}>feature</DropDown>
              </li>

              <li>
                <DropDown dropDownContent={companyContent}>company</DropDown>
              </li>
              {navLinks.slice(2).map((navLink) => (
                <li key={navLink} className='py-2'>
                  <button
                    className='capitalize text-mediumGray hover:text-almostBlack'
                    transition-all
                    duration-300
                    ease-in
                    delay-out-75
                  >
                    {navLink}
                  </button>
                </li>
              ))}
            </ul>

            <div className='flex flex-col items-center justify-center'>
              <button
                className='py-2 text-center text-mediumGray hover:text-almostBlack hover:border-almostBlack 
                transition-all duration-300 ease-in-out delay-75'
              >
                Login
              </button>

              <button
                className='py-2 text-center border-2 border-mediumGray
              text-mediumGray w-full rounded-2xl hover:text-almostBlack hover:border-almostBlack 
                transition-all duration-300 ease-in-out delay-75'
              >
                Register
              </button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
