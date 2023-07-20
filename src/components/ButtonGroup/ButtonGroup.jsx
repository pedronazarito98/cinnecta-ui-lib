import React, { Children } from "react";
import { ButtonContainer, ButtonGroupStyle } from "./styles";
import PropTypes from "prop-types";

const propTypes = {
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
  noBorder: PropTypes.bool,
  children: PropTypes.node,
  grouped: PropTypes.bool,
  underlined: PropTypes.bool,
  groupedLast: PropTypes.bool,
  groupedFirst: PropTypes.bool,
};

export const ButtonGroup = ({
  soft,
  mono,
  shade,
  short,
  block,
  compact,
  inverse,
  grouped,
  primary,
  loading,
  children,
  disabled,
  fullWidth,
  noSpacing,
  secondary,
  underlined,
  groupedLast,
  transparent,
  rectangular,
  groupedFirst,
}) => {
  return (
    <ButtonGroupStyle
      loading={loading}
      fullWidth={fullWidth}
      block={block}
      grouped={grouped}
      groupedFirst={groupedFirst}
      groupedLast={groupedLast}
      noSpacing={noSpacing}
    >
      {Children.map(children, (child, i) => {
        const button = React.cloneElement(child, {
          compact: compact,
          disabled: disabled,
          inverse: inverse,
          rectangular: rectangular || (i > 0 && i < children.length - 1),
          grouped: true,
          groupedFirst: i === 0,
          groupedLast: i === children.length - 1,
          fullWidth: fullWidth,
          mono: mono,
          primary: primary,
          secondary: secondary,
          shade: shade,
          short: short,
          soft: soft,
          transparent: transparent,
          underlined: underlined,
        });

        return fullWidth ? <ButtonContainer>{button}</ButtonContainer> : button;
      })}
    </ButtonGroupStyle>
  );
};
ButtonGroup.propTypes = propTypes;
