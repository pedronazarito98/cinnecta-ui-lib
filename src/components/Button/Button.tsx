import React, { FC, ReactNode, ButtonHTMLAttributes } from "react";
import {
  ButtonContainer,
  ButtonLoader,
  Content,
  WrapperShimmer,
} from "./styles";

import { Shimmer } from "../Shimmer/Shimmer";

import { Loader } from "../Loader/Loader";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  block?: boolean;
  compact?: boolean;
  dashed?: boolean;
  inverse?: boolean;
  grouped?: boolean;
  groupedFirst?: boolean;
  groupedLast?: boolean;
  large?: boolean;
  mono?: boolean;
  noSpacing?: boolean;
  shade?: boolean;
  simple?: boolean;
  soft?: boolean;
  chip?: boolean;
  primary?: boolean;
  rectangular?: boolean;
  removeSideSpacing?: boolean;
  secondary?: boolean;
  shimmer?: boolean;
  short?: boolean;
  small?: boolean;
  transparent?: boolean;
  underlined?: boolean;
  noBorder?: boolean;
  tall?: boolean;
  icon?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  disabled,
  loading,
  fullWidth,
  block,
  compact,
  dashed,
  inverse,
  grouped,
  groupedFirst,
  groupedLast,
  large,
  mono,
  noSpacing,
  onClick,
  shade,
  simple,
  soft,
  chip,
  primary,
  rectangular,
  removeSideSpacing,
  secondary,
  shimmer,
  short,
  small,
  transparent,
  underlined,
  noBorder,
  tall,
  icon,
  ...props
}) => {
  return (
    <>
      {icon ? (
        <ButtonContainer
          btnIcon
          chip={chip}
          medium={!small && !large}
          fullWidth={fullWidth}
          block={block}
          compact={compact}
          dashed={dashed}
          disabled={disabled}
          inverse={inverse}
          grouped={grouped}
          groupedFirst={groupedFirst}
          groupedLast={groupedLast}
          large={large}
          mono={mono}
          noSpacing={noSpacing}
          soft={soft}
          primary={primary}
          rectangular={rectangular}
          removeSideSpacing={removeSideSpacing}
          secondary={secondary}
          shade={shade}
          short={short}
          simple={simple}
          small={small}
          tall={tall}
          onClick={onClick}
          transparent={transparent}
          underlined={underlined}
          noBorder={noBorder}
          {...props}
        >
          {children}
          {icon}
        </ButtonContainer>
      ) : (
        <ButtonContainer
          chip={chip}
          medium={!small && !large}
          fullWidth={fullWidth}
          block={block}
          compact={compact}
          dashed={dashed}
          disabled={disabled}
          inverse={inverse}
          grouped={grouped}
          groupedFirst={groupedFirst}
          groupedLast={groupedLast}
          large={large}
          mono={mono}
          noSpacing={noSpacing}
          soft={soft}
          primary={primary}
          rectangular={rectangular}
          removeSideSpacing={removeSideSpacing}
          secondary={secondary}
          shade={shade}
          short={short}
          simple={simple}
          small={small}
          tall={tall}
          onClick={onClick}
          transparent={transparent}
          underlined={underlined}
          noBorder={noBorder}
          {...props}
        >
          {loading && shimmer && (
            <WrapperShimmer>
              <Shimmer height="100%" width="100%" />
            </WrapperShimmer>
          )}

          <Content contentLoading={loading} contentFullWidth={fullWidth}>
            {children}
          </Content>
          {loading && (
            <ButtonLoader>
              {!shimmer && (
                <Loader
                  small
                  mono={mono}
                  secondary={secondary}
                  primary={inverse && soft}
                />
              )}
            </ButtonLoader>
          )}
        </ButtonContainer>
      )}
    </>
  );
};

Button.defaultProps = {
  primary: false,
};
