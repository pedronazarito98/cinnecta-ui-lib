import { FormElement } from "../FormElement/FormElement";
import { SelectOnly } from "./SelectOnly";
import PropTypes from "prop-types";

const propTypes = {
  actionLink: PropTypes.string,
  autoCapitalize: PropTypes.bool,
  autoComplete: PropTypes.oneOf(["off", "on"]),
  autoCorrect: PropTypes.any,
  autoFocus: PropTypes.bool,
  book: PropTypes.bool,
  borderless: PropTypes.bool,
  cacheOptions: PropTypes.bool,
  clearable: PropTypes.bool,
  closeMenuOnSelect: PropTypes.bool,
  defaultOptions: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  defaultValue: PropTypes.object,
  disabled: PropTypes.bool,
  errorMessage: PropTypes.any,
  focusBorderless: PropTypes.bool,
  getOptionLabel: PropTypes.func,
  getOptionValue: PropTypes.func,
  hideLabel: PropTypes.bool,
  id: PropTypes.string,
  inline: PropTypes.bool,
  inputRef: PropTypes.func,
  invalid: PropTypes.bool,
  inverse: PropTypes.bool,
  label: PropTypes.string,
  labelDescription: PropTypes.string,
  large: PropTypes.bool,
  lightLabel: PropTypes.bool,
  loading: PropTypes.bool,
  loadingMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  loadOptions: PropTypes.func,
  mask: PropTypes.func,
  maxLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  multiple: PropTypes.bool,
  name: PropTypes.string.isRequired,
  noOptionsMessage: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  onCreateOption: PropTypes.func,
  onFocus: PropTypes.func,
  onInputChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  prefix: PropTypes.object,
  prefixSeparator: PropTypes.bool,
  readOnly: PropTypes.bool,
  refForFocus: PropTypes.func,
  removeMargins: PropTypes.bool,
  removePrefixSpacing: PropTypes.bool,
  removeSuffixSpacing: PropTypes.bool,
  shimmer: PropTypes.bool,
  showFakeValuePlaceholder: PropTypes.bool,
  showOverflowEllipsis: PropTypes.bool,
  small: PropTypes.bool,
  spellCheck: PropTypes.any,
  suffix: PropTypes.object,
  suffixSeparator: PropTypes.bool,
  suffixText: PropTypes.any,
  type: PropTypes.string,
  underlineFocus: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
};

const defaultProps = {
  autoComplete: "off",
  type: "text",
  closeMenuOnSelect: true,
};

const Select = ({
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

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;
export default Select;
