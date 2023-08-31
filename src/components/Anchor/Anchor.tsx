import * as React from "react";
import { Link } from "react-router-dom";
import { AnchorStyles } from "./styles";

export interface AnchorProps {
  block?: boolean;
  disabled?: boolean;
  external?: boolean;
  href?: string;
  loading?: boolean;
  openInNewWindow?: boolean;
  target?: string;
  onClick?: () => void;
  noHoverUnderline?: boolean;
  children?: React.ReactNode;
}

export const Anchor: React.FC<AnchorProps> = ({
  children,
  disabled,
  external,
  href,
  openInNewWindow,
  onClick,
  target,
  noHoverUnderline,
  ...props
}) => {
  return !external && href ? (
    <AnchorStyles
      {...props}
      underlined={!noHoverUnderline}
      onClick={onClick}
      href={href}
      disabled={disabled}
      target={openInNewWindow ? "_blank" : "_self"}
    >
      {children}
    </AnchorStyles>
  ) : (
    <AnchorStyles
      {...props}
      underlined={!noHoverUnderline}
      href={href}
      onClick={onClick}
      target={target}
    >
      {children}
    </AnchorStyles>
  );
};
