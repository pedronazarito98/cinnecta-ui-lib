import * as React from "react";
import { BlockStyles } from "./styles";
import { ReactNode } from "react";

export interface BlockProps {
  alignCenter?: boolean;
  alignEnd?: boolean;
  alignStart?: boolean;
  border?: boolean;
  column?: boolean;
  children: ReactNode;
  fullHeight?: boolean;
  justifyCenter?: boolean;
  justifyEnd?: boolean;
  justifyStart?: boolean;
  gray?: boolean;
  borderTop?: boolean;
  largePadding?: boolean;
  maxWidth?: number;
  minWidth?: number;
  noPadding?: boolean;
  rectangular?: boolean;
  transparent?: boolean;
  smallPadding?: boolean;
  relative?: boolean;
  css?: object;
}

export const Block = ({
  alignCenter,
  alignEnd,
  alignStart,
  border,
  column,
  children,
  fullHeight,
  justifyCenter,
  justifyEnd,
  justifyStart,
  gray,
  borderTop,
  largePadding,
  maxWidth,
  minWidth,
  noPadding,
  rectangular,
  transparent,
  smallPadding,
  relative,
  css,
}: BlockProps) => {
  return (
    <BlockStyles
      alignCenter={alignCenter}
      alignEnd={alignEnd}
      smallPadding={smallPadding}
      alignStart={alignStart}
      border={border}
      column={column}
      fullHeight={fullHeight}
      gray={gray}
      justifyCenter={justifyCenter}
      justifyEnd={justifyEnd}
      justifyStart={justifyStart}
      largePadding={largePadding}
      background={!transparent && !gray}
      radius={!rectangular}
      noPadding={noPadding}
      borderTop={borderTop}
      relative={relative}
      css={{
        maxWidth: maxWidth ? maxWidth * 15 : undefined,
        minWidth: minWidth ? minWidth * 15 : undefined,
        ...css,
      }}
    >
      {children}
    </BlockStyles>
  );
};
