import React from "react";
import "./styles/tooltip.style.scss";

export const Tooltip = ({
  text,
  className,
}: {
  text: string;
  className: string;
}) => {
  return <div className={className}>{text}</div>;
};
