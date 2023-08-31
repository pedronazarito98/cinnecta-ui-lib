import React, { ChangeEvent, FocusEvent } from "react";
import {
  CheckboxInput,
  CheckboxStyle,
  CheckMark,
  CheckMarkIcon,
  ContainerCheckOnly,
  MarkContainer,
} from "./styles";

export interface CheckboxOnlyProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  id?: string;
  invalid?: boolean;
  name?: string;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
}

export const CheckboxOnly: React.FC<CheckboxOnlyProps> = ({
  checked,
  defaultChecked,
  disabled,
  id,
  invalid,
  name,
  onBlur,
  onChange,
  onFocus,
}) => {
  return (
    <ContainerCheckOnly>
      <CheckboxStyle disabled={disabled} invalid={invalid}>
        <CheckboxInput
          type="checkbox"
          id={id}
          name={name}
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          aria-invalid={invalid}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
        />
        <MarkContainer data-fake-checkbox={!invalid && !disabled}>
          {checked && (
            <CheckMark>
              <CheckMarkIcon
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 54.19 42.05"
              >
                <path d="M48,0a6,6,0,0,0-4.12,1.81c-9.36,9.38-16.58,17.25-25.16,26L10,20.47a6,6,0,0,0-8,8.92l.28.23,13,11a6,6,0,0,0,8.13-.34c10.79-10.81,18.46-19.43,29-30A6,6,0,0,0,48,0Z" />
              </CheckMarkIcon>
            </CheckMark>
          )}
        </MarkContainer>
      </CheckboxStyle>
    </ContainerCheckOnly>
  );
};
