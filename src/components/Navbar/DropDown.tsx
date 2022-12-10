import { useState } from 'react';

import arrowDownIcon from '../../assets/icons/icon-arrow-down.svg';
import arrowUpIcon from '../../assets/icons/icon-arrow-up.svg';

const DropDown = ({
  dropDownContent,
  children,
}: {
  dropDownContent: {}[];
  children: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDropDown = () => setIsOpen(true);
  const handleCloseDropDown = () => setIsOpen(false);

  return (
    <div className='lg:relative'>
      <button
        aria-label='click to open drop-down menu'
        onClick={() => {
          return !isOpen ? handleOpenDropDown() : handleCloseDropDown();
        }}
        className='capitalize text-mediumGray hover:text-almostBlack py-2 lg:py-0'
      >
        {children}
        <img
          src={isOpen ? arrowUpIcon : arrowDownIcon}
          className='inline ml-2'
          aria-hidden
        />
      </button>

      {isOpen ? (
        <div
          className='static z-40 lg:absolute lg:z-10 lg:shadow-2xl lg:bg-white 
          lg:border-opacity-10 lg:-right-4 lg:top-12 lg:mr-8 lg:p-3 lg:rounded-xl 
          lg:border lg:border-mediumGray'
        >
          {dropDownContent.map((item: any) => (
            <button
              key={item.text}
              onClick={handleCloseDropDown}
              className='capitalize flex gap-3 items-center justify-start w-full m-4
              text-mediumGray hover:text-almostBlack'
            >
              {item.icon ? <img src={item?.icon} aria-hidden /> : null}
              {item.text}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default DropDown;
