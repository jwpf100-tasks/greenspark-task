import InfoToolTip from "./InfoTooltip";

interface IOptionListText {
  text: string;
  tooltip?: boolean;
}

const OptionListText = ({ text, tooltip }: IOptionListText) => {
  return !tooltip ? (
    <p className="optionListText">{text}</p>
  ) : (
    <p className="optionListText">
      {text}{" "}
      <InfoToolTip
        tooltipText={
          "This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it."
        }
        link={"View Public Profile"}
      />
    </p>
  );
};

export default OptionListText;
