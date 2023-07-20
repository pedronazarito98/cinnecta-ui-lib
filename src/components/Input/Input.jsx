import { FormElement } from "../FormElement/FormElement";
import { InputOnly } from "./InputOnly";
import PropTypes from "prop-types";

const propTypes = {
  actionLink: PropTypes.string,
  autoCapitalize: PropTypes.bool,
  autoComplete: PropTypes.oneOf(["off", "on"]),
  autoCorrect: PropTypes.any,
  autoFocus: PropTypes.bool,
  book: PropTypes.bool,
  borderless: PropTypes.bool,
  disabled: PropTypes.bool,
  errorMessage: PropTypes.any,
  floating: PropTypes.bool,
  focusBorderless: PropTypes.bool,
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
  mask: PropTypes.func,
  maxLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  placeholder: PropTypes.string,
  prefix: PropTypes.object,
  prefixSeparator: PropTypes.bool,
  readOnly: PropTypes.bool,
  refForFocus: PropTypes.func,
  removeMargins: PropTypes.bool,
  removePrefixSpacing: PropTypes.bool,
  removeSuffixSpacing: PropTypes.bool,
  showFakeValuePlaceholder: PropTypes.bool,
  showOverflowEllipsis: PropTypes.bool,
  small: PropTypes.bool,
  spellCheck: PropTypes.any,
  suffix: PropTypes.object,
  suffixSeparator: PropTypes.bool,
  suffixText: PropTypes.any,
  type: PropTypes.string,
  underlineFocus: PropTypes.bool,
  value: PropTypes.string,
};

const defaultProps = {
  autoComplete: "off",
  type: "text",
};

export const Input = ({
  actionLink,
  autoCapitalize,
  autoComplete,
  autoCorrect,
  autoFocus,
  book,
  borderless,
  disabled,
  errorMessage,
  floating,
  focusBorderless,
  hideLabel,
  id,
  inline,
  invalid,
  inverse,
  label,
  labelDescription,
  large,
  lightLabel,
  mask,
  maxLength,
  name,
  onBlur,
  onChange,

  onFocus,
  onKeyDown,
  placeholder,
  prefix,
  prefixSeparator,
  readOnly,
  removeMargins,
  removePrefixSpacing,
  removeSuffixSpacing,
  showFakeValuePlaceholder,
  showOverflowEllipsis,
  small,
  spellCheck,
  suffix,
  suffixSeparator,

  type,

  value,
  ...props
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
      <InputOnly
        {...props}
        autoCapitalize={autoCapitalize}
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        autoFocus={autoFocus}
        book={book}
        borderless={borderless}
        disabled={disabled}
        floating={floating}
        focusBorderless={focusBorderless}
        id={id}
        // inline={inline}
        invalid={invalid}
        inverse={inverse}
        large={large}
        mask={mask}
        maxLength={maxLength}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        prefix={prefix}
        prefixSeparator={prefixSeparator}
        readOnly={readOnly}
        removeMargins={removeMargins}
        removePrefixSpacing={removePrefixSpacing}
        removeSuffixSpacing={removeSuffixSpacing}
        showFakeValuePlaceholder={showFakeValuePlaceholder}
        showOverflowEllipsis={showOverflowEllipsis}
        small={small}
        spellCheck={spellCheck}
        suffix={suffix}
        suffixSeparator={suffixSeparator}
        type={type}
        value={value}
      />
    </FormElement>
  );
};
Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
