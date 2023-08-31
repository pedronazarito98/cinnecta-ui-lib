import React from "react";
import { RadioButtonGroup } from "./RadioButton/RadioButtonGroup";
import { Checkbox } from "./Checkbox/Checkbox";

import { Input } from "./Input/Input";
import { Select } from "./Select/Select";

export const ConnectedRadioButtonGroup = ({
  input,
  data,
  valueField,
  textField,
  children,
  meta: { touched, error, warning },
  ...props
}) => (
  <RadioButtonGroup
    {...input}
    {...props}
    onChange={input.onChange}
    invalid={touched && (error != null || warning != null)}
    errorMessage={error || warning}
  >
    {children}
  </RadioButtonGroup>
);

export const ConnectedCheckbox = ({
  input,
  data,
  valueField,
  textField,
  children,
  meta: { touched, error, warning },
  ...props
}) => (
  <Checkbox
    {...input}
    {...props}
    value={input.checked}
    onChange={input.onChange}
    invalid={touched && (error != null || warning != null)}
    checked={input.value !== false && input.value !== ""}
  >
    {children}
  </Checkbox>
);

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

export const ConnectedSelect = ({
  input,
  data,
  valueField,
  textField,
  meta: { touched, error, warning },
  ...props
}) => (
  <Select
    {...input}
    {...props}
    onChange={input.onChange}
    onBlur={() => input.onBlur(input.value)}
    invalid={touched && (error != null || warning != null)}
    errorMessage={error || warning}
  />
);
