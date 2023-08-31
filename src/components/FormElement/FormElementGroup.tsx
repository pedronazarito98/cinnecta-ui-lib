import { styled } from "../../theme/theme";
import { Spacing } from "../Spacing/Spacing";
import { Text } from "../Text/Text";
import React from "react";

interface FormElementGroupProps {
  actionLink?: React.ReactNode;
  children?: React.ReactNode;
  collapseSpacing?: boolean;
  errorMessage?: string | React.ReactNode;
  hideLabel?: boolean;
  invalid?: boolean;
  label?: string | React.ReactNode;
  labelDescription?: string;
  lightLabel?: boolean;
}

export const FormElementGroup: React.FC<FormElementGroupProps> = ({
  children,
  collapseSpacing,
  errorMessage,
  invalid,
  label,
  labelDescription,
  lightLabel,
}) => {
  return (
    <FormElementGroupStyle>
      <FormLegend>
        {typeof label === "string" ? (
          <Text small bold={!lightLabel} light={lightLabel}>
            {label}
          </Text>
        ) : (
          label
        )}
      </FormLegend>
      {labelDescription && (
        <Spacing top={0.5}>
          <Text small light>
            {labelDescription}
          </Text>
        </Spacing>
      )}
      <Spacing vertical={collapseSpacing ? 0 : 1}>{children}</Spacing>
      {invalid && errorMessage && (
        <Text small error>
          {errorMessage}
        </Text>
      )}
    </FormElementGroupStyle>
  );
};

const FormElementGroupStyle = styled("fieldset", {
  border: 0,
  margin: 0,
  padding: 0,
});

const FormLegend = styled("legend", {
  padding: 0,
  margin: 0,
});
