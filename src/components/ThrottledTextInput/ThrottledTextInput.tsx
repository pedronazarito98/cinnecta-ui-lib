import React, { ChangeEvent, ReactElement, ReactNode } from "react";
import _ from "lodash";

export interface ThrottledTextInputProps {
  debounceTimeoutMs?: number;
  debouncedOnChange?: (value: string) => void;
  throttleTimeoutMs?: number;
  throttledOnChange?: (value: string) => void;
  children: ReactNode;
}

export const ThrottledTextInput: React.FC<ThrottledTextInputProps> = ({
  debouncedOnChange,
  debounceTimeoutMs,
  throttledOnChange,
  throttleTimeoutMs,
  children,
}) => {
  const debouncedOnChangeFn = _.debounce((value: string) => {
    debouncedOnChange && debouncedOnChange(value);
  }, debounceTimeoutMs);

  const throttledOnChangeFn = _.throttle((value: string) => {
    throttledOnChange && throttledOnChange(value);
  }, throttleTimeoutMs);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (debouncedOnChange && debounceTimeoutMs) {
      debouncedOnChangeFn(value);
    } else if (throttledOnChange && throttleTimeoutMs) {
      throttledOnChangeFn(value);
    }
  };

  return React.cloneElement(React.Children.only(children) as ReactElement, {
    onChange: onChange,
  });
};
