import React, { ReactNode } from "react";
import { Cell } from "../Cell/Cell";
import { Grid } from "../Grid/Grid";
import { Text } from "../Text/Text";
import { Title } from "../Title/Title";
import { Visibility } from "../Visibility";
import { HeaderPage } from "./styles";
import { Spacing } from "../Spacing/Spacing";

export interface PageHeaderProps {
  children?: ReactNode;
  description?: string | ReactNode;
  level?: 1 | 2 | 3;
  loading?: boolean;
  border?: boolean;
  removeDescriptionSpacing?: boolean;
  removeMargin?: boolean;
  section?: string;
  title: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  children,
  description,
  level = 1,
  loading,
  border,
  removeDescriptionSpacing,
  removeMargin,
  section,
  title,
}) => (
  <HeaderPage withBorder={border} noMargin={removeMargin}>
    <Grid resetSpacing>
      <Cell size={12} autoOnMedium>
        {section && (
          <Text muted small bold>
            {section}
          </Text>
        )}
        <Title
          title={title}
          level={level}
          noTopSpacing={section != null}
          noBottomSpacing={removeDescriptionSpacing}
        />
        {description && typeof description === "string" ? (
          <Text loading={loading}>{description}</Text>
        ) : (
          description
        )}
      </Cell>
      <Visibility showIf={children !== undefined}>
        <Cell size={12} shrinkOnMedium>
          <Spacing top={0.5}>{children}</Spacing>
        </Cell>
      </Visibility>
    </Grid>
  </HeaderPage>
);
