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
    <div>
      <button
        aria-label='click to open drop-down menu'
        onClick={() => {
          return !isOpen ? handleOpenDropDown() : handleCloseDropDown();
        }}
      >
        {children} <img src={arrowDownIcon} aria-hidden />
      </button>

      {isOpen ? (
        <div>
          {dropDownContent.map((item: any) => (
            <button key={item.text} onClick={handleCloseDropDown}>
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
