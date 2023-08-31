import React, { ReactNode } from "react";
import { styled, units } from "../../theme/theme";
import { withBreakpoints } from "../Responsive/Responsive";
import { CSS } from "@stitches/react";

interface Breakpoint {
  name: string;
  value: number;
}
export interface ResponsiveContext {
  breakpoint: Breakpoint;
  isGreaterThan: (value: string | number) => boolean;
  isLessThan: (value: string | number) => boolean;
}

export interface SpacingProps {
  bottom?: number;
  bottomLargeAndAbove?: number;
  bottomMediumAndAbove?: number;
  children?: ReactNode;
  horizontal?: number;
  horizontalLargeAndAbove?: number;
  horizontalMediumAndAbove?: number;
  inline?: boolean;
  inside?: boolean;
  left?: number;
  leftLargeAndAbove?: number;
  css?: CSS;
  leftMediumAndAbove?: number;
  right?: number;
  rightLargeAndAbove?: number;
  rightMediumAndAbove?: number;
  top?: number;
  topLargeAndAbove?: number;
  topMediumAndAbove?: number;
  vertical?: number;
  verticalLargeAndAbove?: number;
  verticalMediumAndAbove?: number;
  isGreaterThan: (value: string | number) => boolean;
}

const SpacingWithBreakpoints: React.FC<SpacingProps> = ({
  bottom,
  bottomLargeAndAbove,
  bottomMediumAndAbove,
  children,
  horizontal,
  horizontalLargeAndAbove,
  horizontalMediumAndAbove,
  inline,
  inside,
  left,
  leftLargeAndAbove,
  leftMediumAndAbove,
  right,
  rightLargeAndAbove,
  rightMediumAndAbove,
  top,
  topLargeAndAbove,
  topMediumAndAbove,
  vertical,
  verticalLargeAndAbove,
  verticalMediumAndAbove,
  isGreaterThan,
}) => {
  const getTopMargin = () => {
    if (
      (topLargeAndAbove != null || verticalLargeAndAbove != null) &&
      isGreaterThan("large")
    ) {
      return topLargeAndAbove || verticalLargeAndAbove;
    } else if (
      (topMediumAndAbove != null || verticalMediumAndAbove != null) &&
      isGreaterThan("medium")
    ) {
      return topMediumAndAbove || verticalMediumAndAbove;
    } else {
      return top || vertical;
    }
  };

  const getRightMargin = () => {
    if (
      (rightLargeAndAbove != null || horizontalLargeAndAbove != null) &&
      isGreaterThan("large")
    ) {
      return rightLargeAndAbove || horizontalLargeAndAbove;
    } else if (
      (rightMediumAndAbove != null || horizontalMediumAndAbove != null) &&
      isGreaterThan("medium")
    ) {
      return rightMediumAndAbove || horizontalMediumAndAbove;
    } else {
      return right || horizontal;
    }
  };

  const getBottomMargin = () => {
    if (
      (bottomLargeAndAbove != null || verticalLargeAndAbove != null) &&
      isGreaterThan("large")
    ) {
      return bottomLargeAndAbove || verticalLargeAndAbove;
    } else if (
      (bottomMediumAndAbove != null || verticalMediumAndAbove != null) &&
      isGreaterThan("medium")
    ) {
      return bottomMediumAndAbove || verticalMediumAndAbove;
    } else {
      return bottom || vertical;
    }
  };

  const getLeftMargin = () => {
    if (
      (leftLargeAndAbove != null || horizontalLargeAndAbove != null) &&
      isGreaterThan("large")
    ) {
      return leftLargeAndAbove || horizontalLargeAndAbove;
    } else if (
      (leftMediumAndAbove != null || horizontalMediumAndAbove != null) &&
      isGreaterThan("medium")
    ) {
      return leftMediumAndAbove || horizontalMediumAndAbove;
    } else {
      return left || horizontal;
    }
  };

  const topMargin = getTopMargin();
  const rightMargin = getRightMargin();
  const bottomMargin = getBottomMargin();
  const leftMargin = getLeftMargin();

  return inline ? (
    <SpanStyled
      css={{
        [inside ? "paddingTop" : "marginTop"]: topMargin
          ? units(topMargin)
          : null,
        [inside ? "paddingRight" : "marginRight"]: rightMargin
          ? units(rightMargin)
          : null,
        [inside ? "paddingBottom" : "marginBottom"]: bottomMargin
          ? units(bottomMargin)
          : null,
        [inside ? "paddingLeft" : "marginLeft"]: leftMargin
          ? units(leftMargin)
          : null,
        display: "inline-block",
      }}
    >
      {children}
    </SpanStyled>
  ) : (
    <DivStyled
      css={{
        [inside ? "paddingTop" : "marginTop"]: topMargin
          ? units(topMargin)
          : null,
        [inside ? "paddingRight" : "marginRight"]: rightMargin
          ? units(rightMargin)
          : null,
        [inside ? "paddingBottom" : "marginBottom"]: bottomMargin
          ? units(bottomMargin)
          : null,
        [inside ? "paddingLeft" : "marginLeft"]: leftMargin
          ? units(leftMargin)
          : null,
        width: "100%",
      }}
    >
      {children}
    </DivStyled>
  );
};

export const Spacing = withBreakpoints(SpacingWithBreakpoints);

const SpanStyled = styled("span");
const DivStyled = styled("div");
