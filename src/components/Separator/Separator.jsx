import React from "react";
import { SeparatorStyles } from "./styles";

export const Separator = ({
  children,
  vertical,
  noSpacing,
  largeSpacing,
  smallSpacing,
  css,
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
      css={css}
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
