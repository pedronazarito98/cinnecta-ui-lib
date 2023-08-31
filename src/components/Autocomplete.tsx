import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Input } from "./Input/Input";

interface AutocompleteProps {
  id?: string;
  name?: string;
  book?: boolean;
  small?: boolean;
  label?: string;
  large?: boolean;
  prefix?: string | React.ReactNode;
  inline?: boolean;
  invalid?: boolean;
  inverse?: boolean;
  inputRef?: React.RefObject<HTMLInputElement>;
  disabled?: boolean;
  autoFocus?: boolean;
  hideLabel?: boolean;
  placeholder?: string;
  underlineFocus?: boolean;
  inputBorderless?: boolean;
  labelDescription?: string;
  inputRemoveMargins?: boolean;
  inputFocusBorderless?: boolean;
  inputOverflowEllipsis?: boolean;
  showFakeValuePlaceholder?: boolean;
  value?: string;
}

export function Autocomplete({
  id,
  name,
  book,
  small,
  label,
  large,
  prefix,
  inline,
  invalid,
  inverse,
  inputRef,
  disabled,
  autoFocus,
  hideLabel,
  placeholder,
  underlineFocus,
  inputBorderless,
  labelDescription,
  inputRemoveMargins,
  inputFocusBorderless,
  inputOverflowEllipsis,
  showFakeValuePlaceholder,
  value,
}: AutocompleteProps) {
  return (
    <OutsideClickHandler>
      <Input
        id={id}
        book={book}
        name={name}
        type="text"
        value={value}
        label={label}
        large={large}
        small={small}
        prefix={prefix}
        inline={inline}
        invalid={invalid}
        inverse={inverse}
        autoComplete="off"
        inputRef={inputRef}
        disabled={disabled}
        autoFocus={autoFocus}
        hideLabel={hideLabel}
        placeholder={placeholder}
        borderless={inputBorderless}
        underlineFocus={underlineFocus}
        removeMargins={inputRemoveMargins}
        labelDescription={labelDescription}
        focusBorderless={inputFocusBorderless}
        showOverflowEllipsis={inputOverflowEllipsis}
        showFakeValuePlaceholder={showFakeValuePlaceholder}
      />
    </OutsideClickHandler>
  );
}
