import { keyframes, styled } from "../../theme/theme";

const bounceKeyframes = keyframes({
  "0%, 80%, 100%": {
    transform: "scale(0)",
  },

  "40%": {
    transform: "scale(1.0)",
  },
});

export const LoaderStyles = styled("div", {
  flexHorizontalCenter: 0,
});

export const LoaderBall = styled("div", {
  width: 15 * 1,
  height: 15 * 1,
  margin: 15 * 0.1,
  backgroundColor: "$white",
  borderRadius: "100%",
  display: "inline-block",
  // @ts-expect-error TS(2322): Type '{ (): string; name: string; }' is not assign... Remove this comment to see the full error message
  animationName: bounceKeyframes,
  animationDuration: "1.4s",
  animationIterationCount: "infinite",
  animationEasing: "ease-in-out",
  animationDirection: "both",

  variants: {
    small: {
      true: { width: 15 * 0.5, height: 15 * 0.5 },
    },

    large: {
      true: { width: 15 * 2, height: 15 * 2 },
    },

    primary: {
      true: { backgroundColor: "$primary" },
    },

    secondary: {
      true: { backgroundColor: "$secondary" },
    },

    mono: {
      true: { backgroundColor: "$grayDarker" },
    },

    second: {
      true: { animationDelay: "0.16s" },
    },

    third: {
      true: { animationDelay: "0.32s" },
    },
  },
});
