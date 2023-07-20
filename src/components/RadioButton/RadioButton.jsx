import { Label } from "../Label/Label";
import { Text } from "../Text/Text";
import { RadioButtonOnly } from "./RadioButtonOnly";
import { ColumnRadio, RadioButtonLabel } from "./styles";
import PropTypes from "prop-types";

const propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  invalid: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  pullRight: PropTypes.bool,
  refForFocus: PropTypes.func,
  subtitle: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.number,
  ]),
};

const defaultProps = {
  label: "",
  radioButton: false,
};

export const RadioButton = ({
  checked,
  disabled,
  id,
  invalid,
  label,
  name,
  onBlur,
  onChange,
  onFocus,
  pullRight,
  subtitle,
  value,
}) => {
  return (
    <Label htmlFor={id}>
      <ColumnRadio pullRight={pullRight}>
        <RadioButtonOnly
          id={id}
          checked={checked}
          disabled={disabled}
          invalid={invalid}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          value={value}
        />
      </ColumnRadio>
      <ColumnRadio marginRight={pullRight} spacing={!pullRight}>
        <RadioButtonLabel>
          {typeof label === "string" ? (
            <Text disabled={disabled}>{label}</Text>
          ) : (
            label
          )}
        </RadioButtonLabel>
        {subtitle && checked && (
          <div style={{ paddingTop: 2 }}>
            <Text small>{subtitle}</Text>
          </div>
        )}
      </ColumnRadio>
    </Label>
  );
};
RadioButton.propTypes = propTypes;
RadioButton.defaultProps = defaultProps;
