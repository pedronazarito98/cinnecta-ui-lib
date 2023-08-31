import React from "react";
import {
  CheckMark,
  ContainerRadio,
  InputRadio,
  MarkContainer,
  RadioStyle,
} from "./styles";
import { ChangeEvent, FocusEvent } from "react";

interface RadioButtonOnlyProps {
  checked?: boolean;
  disabled?: boolean;
  id?: string;
  invalid?: boolean;
  name?: string;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  value: string | object | number;
}

export const RadioButtonOnly: React.FC<RadioButtonOnlyProps> = ({
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
