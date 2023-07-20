import { Text } from "../Text/Text";
import { FormElementStyle, LabelStyle } from "./styles";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.any,
  actionLink: PropTypes.any,
  errorMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  hideLabel: PropTypes.bool,
  id: PropTypes.string,
  inline: PropTypes.bool,
  invalid: PropTypes.bool,
  inverse: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  labelDescription: PropTypes.string,
  large: PropTypes.bool,
  lightLabel: PropTypes.bool,
  small: PropTypes.bool,
};

export const FormElement = ({
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
FormElement.propTypes = propTypes;
