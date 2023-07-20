import PropTypes from "prop-types";
import { ClickableStyle } from "./styles";

const propTypes = {
  children: PropTypes.any.isRequired,
  disabled: PropTypes.bool,
  inline: PropTypes.bool,
  inverse: PropTypes.bool,
  onClick: PropTypes.func,
  rectangular: PropTypes.bool,
};

export const Clickable = ({
  children,
  disabled,
  inline,
  inverse,
  onClick,
  rectangular,
}) => {
  return inline ? (
    <ClickableStyle
      onClick={onClick}
      disabled={disabled}
      inverse={inverse}
      rectangular={rectangular}
    >
      {children}
    </ClickableStyle>
  ) : (
    <ClickableStyle
      as="div"
      onClick={onClick}
      disabled={disabled}
      inverse={inverse}
      rectangular={rectangular}
    >
      {children}
    </ClickableStyle>
  );
};
Clickable.propTypes = propTypes;
