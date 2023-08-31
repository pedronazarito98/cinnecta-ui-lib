import React, { ReactNode } from "react";
import { styled, units } from "../../theme/theme";
import type * as Stitches from "@stitches/react";

export interface CardProps {
  children: ReactNode;
  css?: Stitches.CSS;
}

export const Card: React.FC<CardProps> = ({ children, css }) => {
  return <CardStyle css={css}>{children}</CardStyle>;
};

const CardStyle = styled("div", {
  width: "100%",
  borderBottomLeftRadius: units(0.6),
  borderBottomRightRadius: units(0.6),
  "-webkit-box-shadow": "0px 10px 13px rgba(17, 38, 146, 0.05)",
  "box-shadow": "0px 10px 13px rgba(17, 38, 146, 0.05)",
});
