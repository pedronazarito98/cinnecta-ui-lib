import { ContainerWrapper } from "./styles";
import PropTypes from "prop-types";

const propTypes = {
  container: PropTypes.bool,
  id: PropTypes.string,
  fullHeight: PropTypes.bool,
  gray: PropTypes.bool,
  smallContainer: PropTypes.bool,
  microContainer: PropTypes.bool,
  largeContainer: PropTypes.bool,
  largeVerticalSpacing: PropTypes.bool,
  smallVerticalSpacing: PropTypes.bool,
  verticalSpacing: PropTypes.bool,
  largeSpacing: PropTypes.bool,
  smallSpacing: PropTypes.bool,
  noSpacing: PropTypes.bool,
  backgroundColor: PropTypes.string,
  relative: PropTypes.bool,
  children: PropTypes.any,
  microSpacing: PropTypes.bool,
};

export const Wrapper = ({
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
Wrapper.propTypes = propTypes;
