import React, { ReactNode, useState } from "react";
import { IProduct } from "../../hooks/fetchData";
import Badge from "./Badge";
import Checkbox from "./Checkbox";
import ColorSelectSection from "./ColorSelect";
import OptionListItem from "./OptionListItem";
import OptionListText from "./OptionListText";

interface ICard {
  response: IProduct;
  defaultColor: string;
}

const colorArray: string[] = ["green", "purple", "cream", "white", "black"];

const Card = ({ response, defaultColor }: ICard) => {
  const [badgeColor, setBadgeColor] = useState(defaultColor);
  return (
    <div className="card">
      <Badge response={response} badgeColor={badgeColor} />
      <OptionListItem>
        <OptionListText text={"Link to Public Profile"} />
        <Checkbox />
      </OptionListItem>
      <OptionListItem>
        <OptionListText text={"Badge colour"} />
        <ColorSelectSection
          badgeColor={badgeColor}
          setBadgeColor={setBadgeColor}
          colorArray={colorArray}
        />
      </OptionListItem>
      <OptionListItem>
        <OptionListText text={"Activate badge"} />
      </OptionListItem>
    </div>
  );
};

export default Card;
