import React from "react";
import { SpinnerContainer } from "./styles";

export interface SpinnerProps {
  micro?: boolean;
  small?: boolean;
  large?: boolean;
  primary?: boolean;
  secondary?: boolean;
  fast?: boolean;
  slow?: boolean;
}

export const Spinner: React.FC<SpinnerProps> = ({
  micro,
  small,
  large,
  primary,
  secondary,
  fast,
  slow,
}) => (
  <SpinnerContainer
    micro={micro}
    small={small}
    large={large}
    primary={primary}
    secondary={secondary}
    fast={fast}
    slow={slow}
  />
);
