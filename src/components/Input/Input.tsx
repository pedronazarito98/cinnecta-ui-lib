import React, { FC } from "react";
import { FormElement } from "../FormElement/FormElement";
import { InputOnly, InputOnlyProps } from "./InputOnly";

export interface InputProps extends InputOnlyProps {
  actionLink?: string;
  errorMessage?: any;
  hideLabel?: boolean;
  label?: string;
  labelDescription?: string;
  lightLabel?: boolean;
}

export const Input: FC<InputProps> = ({
  actionLink,
  errorMessage,
  hideLabel,
  label,
  labelDescription,
  lightLabel,
  ...props
}) => {
  return (
    <FormElement
      actionLink={actionLink}
      errorMessage={errorMessage}
      hideLabel={hideLabel}
      label={label}
      labelDescription={labelDescription}
      lightLabel={lightLabel}
    >
      <InputOnly {...props} />
    </FormElement>
  );
};
