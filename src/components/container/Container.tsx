import React, { ReactNode } from "react";

interface IContainer {
  children?: React.ReactNode;
}

const Container = ({ children }: IContainer) => {
  return <div className="container">{children}</div>;
};

export default Container;
