import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { breakpoints } from "@/styles/foundations/breakpoints";

const initialBreakpoint = {
  name: "default",
  value: 0,
};

const { Provider, Consumer } = React.createContext(initialBreakpoint);
const ResponsiveConsumer = Consumer;

const withBreakpoints = (Comp) => (props) =>
  (
    <ResponsiveConsumer>
      {(breakpoint) => (
        <Comp
          breakpoint={breakpoint}
          isGreaterThan={(value) =>
            breakpointIsGreaterThan(value, breakpoint.value)
          }
          isLessThan={(value) => breakpointIsLessThan(value, breakpoint.value)}
          {...props}
        />
      )}
    </ResponsiveConsumer>
  );

class ResponsiveWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialBreakpoint };
    this.mediaQueries = [];
  }

  componentDidMount() {
    this.mediaQueries = Object.keys(breakpoints).map((key) => {
      const query = window.matchMedia(`(min-width: ${breakpoints[key]}px)`);
      query.breakpoint = breakpoints[key];
      query.name = key;

      query.addListener(() => this.dispatchActiveQuery());

      return query;
    });

    this.dispatchActiveQuery();
  }

  componentWillUnmount() {
    for (let query of this.mediaQueries) {
      query.removeListener(() => this.dispatchActiveQuery());
    }
  }

  dispatchActiveQuery() {
    const activeQuery = this.mediaQueries.reduce((prev, curr) => {
      return curr.matches ? curr : prev && prev.matches ? prev : null;
    });

    const breakpointName = activeQuery ? activeQuery.name : "default";
    const breakpointSize = activeQuery && activeQuery.breakpoint;

    this.setState({
      name: breakpointName,
      value: breakpointSize,
    });
  }

  render() {
    return (
      <Provider value={{ ...this.state }}>
        <Fragment>{this.props.children}</Fragment>
      </Provider>
    );
  }
}

const propTypes = {
  unmount: PropTypes.bool,
  showFor: PropTypes.oneOf(["small", "medium", "large", "xlarge"]),
  hideFor: PropTypes.oneOf(["small", "medium", "large", "xlarge"]),
  children: PropTypes.any,
};

class Responsive extends Component {
  render() {
    const { unmount, showFor, hideFor, children } = this.props;

    const content = (breakpoint) => {
      if (
        (showFor && breakpointIsLessThan(showFor, breakpoint.value)) ||
        (hideFor && breakpointIsGreaterThan(hideFor, breakpoint.value))
      ) {
        if (unmount) {
          return null;
        } else {
          return <div style={{ display: "none" }}>{children}</div>;
        }
      } else {
        return children;
      }
    };
    return <Consumer>{(breakpoint) => content(breakpoint)}</Consumer>;
  }
}

Responsive.propTypes = propTypes;

const breakpointIsGreaterThan = (
  breakpointToCompare,
  currentBreakpointSize
) => {
  const comparison =
    typeof breakpointToCompare === "string"
      ? breakpoints[breakpointToCompare]
      : breakpointToCompare;

  return currentBreakpointSize === null || currentBreakpointSize >= comparison;
};

const breakpointIsLessThan = (breakpointToCompare, currentBreakpointSize) => {
  const comparison =
    typeof breakpointToCompare === "string"
      ? breakpoints[breakpointToCompare]
      : breakpointToCompare;

  return currentBreakpointSize !== null && currentBreakpointSize < comparison;
};

export { ResponsiveWrapper, ResponsiveConsumer, Responsive, withBreakpoints };
