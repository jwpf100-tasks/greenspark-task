import React, { ReactNode } from "react";

interface ICard {
  children?: React.ReactNode;
}

const Card = ({ children }: ICard) => {
  return <div className="card">{children}</div>;
};

export default Card;
