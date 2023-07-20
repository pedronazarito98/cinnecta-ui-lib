import { Shimmer } from "../Shimmer/Shimmer";
import { TitleHeader, TitleStyles } from "./styles";
import PropTypes from "prop-types";

const propTypes = {
  alternativeFont: PropTypes.bool,
  center: PropTypes.bool,
  defaultFont: PropTypes.bool,
  inline: PropTypes.bool,
  inverse: PropTypes.bool,
  loading: PropTypes.bool,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  light: PropTypes.bool,
  mono: PropTypes.bool,
  muted: PropTypes.bool,
  negative: PropTypes.bool,
  noBottomSpacing: PropTypes.bool,
  noSpacing: PropTypes.bool,
  noTopSpacing: PropTypes.bool,
  positive: PropTypes.bool,
  primary: PropTypes.bool,
  regular: PropTypes.bool,
  right: PropTypes.bool,
  secondary: PropTypes.bool,
  short: PropTypes.bool,
  tall: PropTypes.bool,
  title: PropTypes.string,
  truncate: PropTypes.bool,
  shimmerWidth: PropTypes.string,
  children: PropTypes.any,
  block: PropTypes.bool,
};

const defaultProps = {
  level: 1,
};

export const Title = ({
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
  const content = (level = 1) => {
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
      level5={level == 5}
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
Title.propTypes = propTypes;
Title.defaultProps = defaultProps;
