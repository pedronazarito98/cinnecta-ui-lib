import React, {
  Component,
  createContext,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { breakpoints } from "../../theme/foundations/breakpoints";

interface Breakpoint {
  name: string;
  value: number;
}

const initialBreakpoint: Breakpoint = {
  name: "default",
  value: 0,
};

export interface ResponsiveContext {
  breakpoint: Breakpoint;
  isGreaterThan: (value: string | number) => boolean;
  isLessThan: (value: string | number) => boolean;
}

export interface WithBreakpointsProps extends ResponsiveContext {
  [key: string]: any;
}

const { Provider, Consumer } = createContext<Breakpoint>(initialBreakpoint);
const ResponsiveConsumer = Consumer;

const withBreakpoints =
  <P extends WithBreakpointsProps>(Component: React.ComponentType<P>) =>
  (props: Omit<P, keyof ResponsiveContext>) =>
    (
      <ResponsiveConsumer>
        {(breakpoint) => (
          <Component
            {...(props as P)}
            breakpoint={breakpoint}
            isGreaterThan={(value: string | number) =>
              breakpointIsGreaterThan(value, breakpoint.value)
            }
            isLessThan={(value: string | number) =>
              breakpointIsLessThan(value, breakpoint.value)
            }
          />
        )}
      </ResponsiveConsumer>
    );
interface ResponsiveWrapperProps {
  children: ReactNode;
}

interface MediaQueryListWithBreakpoint {
  mediaQueryList: MediaQueryList;
  breakpoint: number;
  name: string;
}

const ResponsiveWrapper: React.FC<ResponsiveWrapperProps> = ({ children }) => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>({
    ...initialBreakpoint,
  });
  const mediaQueries = useRef<MediaQueryListWithBreakpoint[]>([]);

  useEffect(() => {
    mediaQueries.current = Object.keys(breakpoints).map((key) => {
      const mediaQueryList = window.matchMedia(
        `(min-width: ${breakpoints[key]}px)`
      );

      const queryWithBreakpoint: MediaQueryListWithBreakpoint = {
        mediaQueryList,
        breakpoint: breakpoints[key],
        name: key,
      };

      mediaQueryList.addListener(() =>
        dispatchActiveQuery(queryWithBreakpoint)
      );

      return queryWithBreakpoint;
    });

    dispatchActiveQuery(mediaQueries.current[0]);

    return () => {
      for (let query of mediaQueries.current) {
        query.mediaQueryList.removeListener(() => dispatchActiveQuery(query));
      }
    };
  }, []);

  const dispatchActiveQuery = (activeQuery: MediaQueryListWithBreakpoint) => {
    if (!activeQuery.mediaQueryList.matches) return;

    setBreakpoint({
      name: activeQuery.name,
      value: activeQuery.breakpoint,
    });
  };

  return (
    <Provider value={{ ...breakpoint }}>
      <React.Fragment>{children}</React.Fragment>
    </Provider>
  );
};
interface ResponsiveProps {
  unmount?: boolean;
  showFor?: "small" | "medium" | "large" | "xlarge";
  hideFor?: "small" | "medium" | "large" | "xlarge";
  children: ReactNode;
}
const Responsive: React.FC<ResponsiveProps> = ({
  unmount,
  showFor,
  hideFor,
  children,
}) => {
  const content = (breakpoint: Breakpoint) => {
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
};

const breakpointIsGreaterThan = (
  breakpointToCompare: string | number,
  currentBreakpointSize: number | null
) => {
  const comparison =
    typeof breakpointToCompare === "string"
      ? breakpoints[breakpointToCompare]
      : breakpointToCompare;

  return currentBreakpointSize === null || currentBreakpointSize >= comparison;
};

const breakpointIsLessThan = (
  breakpointToCompare: string | number,
  currentBreakpointSize: number | null
) => {
  const comparison =
    typeof breakpointToCompare === "string"
      ? breakpoints[breakpointToCompare]
      : breakpointToCompare;

  return currentBreakpointSize !== null && currentBreakpointSize < comparison;
};

export { ResponsiveWrapper, ResponsiveConsumer, Responsive, withBreakpoints };
