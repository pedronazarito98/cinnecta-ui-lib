import React, { Fragment, useState } from "react";
import _ from "lodash";
import moment from "moment";
import { ComboButton } from "../ComboButton/ComboButton";
import { Text } from "../Text/Text";
import { Anchor } from "../Anchor/Anchor";
import { Spacing } from "../Spacing/Spacing";
import { StatusIndicator } from "../StatusIndicator/StatusIndicator";
import { Cell } from "../Cell/Cell";
import { Responsive } from "../Responsive/Responsive";
import { Visibility } from "../Visibility";
import { CheckboxOnly } from "../CheckboxOnly/CheckboxOnly";
import { Grid } from "../Grid/Grid";
import {
  CheckboxContainer,
  InfoContainer,
  InfoItem,
  InfoLabel,
  InfoValue,
  SummaryActions,
  SummaryItemContainer,
} from "./styles";

export interface SummaryItemProps {
  item?: object;
  clean?: boolean;
  checked?: boolean;
  onChange?: () => void;
  onAction?: (action: any) => void;
  children?: any;
  divided?: boolean;
  loading?: boolean;
  selectable?: boolean;
  hideComboButton?: boolean;
}

export const SummaryItem: React.FC<SummaryItemProps> = ({
  item = {},
  clean,
  checked,
  onChange,
  onAction,
  children,
  divided,
  loading,
  selectable,
  hideComboButton,
}) => {
  const [hover, setHover] = useState(false);

  return (
    <SummaryItemContainer
      divided={divided}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <Grid resetSpacing>
        <Visibility showIf={selectable} unmount>
          <Responsive showFor="medium" unmount>
            <CheckboxContainer clean={clean} visible={clean && hover}>
              <Cell shrink noSpacing={clean}>
                <CheckboxOnly checked={checked} onChange={() => onChange()} />
              </Cell>
            </CheckboxContainer>
          </Responsive>
        </Visibility>
        {children && <Cell shrink>{children}</Cell>}
        <Cell auto noSpacing>
          <Grid resetSpacing>
            <Cell auto>
              <Text loading={loading} bold>
                <Anchor
                  onClick={() =>
                    onAction(
                      item.clickAction ? item.clickAction : item.mainAction
                    )
                  }
                >
                  {item.title}
                </Anchor>
              </Text>
              <Text small shimmerWidth="100%" loading={loading}>
                {item.description}
              </Text>
              <Text small bold loading={loading}>
                {item.params &&
                  Array.isArray(item.params) &&
                  item.params.join(", ")}
              </Text>
              {item.log && (
                <Spacing top={0.5}>
                  <Text muted small shimmerWidth="80%" loading={loading}>
                    <Fragment>
                      {_.capitalize(item.log.action)}
                      <strong>
                        {item.log.datetime &&
                          //moment(item.log.datetime).format('DD [de] MMMM [de] YYYY [às] hh:mm')
                          moment.utc(item.log.datetime).fromNow()}
                      </strong>
                      {item.log.user && (
                        <span>
                          {" "}
                          por{" "}
                          {item.log.link ? (
                            <strong>
                              <a href={item.log.link}>{item.log.user}</a>
                            </strong>
                          ) : (
                            <strong>{item.log.user}</strong>
                          )}{" "}
                        </span>
                      )}
                    </Fragment>
                  </Text>
                </Spacing>
              )}
            </Cell>
            <Cell noSpacing size={12} largeSize={2}>
              {item.status && (
                <Spacing
                  top={1}
                  topLargeAndAbove={0.1}
                  left={1}
                  leftLargeAndAbove={0.25}
                >
                  <StatusIndicator
                    loading={loading}
                    text={item.status.label}
                    color={item.status.color}
                  />
                </Spacing>
              )}
            </Cell>
            <Cell size={12} autoOnMedium center>
              {item.report &&
                Array.isArray(item.report) &&
                item.report.length > 0 && (
                  <Spacing top={1.25} topLargeAndAbove={0}>
                    <InfoContainer>
                      {item.report.map((data) => {
                        if (data) {
                          return (
                            <InfoItem key={data.label}>
                              <InfoValue>
                                {data.value}
                                {data.tooltip && <div>oi</div>}
                              </InfoValue>
                              <InfoLabel>{data.label}</InfoLabel>
                            </InfoItem>
                          );
                        } else {
                          return false;
                        }
                      })}
                    </InfoContainer>
                  </Spacing>
                )}
            </Cell>
          </Grid>
        </Cell>
        <Cell size={12} shrinkOnMedium>
          <SummaryActions clean={clean} visible={clean && hover}>
            {item.customButton}
            {!hideComboButton && (
              <ComboButton
                soft
                loading={loading}
                shimmer={loading}
                mainOption={
                  item.actions &&
                  item.actions.filter(
                    (action) => item.mainAction === action.value
                  )[0]
                }
                options={
                  item.actions
                    ? item.actions.filter(
                        (action) => item.mainAction !== action.value
                      )
                    : []
                }
                onClick={(option) => onAction && onAction(option)}
                closeOnSelect
                noSpacing
              />
            )}
          </SummaryActions>
        </Cell>
      </Grid>
    </SummaryItemContainer>
  );
};
