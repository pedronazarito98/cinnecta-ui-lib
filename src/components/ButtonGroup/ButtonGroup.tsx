import * as React from "react";
import { Children, ReactElement, cloneElement } from "react";
import { ButtonContainer, ButtonGroupStyle } from "./styles";

export interface ButtonGroupProps {
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  block?: boolean;
  compact?: boolean;
  inverse?: boolean;
  mono?: boolean;
  noSpacing?: boolean;
  soft?: boolean;
  primary?: boolean;
  rectangular?: boolean;
  secondary?: boolean;
  shade?: boolean;
  shimmer?: boolean;
  short?: boolean;
  transparent?: boolean;
  type?: string;
  noBorder?: boolean;
  children: ReactElement<any>[] | ReactElement<any>;
  grouped?: boolean;
  underlined?: boolean;
  groupedLast?: boolean;
  groupedFirst?: boolean;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  soft,
  mono,
  shade,
  short,
  block,
  compact,
  inverse,
  grouped,
  primary,
  loading,
  children,
  disabled,
  fullWidth,
  noSpacing,
  secondary,
  underlined,
  groupedLast,
  transparent,
  rectangular,
  groupedFirst,
}) => {
  return (
    <ButtonGroupStyle
      loading={loading}
      fullWidth={fullWidth}
      block={block}
      grouped={grouped}
      groupedFirst={groupedFirst}
      groupedLast={groupedLast}
      noSpacing={noSpacing}
    >
      {Children.map(children, (child, i) => {
        const button = cloneElement(child, {
          compact: compact,
          disabled: disabled,
          inverse: inverse,
          rectangular:
            rectangular || (i > 0 && i < Children.count(children) - 1),
          grouped: true,
          groupedFirst: i === 0,
          groupedLast: i === Children.count(children) - 1,
          fullWidth: fullWidth,
          mono: mono,
          primary: primary,
          secondary: secondary,
          shade: shade,
          short: short,
          soft: soft,
          transparent: transparent,
          underlined: underlined,
        });

        return fullWidth ? <ButtonContainer>{button}</ButtonContainer> : button;
      })}
    </ButtonGroupStyle>
  );
};
