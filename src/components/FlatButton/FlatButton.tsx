import React from "react";

import { Icon } from "../Icon/icon";
import { Loader } from "../Loader/Loader";
import { Shimmer } from "../Shimmer/Shimmer";

import { ButtonFlat, ContentButton, LoaderButton } from "./styles";

export interface FlatButtonProps {
  disabled?: boolean;
  loading?: boolean;
  icon?: string | React.ReactElement;
  inverse?: boolean;
  large?: boolean;
  mono?: boolean;
  primary?: boolean;
  secondary?: boolean;
  shimmer?: boolean;
  small?: boolean;
  shadowLevel?: 0 | 1 | 2 | 3;
  soft?: boolean;
  square?: boolean;
  transparent?: boolean;
  children?: React.ReactNode;
  onClick?: (event: any) => void;
}

export const FlatButton: React.FC<FlatButtonProps> = ({
  disabled,
  loading,
  icon,
  inverse,
  mono,
  soft,
  primary,
  secondary,
  shimmer,
  transparent,
  large,
  onClick,
  small,
  ...props
}) => {
  return (
    <ButtonFlat
      {...props}
      loading={loading}
      disabled={disabled || loading}
      inverse={inverse}
      mono={mono}
      small={small}
      soft={soft}
      primary={primary}
      onClick={onClick}
      secondary={secondary}
      transparent={transparent}
      type="button"
    >
      {loading && shimmer && (
        <div>
          <Shimmer height="100%" width="100%" />
        </div>
      )}
      <ContentButton loading={loading}>
        {typeof icon === "string" ? (
          <Icon name={icon} small={small} large={large} />
        ) : (
          icon
        )}
      </ContentButton>
      {loading && (
        <LoaderButton>
          {!shimmer && (
            <Loader
              small
              primary={inverse && soft}
              secondary={secondary}
              mono={mono}
            />
          )}
        </LoaderButton>
      )}
    </ButtonFlat>
  );
};
