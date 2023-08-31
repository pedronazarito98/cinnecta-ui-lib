import React, { ReactNode } from "react";
import { Spacing } from "../Spacing/Spacing";
import { Text } from "../Text/Text";
import { Title } from "../Title/Title";

import {
  ErrorMessage,
  ItemConfiguration,
  ItemContent,
  StatusLabel,
} from "./styles";
import { Icon } from "../Icon/icon";

export interface ConfigurationItemProps {
  after?: ReactNode;
  before?: ReactNode;
  children: ReactNode;
  description?: string;
  done?: boolean;
  errorMessage?: string;
  invalid?: boolean;
  title?: string;
}

export const ConfigurationItem: React.FC<ConfigurationItemProps> = ({
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
          <Text small muted>
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
