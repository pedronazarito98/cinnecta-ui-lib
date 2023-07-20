import { GridContainer, GridWrapper } from "./styles";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.any,
  right: PropTypes.bool,
  center: PropTypes.bool,
  fullHeight: PropTypes.bool,
  spaceBetween: PropTypes.bool,
  spaced: PropTypes.bool,
  top: PropTypes.bool,
  middle: PropTypes.bool,
  noWrap: PropTypes.bool,
  bottom: PropTypes.bool,
  stretch: PropTypes.bool,
  resetSpacing: PropTypes.bool,
  resetLargeSpacing: PropTypes.bool,
  resetMicroSpacing: PropTypes.bool,
  resetSmallSpacing: PropTypes.bool,
  vertical: PropTypes.bool,
  baseline: PropTypes.bool,
  css: PropTypes.any,
};

export const Grid = ({
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
Grid.propTypes = propTypes;
