import { Text } from "../Text/Text";
import { Label } from "../Label/Label";
import { CheckboxOnly } from "../CheckboxOnly/CheckboxOnly";
import { CheckboxLabel, ColumnStyle, Subtitle } from "./styles";
import PropTypes from "prop-types";

const propTypes = {
  boldLabel: PropTypes.bool,
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
  // refForFocus: PropTypes.func,
  smallLabel: PropTypes.bool,
  subtitle: PropTypes.string,
  inlineText: PropTypes.bool,
};

export const Checkbox = ({
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
  smallLabel,
  boldLabel,
  inlineText,
}) => {
  return (
    <Label htmlFor={id}>
      <ColumnStyle pullRight={pullRight}>
        <CheckboxOnly
          id={id}
          checked={checked}
          disabled={disabled}
          invalid={invalid}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
        />
      </ColumnStyle>
      {label && (
        <ColumnStyle
          columnTextNoBreak={inlineText}
          columnTextBreak={!inlineText}
          marginRight={pullRight}
          spacing={!pullRight}
        >
          <CheckboxLabel>
            {typeof label === "string" ? (
              <Text small={smallLabel} bold={boldLabel} disabled={disabled}>
                {label}
              </Text>
            ) : (
              label
            )}
          </CheckboxLabel>
          {subtitle && checked && (
            <Subtitle>
              <Text small>{subtitle}</Text>
            </Subtitle>
          )}
        </ColumnStyle>
      )}
    </Label>
  );
};
Checkbox.propTypes = propTypes;
