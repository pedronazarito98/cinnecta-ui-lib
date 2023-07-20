import Loader from "./Loader";
import Shimmer from "./Shimmer";
import { ButtonContainer, ButtonContent, ButtonLoader } from "./styles";
import { WrapperShimmer } from "../Input/styles";

import PropTypes from "prop-types";

const propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  fullWidth: PropTypes.bool,
  block: PropTypes.bool,
  compact: PropTypes.bool,
  inverse: PropTypes.bool,
  mono: PropTypes.bool,
  noSpacing: PropTypes.bool,
  soft: PropTypes.bool,
  primary: PropTypes.bool,
  rectangular: PropTypes.bool,
  secondary: PropTypes.bool,
  shade: PropTypes.bool,
  shimmer: PropTypes.bool,
  short: PropTypes.bool,
  transparent: PropTypes.bool,
  type: PropTypes.string,
  underlined: PropTypes.bool,
  noBorder: PropTypes.bool,
  children: PropTypes.node,
  grouped: PropTypes.bool,
  groupedFirst: PropTypes.bool,
  groupedLast: PropTypes.bool,
};

const defaultProps = {
  type: "button",
};

export const TabButton = ({
  active,
  children,
  disabled,
  loading,
  fullWidth,
  block,
  compact,
  inverse,
  grouped,
  groupedFirst,
  groupedLast,
  mono,
  noSpacing,
  shade,
  soft,
  primary,
  rectangular,
  secondary,
  shimmer,
  short,
  transparent,
  type,
  underlined,
  noBorder,

  ...props
}) => {
  return (
    <ButtonContainer
      {...props}
      active={active}
      loading={loading}
      fullWidth={fullWidth}
      block={block}
      compact={compact}
      disabled={disabled || loading}
      inverse={inverse}
      grouped={grouped}
      groupedFirst={groupedFirst}
      groupedLast={groupedLast}
      mono={mono}
      noSpacing={noSpacing}
      soft={soft}
      primary={primary}
      rectangular={rectangular}
      secondary={secondary}
      shade={shade}
      short={short}
      transparent={transparent}
      underlined={underlined}
      noBorder={noBorder}
      type={type}
    >
      {loading && shimmer && (
        <WrapperShimmer>
          <Shimmer height="100%" width="100%" />
        </WrapperShimmer>
      )}
      <ButtonContent loading={loading} fullWidth={fullWidth}>
        {children}
      </ButtonContent>
      {loading && (
        <ButtonLoader>
          {!shimmer && (
            <Loader
              small
              primary={inverse && soft}
              secondary={secondary}
              mono={mono}
            />
          )}
        </ButtonLoader>
      )}
    </ButtonContainer>
  );
};
TabButton.propTypes = propTypes;
TabButton.defaultProps = defaultProps;
