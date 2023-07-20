import { IconStyle, IconSvg } from "./styles";
import icons from "./iconsLib";
import PropTypes from "prop-types";

const propTypes = {
  huge: PropTypes.bool,
  inverse: PropTypes.bool,
  large: PropTypes.bool,
  micro: PropTypes.bool,
  mono: PropTypes.bool,
  muted: PropTypes.bool,
  name: PropTypes.oneOf([
    "arrow-left",
    "arrow-right",
    "arrow-up",
    "arrow-right-up",
    "arrow-right-down",
    "auto-location",
    "calendar",
    "check",
    "chevron-right",
    "clock",
    "delete",
    "download",
    "edit",
    "error",
    "exit",
    "filter",
    "globe",
    "info",
    "infographic",
    "import-location",
    "location",
    "lock",
    "map",
    "minus",
    "more",
    "plus",
    "search",
    "segment",
    "settings",
    "users",
    "vector",
  ]),
  noPadding: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  small: PropTypes.bool,
  smaller: PropTypes.bool,
  text: PropTypes.bool,
  css: PropTypes.any,
  color: PropTypes.any,
};

export const Icon = ({
  css,
  color,
  huge,
  inverse,
  large,
  micro,
  mono,
  muted,
  name,
  noPadding,
  primary,
  secondary,
  small,
  smaller,
  text,
}) => {
  const rootIcon =
    icons &&
    icons.props.children &&
    Array.isArray(icons.props.children) &&
    icons.props.children.find(
      (child) => child.props && child.props.id === `icon-${name}`
    );
  const icon = rootIcon && rootIcon.props && rootIcon.props.children;
  return (
    <IconStyle noPadding={noPadding} css={css}>
      <IconSvg
        huge={huge}
        inverse={inverse}
        large={large}
        micro={micro}
        mono={mono}
        muted={muted}
        primary={primary}
        secondary={secondary}
        css={color && { fill: color }}
        small={small}
        smaller={smaller}
        text={text}
        viewBox="0 0 512 512"
      >
        {icon}
      </IconSvg>
    </IconStyle>
  );
};
Icon.propTypes = propTypes;
