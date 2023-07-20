import { Shimmer } from "../Shimmer/Shimmer";
import { Container, InputStyles, WrapperShimmer } from "./styles";
import MaskedTextInput from "react-text-mask";

import PropTypes from "prop-types";
import { Fragment } from "react";

const propTypes = {
  actionLink: PropTypes.string,
  autoCapitalize: PropTypes.bool,
  autoComplete: PropTypes.oneOf(["off", "on"]),
  autoCorrect: PropTypes.any,
  autoFocus: PropTypes.bool,
  book: PropTypes.bool,
  borderless: PropTypes.bool,
  disabled: PropTypes.bool,
  flat: PropTypes.bool,
  floating: PropTypes.bool,
  focusBorderless: PropTypes.bool,
  id: PropTypes.string,
  inline: PropTypes.bool,
  inputRef: PropTypes.func,
  invalid: PropTypes.bool,
  inverse: PropTypes.bool,
  large: PropTypes.bool,
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
  value: PropTypes.string,
  inpuFakeValuePlaceholder: PropTypes.any,
  inputDefaultPlaceholder: PropTypes.any,
  inputInversePlaceholder: PropTypes.any,
};

const defaultProps = {
  autoComplete: "off",
  type: "text",
};

export const InputOnly = ({
  autoCapitalize,
  autoComplete,
  autoCorrect,
  autoFocus,
  borderless,
  disabled,
  flat,
  floating,
  focusBorderless,
  id,
  invalid,
  inverse,
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
  shimmer,
  showFakeValuePlaceholder,
  showOverflowEllipsis,
  inpuFakeValuePlaceholder,
  inputDefaultPlaceholder,
  inputInversePlaceholder,
  small,
  spellCheck,
  suffix,
  suffixSeparator,
  type,
  value,
  ...props
}) => {
  return (
    <>
      <Container
        // inline={!inline}
        borderless={borderless}
        disabled={disabled}
        invalid={invalid}
        flat={flat}
        floating={floating}
        focusBorderless={focusBorderless}
        small={small}
        removeMargins={removeMargins}
        inverse={inverse}
      >
        {shimmer && (
          <WrapperShimmer>
            <Shimmer width="100%" height="100%" />
          </WrapperShimmer>
        )}
        {prefix && (
          <Fragment>
            <Container prefix removePrefixSpacing={removePrefixSpacing}>
              {prefix}
            </Container>
            {prefixSeparator && (
              <Container separator separatorPrefix={!removePrefixSpacing} />
            )}
          </Fragment>
        )}
        {mask != null ? (
          <MaskedTextInput
            showOverflowEllipsis={showOverflowEllipsis}
            inpuFakeValuePlaceholder={showFakeValuePlaceholder}
            inputDefaultPlaceholder={showFakeValuePlaceholder}
            autoComplete={autoComplete}
            autoCapitalize={autoCapitalize}
            autoFocus={autoFocus}
            autoCorrect={autoCorrect}
            disabled={disabled}
            id={id}
            mask={mask}
            maxLength={maxLength}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            value={value}
            readOnly={readOnly}
            aria-readonly={readOnly}
            spellCheck={spellCheck}
            type={type}
            {...props}
          />
        ) : (
          <InputStyles
            showOverflowEllipsis={showOverflowEllipsis}
            inputDefaultPlaceholder={inputDefaultPlaceholder}
            inpuFakeValuePlaceholder={inpuFakeValuePlaceholder}
            inputInversePlaceholder={inputInversePlaceholder}
            autoComplete={autoComplete}
            autoCapitalize={autoCapitalize}
            autoFocus={autoFocus}
            autoCorrect={autoCorrect}
            disabled={disabled}
            id={id}
            maxLength={maxLength}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            value={value}
            readOnly={readOnly}
            aria-readonly={readOnly}
            spellCheck={spellCheck}
            type={type}
            {...props}
          />
        )}
        {suffix && (
          <Fragment>
            {suffixSeparator && (
              <Container separator removeSuffixSpacing={!removeSuffixSpacing} />
            )}
            <Container
              showOverflowEllipsis
              removeSuffixSpacing={removeSuffixSpacing}
            >
              {suffix}
            </Container>
          </Fragment>
        )}
      </Container>
    </>
  );
};
InputOnly.propTypes = propTypes;
InputOnly.defaultProps = defaultProps;
