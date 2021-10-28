import React from "react";

interface IOptionListItem {
  children?: React.ReactNode;
}

const OptionListItem = ({ children }: IOptionListItem) => {
  return <div className="optionListItem">{children}</div>;
};

export default OptionListItem;
