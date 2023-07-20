import React from "react";
import { Input } from "./Input/Input";

export const ConnectedInput = ({
  input,
  data,
  valueField,
  textField,
  meta: { touched, error, warning },
  ...props
}) => (
  <Input
    {...input}
    {...props}
    onChange={input.onChange}
    invalid={touched && (error != null || warning != null)}
    errorMessage={error || warning}
  />
);
