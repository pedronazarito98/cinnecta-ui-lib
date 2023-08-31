import React from "react";
import { Button } from "../Button/Button";
import { Loader } from "../Loader/Loader";
import {
  ComboButtonContent,
  ComboButtonLoader,
  ComboButtonSeparator,
  ComboButtonStyle,
} from "./styles";
import { Dropdown } from "../Dropdown/Dropdown";

export interface DropdownOption {
  value?: string;
  label?: string;
}

export interface ComboButtonProps {
  mainOption: DropdownOption;
  disabled?: boolean;
  loading?: boolean;
  options: DropdownOption[];
  children?: React.ReactNode;
  onClick?: (value: any) => void;
  fullWidth?: boolean;
  block?: boolean;
  compact?: boolean;
  inverse?: boolean;
  mono?: boolean;
  noSpacing?: boolean;
  shimmer?: boolean;
  soft?: boolean;
  primary?: boolean;
  rectangular?: boolean;
  secondary?: boolean;
  short?: boolean;
  transparent?: boolean;
  closeOnSelect?: boolean;
}

export const ComboButton: React.FC<ComboButtonProps> = ({
  mainOption,
  disabled,
  loading,
  options,
  children,
  onClick,
  fullWidth,
  block,
  compact,
  inverse,
  mono,
  noSpacing,
  shimmer,
  soft,
  primary,
  rectangular,
  secondary,
  transparent,
  closeOnSelect,
}) => {
  return (
    <ComboButtonStyle
      loading={loading}
      disabled={disabled}
      fullWidth={fullWidth}
      block={block}
      inverse={inverse}
      mono={mono}
      noSpacing={noSpacing}
      shimmer={shimmer}
      soft={soft}
      primary={primary}
      rectangular={rectangular}
      secondary={secondary}
      transparent={transparent}
    >
      <ComboButtonContent
        loading={loading}
        shimmer={shimmer}
        rectangular={rectangular}
      >
        <Button
          noSpacing
          short
          fullWidth={block || fullWidth}
          compact={compact}
          mono={mono}
          soft={soft}
          primary={primary}
          rectangular={rectangular}
          secondary={secondary}
          transparent={transparent}
          inverse={inverse}
          noBorder={mono || secondary || inverse}
          onClick={() => onClick && onClick(mainOption.value)}
        >
          {mainOption.label}
        </Button>
        <ComboButtonSeparator
          dark={inverse || transparent || soft}
          mono={mono}
          secondary={secondary}
        />
        <Dropdown
          combo
          button
          noSpacing
          short
          compact
          mono={mono}
          soft={soft}
          primary={primary}
          rectangular={rectangular}
          secondary={secondary}
          transparent={transparent}
          inverse={inverse}
          noBorder={mono || secondary || inverse}
          onSelectOption={(option) => onClick && onClick(option?.value)}
          options={options}
          closeOnSelect={closeOnSelect}
        >
          {children}
        </Dropdown>
      </ComboButtonContent>
      {loading && (
        <ComboButtonLoader shimmer={shimmer} rectangular={rectangular}>
          {!shimmer && (
            <Loader
              small
              primary={inverse && soft}
              secondary={secondary}
              mono={mono}
            />
          )}
        </ComboButtonLoader>
      )}
    </ComboButtonStyle>
  );
};
