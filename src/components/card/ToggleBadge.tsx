interface IToggleBadge {
  active: boolean;
  onClick: (value: boolean) => void;
}

const ToggleBadge = ({ active, onClick }: IToggleBadge) => {
  const handleClick = () => {
    onClick(!active);
  };

  return (
    <div
      className={[
        active ? "toggle-switch toggle-switch--active" : "toggle-switch",
      ].join(" ")}
    >
      <div
        className={[active ? "switch switch--active" : "switch"].join(" ")}
        onClick={handleClick}
      />
    </div>
  );
};

export default ToggleBadge;
