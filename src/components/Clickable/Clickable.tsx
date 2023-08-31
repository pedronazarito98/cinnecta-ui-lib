import React, { MouseEvent } from "react";
import { ClickableStyle } from "./styles";

export interface ClickableProps {
  children: React.ReactNode;
  disabled?: boolean;
  inline?: boolean;
  inverse?: boolean;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  rectangular?: boolean;
}

export const Clickable: React.FC<ClickableProps> = ({
  children,
  disabled,
  inline,
  inverse,
  onClick,
  rectangular,
}) => {
  return inline ? (
    <ClickableStyle
      onClick={onClick}
      disabled={disabled}
      inverse={inverse}
      rectangular={rectangular}
    >
      {children}
    </ClickableStyle>
  ) : (
    <ClickableStyle
      as="div"
      onClick={onClick}
      disabled={disabled}
      inverse={inverse}
      rectangular={rectangular}
    >
      {children}
    </ClickableStyle>
  );
};
