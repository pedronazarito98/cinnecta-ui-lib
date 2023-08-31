import * as React from "react";
import { keyframes, styled } from "../../theme/theme";

export interface ShimmerProps {
  height?: string;
  width?: string;
  block?: boolean;
}
const bounceKeyframes = keyframes({
  "0%": { backgroundColor: "#e6e9f0" },
  "50%": { backgroundColor: "#EEF0F4" },
  "100%": { backgroundColor: "#e6e9f0" },
});

const ShimmerContainer = styled("span", {
  backgroundColor: "$blueGray",
  display: "inline-block",
  position: "relative",
  animationDirection: "alternate",
  animationDuration: "1s",
  animationFillMode: "forwards",
  animationIterationCount: "infinite",
  animationName: bounceKeyframes(),
  animationTimingFunction: "ease-in-out",
});

export const Shimmer: React.FC<ShimmerProps> = ({ height, width }) => (
  <ShimmerContainer aria-busy="true" style={{ height, width }} />
);
