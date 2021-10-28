import React from "react";

interface IOptionListText {
  text: string;
  tooltip?: boolean;
}

const OptionListText = ({ text, tooltip }: IOptionListText) => {
  return <p className="optionListText">{text}</p>;
};

export default OptionListText;
