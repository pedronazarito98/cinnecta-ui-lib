import React, { FC } from "react";
import { IconStyle, IconSvg } from "./styles";
import { IconLibrary } from "./iconsLib";

export interface IconProps {
  css?: any;
  color?: any;
  huge?: boolean;
  inverse?: boolean;
  large?: boolean;
  micro?: boolean;
  mono?: boolean;
  muted?: boolean;
  name:
    | "arrow-left"
    | "arrow-right"
    | "arrow-up"
    | "arrow-right-up"
    | "arrow-right-down"
    | "auto-location"
    | "calendar"
    | "check"
    | "chevron-right"
    | "clock"
    | "delete"
    | "download"
    | "edit"
    | "error"
    | "exit"
    | "filter"
    | "globe"
    | "info"
    | "infographic"
    | "import-location"
    | "location"
    | "lock"
    | "map"
    | "minus"
    | "more"
    | "plus"
    | "search"
    | "segment"
    | "settings"
    | "users"
    | "vector"
    | string;
  noPadding?: boolean;
  primary?: boolean;
  secondary?: boolean;
  small?: boolean;
  smaller?: boolean;
  text?: boolean;
  icons?: [];
  children?: React.ReactNode;
}

export const Icon: FC<IconProps> = ({
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
  icons,
  children,
}) => {
  const rootIcon =
    icons &&
    children &&
    Array.isArray(children) &&
    children.find((child) => child.props && child.props.id === `icon-${name}`);
  const icon: React.ReactNode =
    rootIcon && rootIcon.props && rootIcon.props.children;

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
