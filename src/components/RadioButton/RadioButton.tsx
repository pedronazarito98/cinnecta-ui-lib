import React from "react";
import { Label } from "../Label/Label";
import { Text } from "../Text/Text";
import { RadioButtonOnly } from "./RadioButtonOnly";
import { ColumnRadio, RadioButtonLabel } from "./styles";
import { ChangeEvent, FocusEvent, ReactNode } from "react";

export interface RadioButtonProps {
  checked?: boolean;
  disabled?: boolean;
  id?: string;
  invalid?: boolean;
  label: string | ReactNode;
  name?: string;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  pullRight?: boolean;
  subtitle?: string;
  value: string | object | number;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
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
