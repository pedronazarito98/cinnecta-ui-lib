import React from "react";
import { Shimmer } from "../Shimmer/Shimmer";
import { TextContainer } from "./styles";

export interface TextProps {
  bold?: boolean;
  center?: boolean;
  collapsed?: boolean;
  disabled?: boolean;
  error?: boolean;
  inline?: boolean;
  inverse?: boolean;
  loading?: boolean;
  large?: boolean;
  light?: boolean;
  micro?: boolean;
  mono?: boolean;
  muted?: boolean;
  negative?: boolean;
  nowrap?: boolean;
  positive?: boolean;
  primary?: boolean;
  right?: boolean;
  secondary?: boolean;
  small?: boolean;
  short?: boolean;
  shimmerHeight?: string;
  shimmerWidth?: string;
  tall?: boolean;
  children?: React.ReactNode;
  color?: any;
  css?: any;
  fontRaleway?: any;
}

export const Text: React.FC<TextProps> = ({
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
  color,
  css,
  fontRaleway,
}) => {
  if (small) {
    return (
      <TextContainer
        as="small"
        bold={bold}
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
