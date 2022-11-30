import arrowDownIcon from '../../assets/icons/icon-arrow-down.svg';

const DropDown = ({
  dropDownContent,
  children,
}: {
  dropDownContent: {}[];
  children: string;
}) => {
  return (
    <div>
      <div>
        {children} <img src={arrowDownIcon} aria-hidden />
      </div>

      <ul>
        {dropDownContent.map((item: any) => (
          <li key={item.text}>
            {item.icon ? <img src={item?.icon} aria-hidden /> : null}
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
