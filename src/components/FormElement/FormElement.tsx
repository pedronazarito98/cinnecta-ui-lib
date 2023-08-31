import React from "react";

import { Text } from "../Text/Text";
import { FormElementStyle, LabelStyle } from "./styles";

export interface FormElementProps {
  children?: React.ReactNode;
  actionLink?: React.ReactNode;
  errorMessage?: string | React.ReactNode;
  hideLabel?: boolean;
  id?: string;
  inline?: boolean;
  invalid?: boolean;
  inverse?: boolean;
  label?: string | React.ReactNode;
  labelDescription?: string;
  large?: boolean;
  lightLabel?: boolean;
  small?: boolean;
}

export const FormElement: React.FC<FormElementProps> = ({
  children,
  errorMessage,
  hideLabel,
  inline,
  invalid,
  label,
  labelDescription,
  lightLabel,
}) => {
  return (
    <>
      <FormElementStyle block={!inline}>
        <LabelStyle hideLabel={hideLabel}>
          {typeof label === "string" ? (
            <Text small bold={!lightLabel} light={lightLabel}>
              {label}
            </Text>
          ) : (
            label
          )}
          {labelDescription && (
            <Text small light>
              {labelDescription}
            </Text>
          )}
        </LabelStyle>
        {children}
        {invalid && errorMessage && (
          <Text small error>
            {errorMessage}
          </Text>
        )}
      </FormElementStyle>
    </>
  );
};
