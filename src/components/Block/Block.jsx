import { BlockStyles } from "./styles";

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
}) => {
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
        maxWidth: maxWidth ? maxWidth * 15 : null,
        minWidth: minWidth ? minWidth * 15 : null,
        ...css,
      }}
    >
      {children}
    </BlockStyles>
  );
};
