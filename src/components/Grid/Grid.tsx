import { GridContainer, GridWrapper } from "./styles";
import React from "react";

export interface GridProps {
  children?: React.ReactNode;
  right?: boolean;
  center?: boolean;
  fullHeight?: boolean;
  spaceBetween?: boolean;
  spaced?: boolean;
  top?: boolean;
  middle?: boolean;
  noWrap?: boolean;
  bottom?: boolean;
  stretch?: boolean;
  resetSpacing?: boolean;
  baseline?: boolean;
  resetLargeSpacing?: boolean;
  resetMicroSpacing?: boolean;
  resetSmallSpacing?: boolean;
  css?: any;
  vertical?: boolean;
}

export const Grid: React.FC<GridProps> = ({
  children,
  right,
  center,
  fullHeight,
  spaceBetween,
  spaced,
  top,
  middle,
  noWrap,
  bottom,
  stretch,
  resetSpacing,
  baseline,
  resetLargeSpacing,
  resetMicroSpacing,
  resetSmallSpacing,
  css,
  vertical,
}) => {
  return (
    <>
      <GridContainer fullHeight={fullHeight}>
        <GridWrapper
          fullHeight={fullHeight}
          right={right}
          center={center}
          baseline={baseline}
          spaceBetween={spaceBetween}
          spaced={spaced}
          top={top}
          middle={middle}
          noWrap={noWrap}
          bottom={bottom}
          stretch={stretch}
          resetSpacing={resetSpacing}
          resetLargeSpacing={resetLargeSpacing}
          resetMicroSpacing={resetMicroSpacing}
          resetSmallSpacing={resetSmallSpacing}
          vertical={vertical}
          css={css}
        >
          {children}
        </GridWrapper>
      </GridContainer>
    </>
  );
};
