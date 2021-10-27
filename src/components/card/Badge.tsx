import React, { ReactNode } from "react";
import { IProduct } from "../../hooks/fetchData";

import logo from "../../assets/images/logo.svg";
import logoName from "../../assets/images/logoName.svg";

const Badge = ({ type, amount }: IProduct) => {
  let preText;
  let mainText;

  switch (type) {
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
    <div className="badge">
      <div className="logoContainer">
        <img className="logo" src={logo} alt="Greenspark logo" />
        <img className="logoName" src={logoName} alt="Greenspark logo title" />
      </div>
      <div className="textContainer">
        <div className="preText">{`This product ${preText}`}</div>
        <div className="mainText">{`${amount} ${
          mainText ? mainText : ""
        } ${type}`}</div>
      </div>
    </div>
  );
};

export default Badge;
