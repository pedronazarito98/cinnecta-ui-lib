import { CellStyles } from "./styles";
import * as React from "react";

export interface CellProps {
  children?: React.ReactNode;
  size?: number;
  mediumSize?: number;
  largeSize?: number;
  xlargeSize?: number;
  columns?: number;
  columnsOnMedium?: number;
  columnsOnLarge?: number;
  columnsOnXlarge?: number;
  fit?: boolean;
  fitOnMedium?: boolean;
  fitOnLarge?: boolean;
  fitOnXlarge?: boolean;
  fullHeight?: boolean;
  fullHeightOnMedium?: boolean;
  fullHeightOnLarge?: boolean;
  fullHeightOnXlarge?: boolean;
  microSpacing?: boolean;
  smallSpacing?: boolean;
  largeSpacing?: boolean;
  noSpacing?: boolean;
  verticalSpacing?: boolean;
  microVerticalSpacing?: boolean;
  smallVerticalSpacing?: boolean;
  largeVerticalSpacing?: boolean;
  auto?: boolean;
  autoOnMedium?: boolean;
  autoOnLarge?: boolean;
  autoOnXlarge?: boolean;
  relative?: boolean;
  shrink?: boolean;
  shrinkOnMedium?: boolean;
  shrinkOnLarge?: boolean;
  shrinkOnXlarge?: boolean;
  grow?: boolean;
  growOnMedium?: boolean;
  growOnLarge?: boolean;
  growOnXlarge?: boolean;
  order?: number;
}

export const Cell: React.FC<CellProps> = ({
  children,
  size,
  mediumSize,
  largeSize,
  xlargeSize,
  columns,
  columnsOnMedium,
  columnsOnLarge,
  columnsOnXlarge,
  fit,
  fitOnMedium,
  fitOnLarge,
  fitOnXlarge,
  fullHeight,
  fullHeightOnMedium,
  fullHeightOnLarge,
  fullHeightOnXlarge,
  microSpacing,
  smallSpacing,
  largeSpacing,
  noSpacing,
  verticalSpacing,
  microVerticalSpacing,
  smallVerticalSpacing,
  largeVerticalSpacing,
  auto,
  autoOnMedium,
  autoOnLarge,
  autoOnXlarge,
  relative,
  shrink,
  shrinkOnMedium,
  shrinkOnLarge,
  shrinkOnXlarge,
  grow,
  growOnMedium,
  growOnLarge,
  growOnXlarge,
  order,
}) => {
  return (
    <>
      <CellStyles
        css={{
          size: size && size,
          mediumSize: mediumSize && mediumSize,
          largeSize: largeSize && largeSize,
          xlargeSize: xlargeSize && xlargeSize,
          columns: columns && columns,
          columnsOnMedium: columnsOnMedium && columnsOnMedium,
          columnsOnLarge: columnsOnLarge && columnsOnLarge,
          columnsOnXlarge: columnsOnXlarge && columnsOnXlarge,
          order: order && order,
        }}
        fit={fit}
        fitOnMedium={fitOnMedium}
        fitOnLarge={fitOnLarge}
        fitOnXlarge={fitOnXlarge}
        fullHeight={fullHeight}
        fullHeightOnMedium={fullHeightOnMedium}
        fullHeightOnLarge={fullHeightOnLarge}
        fullHeightOnXlarge={fullHeightOnXlarge}
        microSpacing={microSpacing}
        smallSpacing={smallSpacing}
        largeSpacing={largeSpacing}
        noSpacing={noSpacing}
        verticalSpacing={verticalSpacing}
        microVerticalSpacing={microVerticalSpacing}
        smallVerticalSpacing={smallVerticalSpacing}
        largeVerticalSpacing={largeVerticalSpacing}
        auto={auto}
        autoOnMedium={autoOnMedium}
        autoOnLarge={autoOnLarge}
        autoOnXlarge={autoOnXlarge}
        relative={relative}
        shrink={shrink}
        shrinkOnMedium={shrinkOnMedium}
        shrinkOnLarge={shrinkOnLarge}
        shrinkOnXlarge={shrinkOnXlarge}
        grow={grow}
        growOnMedium={growOnMedium}
        growOnLarge={growOnLarge}
        growOnXlarge={growOnXlarge}
      >
        {children}
      </CellStyles>
    </>
  );
};
