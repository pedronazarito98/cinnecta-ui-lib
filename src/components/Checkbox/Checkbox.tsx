import React, { ChangeEvent, FocusEvent } from "react";
import { Text } from "../Text/Text";
import { Label } from "../Label/Label";
import { CheckboxOnly } from "../CheckboxOnly/CheckboxOnly";
import { CheckboxLabel, ColumnStyle, Subtitle } from "./styles";

export interface CheckboxProps {
  checked?: boolean;
  disabled?: boolean;
  id?: string;
  invalid?: boolean;
  label?: string | React.ReactNode;
  name?: string;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  pullRight?: boolean;
  smallLabel?: boolean;
  subtitle?: string;
  boldLabel?: boolean;
  inlineText?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
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
