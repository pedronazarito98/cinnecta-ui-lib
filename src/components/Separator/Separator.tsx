import React, { ReactNode } from "react";
import { SeparatorStyles } from "./styles";

export interface SeparatorProps {
  children?: ReactNode;
  vertical?: boolean;
  noSpacing?: boolean;
  largeSpacing?: boolean;
  smallSpacing?: boolean;
}

export const Separator: React.FC<SeparatorProps> = ({
  children,
  vertical = false,
  noSpacing = false,
  largeSpacing = false,
  smallSpacing = false,
}) => {
  return (
    <SeparatorStyles
      vertical={vertical}
      noSpacing={noSpacing}
      horizontal={!vertical}
      verticalSmallSpacing={smallSpacing && vertical}
      horizontalSmallSpacing={smallSpacing && !vertical}
      verticalLargeSpacing={largeSpacing && vertical}
      horizontalLargeSpacing={largeSpacing && !vertical}
    >
      <SeparatorStyles lineVertical={vertical} line={!vertical} />
      {children && (
        <SeparatorStyles contentVertical={vertical} content={!vertical}>
          {children}
        </SeparatorStyles>
      )}
      <SeparatorStyles lineVertical={vertical} line={!vertical} />
    </SeparatorStyles>
  );
};
