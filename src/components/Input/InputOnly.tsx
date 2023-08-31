import React, { FC, Fragment } from "react";
import { Shimmer } from "../Shimmer/Shimmer";
import { Container, InputStyles, WrapperShimmer } from "./styles";
import MaskedTextInput from "react-text-mask";

export interface InputOnlyProps {
  autoCapitalize?: boolean;
  autoComplete?: "off" | "on";
  autoCorrect?: any;
  autoFocus?: boolean;
  borderless?: boolean;
  disabled?: boolean;
  flat?: boolean;
  floating?: boolean;
  focusBorderless?: boolean;
  id?: string;
  invalid?: boolean;
  inverse?: boolean;
  mask?: any;
  maxLength?: string | number;
  name: string;
  onBlur?: () => void;
  onChange?: () => void;
  onFocus?: () => void;
  onKeyDown?: () => void;
  placeholder?: string;
  prefix?: React.ReactNode;
  prefixSeparator?: boolean;
  readOnly?: boolean;
  removeMargins?: boolean;
  removePrefixSpacing?: boolean;
  removeSuffixSpacing?: boolean;
  shimmer?: boolean;
  showFakeValuePlaceholder?: boolean;
  showOverflowEllipsis?: boolean;
  small?: boolean;
  spellCheck?: any;
  suffix?: React.ReactNode;
  suffixSeparator?: boolean;
  type?: string;
  value?: string;
  inpuFakeValuePlaceholder?: any;
  inputDefaultPlaceholder?: any;
  inputInversePlaceholder?: any;
}

export const InputOnly: FC<InputOnlyProps> = ({
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
