import React from "react";
import { RadioButton } from "./RadioButton";
import { FormElementGroup } from "../FormElement/FormElementGroup";
import { Spacing } from "cinnecta-ui";
import PropTypes from "prop-types";
import { childrenOfType } from "airbnb-prop-types";

const propTypes = {
  actionLink: PropTypes.any,
  children: childrenOfType(RadioButton),
  collapseSpacing: PropTypes.bool,
  errorMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  hideLabel: PropTypes.bool,
  id: PropTypes.string,
  inline: PropTypes.bool,
  invalid: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  labelDescription: PropTypes.string,
  lightLabel: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  refForFocus: PropTypes.func,
  spaceOnLastItem: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.number,
  ]),
};

const defaultProps = {
  label: "",
};
export const RadioButtonGroup = ({
  actionLink,
  children = RadioButton,
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
RadioButtonGroup.propTypes = propTypes;
RadioButtonGroup.defaultProps = defaultProps;
