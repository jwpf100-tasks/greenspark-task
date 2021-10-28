interface IColorSelectSection {
  badgeColor: string;
  setBadgeColor: (value: string) => void;
  colorArray: string[];
}

const ColorSelectSection = ({
  badgeColor,
  setBadgeColor,
  colorArray,
}: IColorSelectSection) => {
  return (
    <div className="colorSelectSection">
      {colorArray.map((color) => (
        <ColorSelectBox
          color={color}
          badgeColor={badgeColor}
          onClick={setBadgeColor}
        />
      ))}
    </div>
  );
};

interface colorSelectBoxProps {
  color: string;
  badgeColor: string;
  onClick: (value: string) => void;
}

const ColorSelectBox = ({
  color,
  badgeColor,
  onClick,
}: colorSelectBoxProps) => {
  const handleClick = () => {
    onClick(color);
  };

  return (
    <div
      className={[
        badgeColor === color ? "colorSelectBox--active" : "colorSelectBox",
        `colorSelectBox--${color}`,
      ].join(" ")}
      onClick={handleClick}
    ></div>
  );
};

export default ColorSelectSection;
