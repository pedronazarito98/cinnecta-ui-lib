import {
  CheckMark,
  ContainerRadio,
  InputRadio,
  MarkContainer,
  RadioStyle,
} from "./styles";
import PropTypes from "prop-types";

const propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  invalid: PropTypes.bool,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  refForFocus: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.number,
  ]),
};

export const RadioButtonOnly = ({
  checked,
  disabled,
  id,
  invalid,
  name,
  onBlur,
  onChange,
  onFocus,

  value,
}) => {
  return (
    <ContainerRadio>
      <RadioStyle disabled={disabled} invalid={invalid}>
        <InputRadio
          type="radio"
          id={id}
          name={name}
          checked={checked}
          disabled={disabled}
          value={value}
          aria-invalid={invalid}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
        />
        <MarkContainer data-fake-radio={!invalid && !disabled}>
          {checked && <CheckMark />}
        </MarkContainer>
      </RadioStyle>
    </ContainerRadio>
  );
};
RadioButtonOnly.propTypes = propTypes;
