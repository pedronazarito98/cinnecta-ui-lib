import React, { ReactElement, ChangeEvent, FocusEvent, ReactNode } from "react";
import { RadioButton } from "./RadioButton";
import { FormElementGroup } from "../FormElement/FormElementGroup";
import { Spacing } from "../Spacing/Spacing";

interface RadioButtonGroupProps {
  actionLink?: any;
  children?: ReactElement<typeof RadioButton>[];
  collapseSpacing?: boolean;
  errorMessage?: string | ReactNode;
  hideLabel?: boolean;
  inline?: boolean;
  invalid?: boolean;
  label?: string | ReactNode;
  labelDescription?: string;
  lightLabel?: boolean;
  name: string;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  refForFocus?: (node: HTMLInputElement) => void;
  spaceOnLastItem?: boolean;
  value: string | object | number;
}

export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  actionLink,
  children = [<RadioButton />],
  collapseSpacing,
  errorMessage,
  hideLabel,
  inline,
  invalid,
  label,
  labelDescription,
  lightLabel,
  name,
  onBlur,
  onChange,
  onFocus,
  spaceOnLastItem,
  value,
}) => {
  const childrenSize = React.Children.count(children);

  return (
    <FormElementGroup
      actionLink={actionLink}
      collapseSpacing={collapseSpacing}
      errorMessage={errorMessage}
      hideLabel={hideLabel}
      invalid={invalid}
      label={label}
      labelDescription={labelDescription}
      lightLabel={lightLabel}
    >
      {children &&
        React.Children.map(children, (child, i) => {
          const radioButton = React.cloneElement(child, {
            name: name,
            id: name && `${name.toLowerCase()}-${i}`,
            invalid: invalid,
            onBlur: onBlur,
            onChange: onChange,
            onFocus: onFocus,
            checked: child.props.value === value,
          });

          return (
            <Spacing
              inline={inline}
              right={inline && 2}
              bottom={
                !inline && i + 1 === childrenSize && !spaceOnLastItem ? 0 : 0.5
              }
            >
              {radioButton}
            </Spacing>
          );
        })}
    </FormElementGroup>
  );
};
