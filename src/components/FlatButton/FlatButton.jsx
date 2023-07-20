import { Icon } from "../Icon/icon";
import { Loader } from "../Loader/Loader";
import { Shimmer } from "../Shimmer/Shimmer";
import PropTypes from "prop-types";

import { ButtonFlat, ContentButton, LoaderButton } from "./styles";

const propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  inverse: PropTypes.bool,
  large: PropTypes.bool,
  mono: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  shimmer: PropTypes.bool,
  small: PropTypes.bool,
  shadowLevel: PropTypes.oneOf([0, 1, 2, 3]),
  soft: PropTypes.bool,
  square: PropTypes.bool,
  transparent: PropTypes.bool,
  children: PropTypes.node,
};

const defaultProps = {
  shadowLevel: 0,
};

export const FlatButton = ({
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
FlatButton.propTypes = propTypes;
FlatButton.defaultProps = defaultProps;
