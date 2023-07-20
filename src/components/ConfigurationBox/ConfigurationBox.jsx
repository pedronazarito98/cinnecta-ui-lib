import { Spacing } from "cinnecta-ui";
import React from "react";
import { Cell } from "../Cell/Cell";
import { Grid } from "../Grid/Grid";
import { Icon } from "../Icon/icon";
import { PageHeader } from "../PageHeader/PageHeader";
import { Text } from "../Text/Text";
import { Wrapper } from "../Wrapper/Wrapper";

import {
  CloseButtonContainer,
  ConfigurationBoxBody,
  ConfigurationBoxHeader,
  ConfigurationBoxHeaderItem,
  ConfigurationBoxStyle,
} from "./styles";

export const ConfigurationBox = ({
  actions,
  children,
  closable,
  description,
  header,
  onClose,
  title,
}) => {
  return (
    <ConfigurationBoxStyle>
      <ConfigurationBoxHeader>
        <Grid center>
          <Cell auto noSpacing>
            <PageHeader
              title={title}
              description={description}
              level={2}
              removeMargin
              removeDescriptionSpacing={description != null}
            >
              {actions}
            </PageHeader>
          </Cell>
          {closable && (
            <Cell shrink noSpacing>
              <CloseButtonContainer>
                <FlatButton
                  transparent
                  icon={<Icon name="error" large />}
                  onClick={() => onClose && onClose()}
                />
              </CloseButtonContainer>
            </Cell>
          )}
        </Grid>

        <ConfigurationBoxBody>
          {header && Array.isArray(header) && header.length > 0 && (
            <ConfigurationBoxHeader>
              <Grid resetSpacing>
                {header.map((headerItem, count) => {
                  return (
                    <Cell size={12} key={count} shrinkOnMedium>
                      <ConfigurationBoxHeaderItem
                        padded
                        borderRight={count + 1 < header.length}
                      >
                        <Text bold>{headerItem.label}</Text>
                        <Text large>{headerItem.content}</Text>
                      </ConfigurationBoxHeaderItem>
                    </Cell>
                  );
                })}
              </Grid>
            </ConfigurationBoxHeader>
          )}
          <Spacing top={2}>
            <Wrapper>{children}</Wrapper>
          </Spacing>
        </ConfigurationBoxBody>
      </ConfigurationBoxHeader>
    </ConfigurationBoxStyle>
  );
};
