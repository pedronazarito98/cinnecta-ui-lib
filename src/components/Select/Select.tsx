import React, { ChangeEvent } from "react";
import { FormElement } from "../FormElement/FormElement";
import { SelectOnly } from "./SelectOnly";

export interface SelectProps {
  actionLink?: string;
  autoCapitalize?: boolean;
  autoComplete?: "off" | "on";
  autoCorrect?: any;
  autoFocus?: boolean;
  book?: boolean;
  borderless?: boolean;
  cacheOptions?: boolean;
  clearable?: boolean;
  closeMenuOnSelect?: boolean;
  defaultOptions?: boolean | any[];
  defaultValue?: any;
  disabled?: boolean;
  errorMessage?: any;
  focusBorderless?: boolean;
  getOptionLabel?: Function;
  getOptionValue?: Function;
  hideLabel?: boolean;
  id?: string;
  inline?: boolean;
  inputRef?: Function;
  invalid?: boolean;
  inverse?: boolean;
  label?: string;
  labelDescription?: string;
  large?: boolean;
  lightLabel?: boolean;
  loading?: boolean;
  loadingMessage?: string | Function;
  loadOptions?: Function;
  mask?: Function;
  maxLength?: string | number;
  multiple?: boolean;
  name?: string;
  noOptionsMessage?: string;
  onBlur?: (event: FocusEvent) => void;
  onChange?: (value: any) => void;
  onClear?: Function;
  onCreateOption?: Function;
  onFocus?: (event: FocusEvent) => void;
  onInputChange?: (event: ChangeEvent) => void;
  onKeyDown?: (event: KeyboardEvent) => void;
  options?: any[];
  placeholder?: string;
  prefix?: any;
  prefixSeparator?: boolean;
  readOnly?: boolean;
  refForFocus?: Function;
  removeMargins?: boolean;
  removePrefixSpacing?: boolean;
  removeSuffixSpacing?: boolean;
  shimmer?: boolean;
  showFakeValuePlaceholder?: boolean;
  showOverflowEllipsis?: boolean;
  small?: boolean;
  spellCheck?: any;
  suffix?: any;
  suffixSeparator?: boolean;
  suffixText?: any;
  type?: string;
  underlineFocus?: boolean;
  value?: string | any[] | any;
}

const defaultProps: SelectProps = {
  autoComplete: "off",
  type: "text",
  closeMenuOnSelect: true,
};

export const Select = ({
  actionLink,
  autoCapitalize,
  autoComplete,
  autoCorrect,
  autoFocus,
  book,
  borderless,
  cacheOptions,
  clearable,
  closeMenuOnSelect,
  defaultOptions,
  defaultValue,
  disabled,
  errorMessage,
  focusBorderless,
  getOptionLabel,
  getOptionValue,
  hideLabel,
  id,
  inline,
  inputRef,
  invalid,
  inverse,
  label,
  labelDescription,
  large,
  lightLabel,
  loading,
  loadingMessage,
  loadOptions,
  mask,
  maxLength,
  multiple,
  name,
  noOptionsMessage,
  onBlur,
  onChange,
  onClear,
  onCreateOption,
  onFocus,
  onInputChange,
  onKeyDown,
  options,
  placeholder,
  prefix,
  prefixSeparator,
  readOnly,
  refForFocus,
  removeMargins,
  removePrefixSpacing,
  removeSuffixSpacing,
  shimmer,
  showFakeValuePlaceholder,
  showOverflowEllipsis,
  small,
  spellCheck,
  suffix,
  suffixSeparator,
  suffixText,
  type,
  underlineFocus,
  value,
}) => {
  return (
    <FormElement
      actionLink={actionLink}
      errorMessage={errorMessage}
      hideLabel={hideLabel}
      id={id}
      inline={inline}
      invalid={invalid}
      inverse={inverse}
      label={label}
      labelDescription={labelDescription}
      large={large}
      lightLabel={lightLabel}
      small={small}
    >
      <SelectOnly
        autoCapitalize={autoCapitalize}
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        autoFocus={autoFocus}
        book={book}
        borderless={borderless}
        cacheOptions={cacheOptions}
        clearable={clearable}
        closeMenuOnSelect={closeMenuOnSelect}
        defaultOptions={defaultOptions}
        defaultValue={defaultValue}
        disabled={disabled}
        focusBorderless={focusBorderless}
        getOptionLabel={getOptionLabel}
        getOptionValue={getOptionValue}
        id={id}
        inline={inline}
        inputRef={inputRef}
        invalid={invalid}
        inverse={inverse}
        large={large}
        loading={loading}
        loadingMessage={loadingMessage}
        loadOptions={loadOptions}
        mask={mask}
        maxLength={maxLength}
        multiple={multiple}
        name={name}
        noOptionsMessage={noOptionsMessage}
        onBlur={onBlur}
        onChange={onChange}
        onClear={onClear}
        onCreateOption={onCreateOption}
        onFocus={onFocus}
        onInputChange={onInputChange}
        onKeyDown={onKeyDown}
        options={options}
        placeholder={placeholder}
        prefix={prefix}
        prefixSeparator={prefixSeparator}
        readOnly={readOnly}
        refForFocus={refForFocus}
        removeMargins={removeMargins}
        removePrefixSpacing={removePrefixSpacing}
        removeSuffixSpacing={removeSuffixSpacing}
        shimmer={shimmer}
        showFakeValuePlaceholder={showFakeValuePlaceholder}
        showOverflowEllipsis={showOverflowEllipsis}
        small={small}
        spellCheck={spellCheck}
        suffix={suffix}
        suffixSeparator={suffixSeparator}
        suffixText={suffixText}
        type={type}
        underlineFocus={underlineFocus}
        value={value}
      />
    </FormElement>
  );
};

Select.defaultProps = defaultProps;
