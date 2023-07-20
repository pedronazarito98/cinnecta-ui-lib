import { styled } from "../../styles/theme";
import { Spacing } from "cinnecta-ui";
import { Text } from "../Text/Text";
import PropTypes from "prop-types";

const propTypes = {
  actionLink: PropTypes.any,
  children: PropTypes.any,
  collapseSpacing: PropTypes.bool,
  errorMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  hideLabel: PropTypes.bool,
  invalid: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  labelDescription: PropTypes.string,
  lightLabel: PropTypes.bool,
};

export const FormElementGroup = ({
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
FormElementGroup.propTypes = propTypes;

const FormElementGroupStyle = styled("fieldset", {
  border: 0,
  margin: 0,
  padding: 0,
});

const FormLegend = styled("legend", {
  padding: 0,
  margin: 0,
});
