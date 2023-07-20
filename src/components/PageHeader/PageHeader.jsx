import { Spacing } from "cinnecta-ui";
import { Cell } from "../Cell/Cell";
import { Grid } from "../Grid/Grid";
import { Text } from "../Text/Text";
import { Title } from "../Title/Title";
import { Visibility } from "../Visibility";
import { HeaderPage } from "./styles";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.any,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  inverse: PropTypes.bool,
  level: PropTypes.oneOf([1, 2, 3]),
  loading: PropTypes.bool,
  removeMargin: PropTypes.bool,
  section: PropTypes.string,
  title: PropTypes.string,
  border: PropTypes.bool,
  removeDescriptionSpacing: PropTypes.bool,
};
const defaultProps = {
  level: 1,
  title: "",
};
export const PageHeader = ({
  children,
  description,
  level,
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
PageHeader.propTypes = propTypes;
PageHeader.defaultProps = defaultProps;
