import { Spacing } from "cinnecta-ui";
import { Text } from "../Text/Text";
import { Title } from "../Title/Title";

import {
  ErrorMessage,
  ItemConfiguration,
  ItemContent,
  StatusLabel,
} from "./styles";
import PropTypes from "prop-types";
import { Icon } from "../Icon/icon";

const propTypes = {
  after: PropTypes.object,
  before: PropTypes.object,
  children: PropTypes.any.isRequired,
  description: PropTypes.string,
  done: PropTypes.bool,
  errorMessage: PropTypes.string,
  invalid: PropTypes.bool,
  title: PropTypes.string,
};

export const ConfigurationItem = ({
  after,
  before,
  children,
  description,
  done,
  errorMessage,
  invalid,
  title,
}) => {
  return (
    <ItemConfiguration>
      {before}
      <ItemContent>
        <Spacing bottom={1}>
          <Title noSpacing light level={3}>
            {title}
            {(done || invalid) && (
              <StatusLabel done={done} invalid={invalid}>
                <Icon micro inverse name={done ? "check" : "error"} />
              </StatusLabel>
            )}
          </Title>
          <Text small mutted>
            {description}
          </Text>
        </Spacing>
        {children}
        {invalid && errorMessage && (
          <ErrorMessage>
            <Text error>Mensagem de erro</Text>
          </ErrorMessage>
        )}
      </ItemContent>
      {after}
    </ItemConfiguration>
  );
};
ConfigurationItem.propTypes = propTypes;
