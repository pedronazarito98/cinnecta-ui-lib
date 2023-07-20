import { Shimmer } from "../Shimmer/Shimmer";
import { TextContainer } from "./styles";
import PropTypes from "prop-types";

const propTypes = {
  bold: PropTypes.bool,
  center: PropTypes.bool,
  collapsed: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  inline: PropTypes.bool,
  inverse: PropTypes.bool,
  loading: PropTypes.bool,
  large: PropTypes.bool,
  light: PropTypes.bool,
  micro: PropTypes.bool,
  mono: PropTypes.bool,
  muted: PropTypes.bool,
  negative: PropTypes.bool,
  nowrap: PropTypes.bool,
  positive: PropTypes.bool,
  primary: PropTypes.bool,
  right: PropTypes.bool,
  secondary: PropTypes.bool,
  small: PropTypes.bool,
  short: PropTypes.bool,
  shimmerHeight: PropTypes.string,
  shimmerWidth: PropTypes.string,
  tall: PropTypes.bool,
  children: PropTypes.any,
  title: PropTypes.any,
  color: PropTypes.any,
  css: PropTypes.any,
  fontRaleway: PropTypes.any,
};
export const Text = ({
  bold,
  center,
  children,
  collapsed,
  disabled,
  error,
  inline,
  inverse,
  loading,
  large,
  light,
  micro,
  mono,
  muted,
  negative,
  nowrap,
  positive,
  primary,
  right,
  secondary,
  short,
  shimmerHeight,
  shimmerWidth,
  small,
  tall,
  title,
  color,
  css,
  fontRaleway,
}) => {
  if (small) {
    return (
      <TextContainer
        as="small"
        bold={bold}
        title={children}
        center={center}
        collapsed={collapsed}
        disabled={disabled}
        error={error || negative}
        inverse={inverse}
        fontRaleway={fontRaleway}
        large={large}
        color={color}
        light={light}
        micro={micro}
        mono={mono}
        muted={muted}
        nowrap={nowrap}
        positive={positive}
        primary={primary}
        right={right}
        secondary={secondary}
        short={short}
        small={small}
        tall={tall}
        inline={inline}
        css={css}
      >
        {loading ? (
          <Shimmer
            height={shimmerHeight || "1ex"}
            width={shimmerWidth || "60%"}
          />
        ) : (
          children
        )}
      </TextContainer>
    );
  } else if (inline) {
    return (
      <TextContainer
        as="span"
        bold={bold}
        title={title}
        center={center}
        collapsed={collapsed}
        disabled={disabled}
        error={error || negative}
        inverse={inverse}
        fontRaleway={fontRaleway}
        large={large}
        color={color}
        light={light}
        micro={micro}
        mono={mono}
        muted={muted}
        nowrap={nowrap}
        positive={positive}
        primary={primary}
        right={right}
        secondary={secondary}
        short={short}
        small={small}
        tall={tall}
        inline={!loading}
        css={css}
      >
        {loading ? (
          <Shimmer
            height={shimmerHeight || "1ex"}
            width={shimmerWidth || "60%"}
          />
        ) : (
          children
        )}
      </TextContainer>
    );
  }
  return (
    <TextContainer
      bold={bold}
      title={children}
      center={center}
      collapsed={collapsed}
      disabled={disabled}
      error={error || negative}
      inverse={inverse}
      fontRaleway={fontRaleway}
      large={large}
      color={color}
      light={light}
      micro={micro}
      mono={mono}
      muted={muted}
      nowrap={nowrap}
      positive={positive}
      primary={primary}
      right={right}
      secondary={secondary}
      short={short}
      small={small}
      tall={tall}
      inline={inline}
      css={css}
    >
      {loading ? (
        <Shimmer
          height={shimmerHeight || "1ex"}
          width={shimmerWidth || "60%"}
        />
      ) : (
        children
      )}
    </TextContainer>
  );
};
Text.propTypes = propTypes;
