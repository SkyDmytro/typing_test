import React from "react";
import "./styles/tooltip.style.scss";
import styled from "styled-components";

export const Tooltip = ({
  text,
  className,
}: {
  text: string;
  className: string;
}) => {
  const StyledDiv = styled.div`
    visibility: hidden;
    // display: none;
    position: absolute;
    top: 0px;
    text-wrap: nowrap;
    color: white;
    margin-top: 25px;
    left: 50%;
    left: 0px;
    padding: 5px;
  `;
  return <StyledDiv className={className}>{text}</StyledDiv>;
};
