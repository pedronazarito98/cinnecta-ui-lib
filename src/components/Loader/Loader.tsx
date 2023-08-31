import { LoaderBall, LoaderStyles } from "./styles";
import * as React from "react";

export interface LoaderProps {
  small?: boolean;
  large?: boolean;
  secondary?: boolean;
  primary?: boolean;
  mono?: boolean;
}

export const Loader: React.FC<LoaderProps> = ({
  small,
  large,
  secondary,
  primary,
  mono,
}) => (
  <LoaderStyles>
    <LoaderBall
      mono={mono}
      large={large}
      small={small}
      primary={primary}
      secondary={secondary}
    />

    <LoaderBall
      second
      mono={mono}
      small={small}
      large={large}
      primary={primary}
      secondary={secondary}
    />

    <LoaderBall
      third
      mono={mono}
      small={small}
      large={large}
      primary={primary}
      secondary={secondary}
    />
  </LoaderStyles>
);
