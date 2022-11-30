import { useState } from 'react';

import arrowDownIcon from '../../assets/icons/icon-arrow-down.svg';

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
    <div className='relative'>
      <button
        aria-label='click to open drop-down menu'
        onClick={() => {
          return !isOpen ? handleOpenDropDown() : handleCloseDropDown();
        }}
        className='capitalize text-mediumGray hover:text-almostBlack'
      >
        {children}
        <img src={arrowDownIcon} className='inline ml-2' aria-hidden />
      </button>

      {isOpen ? (
        <div
          className='absolute z-40 shadow-2xl p-3 rounded-xl border border-mediumGray
          border-opacity-10 -right-4 top-12 bg-white mr-8'
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
