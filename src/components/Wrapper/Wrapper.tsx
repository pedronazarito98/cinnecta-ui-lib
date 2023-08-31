import React from "react";
import { ContainerWrapper } from "./styles";
export interface WrapperProps {
  container?: boolean;
  id?: string;
  fullHeight?: boolean;
  gray?: boolean;
  smallContainer?: boolean;
  microContainer?: boolean;
  largeContainer?: boolean;
  largeVerticalSpacing?: boolean;
  smallVerticalSpacing?: boolean;
  verticalSpacing?: boolean;
  largeSpacing?: boolean;
  smallSpacing?: boolean;
  noSpacing?: boolean;
  backgroundColor?: string;
  relative?: boolean;
  children: React.ReactNode;
  microSpacing?: boolean;
}

export const Wrapper: React.FC<WrapperProps> = ({
  container,
  fullHeight,
  id,
  gray,
  smallContainer,
  microContainer,
  largeContainer,
  largeVerticalSpacing,
  smallVerticalSpacing,
  verticalSpacing,
  largeSpacing,
  smallSpacing,
  noSpacing,
  relative,
  children,
  microSpacing,
}) => (
  <ContainerWrapper
    id={id}
    container={container || microContainer || smallContainer || largeContainer}
    default={container}
    micro={microContainer}
    small={smallContainer}
    large={largeContainer}
    fullHeight={fullHeight}
    gray={gray}
    verticalSpacingLarge={largeVerticalSpacing}
    verticalSpacingSmall={smallVerticalSpacing}
    verticalSpacing={verticalSpacing}
    spacingLarge={largeSpacing}
    spacingSmall={smallSpacing}
    spacingMicro={microSpacing}
    noSpacing={noSpacing}
    relative={relative}
  >
    {children}
  </ContainerWrapper>
);
