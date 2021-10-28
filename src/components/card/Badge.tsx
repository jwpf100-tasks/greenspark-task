import React, { ReactNode } from "react";
import { IProduct } from "../../hooks/fetchData";

import logo from "../../assets/images/logo.svg";
import logoName from "../../assets/images/logoName.svg";
import { Logo, LogoName } from "../../assets/images/svg";

interface IBadge {
  response: IProduct;
  badgeColor: string;
}

const Badge = ({ response, badgeColor }: IBadge) => {
  let preText;
  let mainText;

  switch (response.type) {
    case "plastic bottles":
      preText = "collects";
      break;
    case "trees":
      preText = "plants";
      break;
    case "carbon":
      preText = "offsets";
      mainText = "kgs of ";
      break;
    default:
  }

  return (
    <div className={["badge", `badge--${badgeColor}`].join(" ")}>
      <div className="logoContainer">
        <Logo color={badgeColor} />
      </div>
      <div className="textContainer">
        <div className="preText">{`This product ${preText}`}</div>
        <div className="mainText">{`${response.amount} ${
          mainText ? mainText : ""
        } ${response.type}`}</div>
      </div>
    </div>
  );
};

export default Badge;
