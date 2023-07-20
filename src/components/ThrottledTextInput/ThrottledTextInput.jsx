import React from "react";
import _ from "lodash";

import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.object.isRequired,
  debounceTimeoutMs: PropTypes.number,
  debouncedOnChange: PropTypes.func,
  throttleTimeoutMs: PropTypes.number,
  throttledOnChange: PropTypes.func,
};

export const ThrottledTextInput = ({
  debouncedOnChange,
  debounceTimeoutMs,
  throttledOnChange,
  throttleTimeoutMs,
}) => {
  const debouncedOnChange = _.debounce((value) => {
    debouncedOnChange(value);
  }, debounceTimeoutMs);

  const throttledOnChange = _.throttle((value) => {
    throttledOnChange(value);
  }, throttleTimeoutMs);

  const onChange = (event) => {
    const { value } = event.target;
    const {
      debounceTimeoutMs,
      debouncedOnChange,
      throttleTimeoutMs,
      throttledOnChange,
    } = props;

    if (debouncedOnChange && debounceTimeoutMs) {
      debouncedOnChange(value);
    } else if (throttledOnChange && throttleTimeoutMs) {
      throttledOnChange(value);
    }
  };

  const { children } = props;

  return React.cloneElement(React.Children.only(children), {
    onChange: onChange,
  });
};
ThrottledTextInput.propTypes = propTypes;
