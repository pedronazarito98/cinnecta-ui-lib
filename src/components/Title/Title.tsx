import React from "react";
import { Shimmer } from "../Shimmer/Shimmer";
import { TitleHeader, TitleStyles } from "./styles";

export interface TitleProps {
  alternativeFont?: boolean;
  block?: boolean;
  center?: boolean;
  children?: React.ReactNode;
  defaultFont?: boolean;
  inline?: boolean;
  inverse?: boolean;
  loading?: boolean;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  light?: boolean;
  mono?: boolean;
  muted?: boolean;
  negative?: boolean;
  noBottomSpacing?: boolean;
  noSpacing?: boolean;
  noTopSpacing?: boolean;
  positive?: boolean;
  primary?: boolean;
  regular?: boolean;
  right?: boolean;
  secondary?: boolean;
  short?: boolean;
  tall?: boolean;
  title?: string;
  truncate?: boolean;
  shimmerWidth?: string;
}

const defaultProps: TitleProps = {
  level: 1,
};

export const Title: React.FC<TitleProps> = ({
  alternativeFont,
  block,
  center,
  children,
  defaultFont,
  inline,
  inverse,
  loading,
  level,
  light,
  mono,
  muted,
  negative,
  noBottomSpacing,
  noSpacing,
  noTopSpacing,
  positive,
  primary,
  regular,
  right,
  secondary,
  shimmerWidth,
  short,
  tall,
  title,
  truncate,
}) => {
  const content = (level: number = 1): JSX.Element => {
    const verify = {
      1: "h1",
      2: "h2",
      3: "h3",
      4: "h4",
      5: "h5",
      6: "h6",
    };
    return (
      <TitleHeader
        as={verify[level]}
        block={block}
        flex={!block}
        truncate={truncate}
      >
        {children ? children : title}
      </TitleHeader>
    );
  };

  return (
    <TitleStyles
      alternativeFont={alternativeFont}
      center={center}
      defaultFont={defaultFont}
      inline={inline}
      inverse={inverse}
      light={light}
      mono={mono}
      muted={muted}
      negative={negative}
      positive={positive}
      primary={primary}
      regular={regular}
      right={right}
      secondary={secondary}
      short={short}
      tall={tall}
      noTopSpacing={noTopSpacing || noSpacing}
      noBottomSpacing={noBottomSpacing || noSpacing}
      level1={level === 1}
      level2={level === 2}
      level3={level === 3}
      level4={level === 4}
      level5={level === 5}
      level6={level === 6}
    >
      {loading ? (
        <Shimmer height="1ex" width={shimmerWidth || "60%"} />
      ) : (
        content()
      )}
    </TitleStyles>
  );
};

Title.defaultProps = defaultProps;
