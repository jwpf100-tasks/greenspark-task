import InfoToolTip from "./InfoTooltip";

interface IOptionListText {
  text: string;
  tooltip?: boolean;
  tooltipText?: string;
  link?: string;
}

const OptionListText = ({
  text,
  tooltip,
  tooltipText,
  link,
}: IOptionListText) => {
  return !tooltip ? (
    <p className="optionListText">{text}</p>
  ) : (
    <p className="optionListText">
      {text} <InfoToolTip tooltipText={tooltipText} link={link} />
    </p>
  );
};

export default OptionListText;
