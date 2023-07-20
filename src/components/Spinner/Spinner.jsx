import { SpinnerContainer } from "./styles";
import PropTypes from "prop-types";

const propTypes = {
  micro: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  fast: PropTypes.bool,
  slow: PropTypes.bool,
};

export const Spinner = ({
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
Spinner.propTypes = propTypes;
