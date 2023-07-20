import { styled } from "../../theme/theme";

export interface ShimmerProps {
  height?: string;
  width?: string;
  block?: boolean;
}

const ShimmerContainer = styled("span", {
  backgroundColor: "$blueGray",
  display: "inline-block",
  position: "relative",
  animationDirection: "alternate",
  animationDuration: "1s",
  animationFillMode: "forwards",
  animationIterationCount: "infinite",
  animationName: {
    // @ts-expect-error
    "0%": { backgroundColor: "#e6e9f0" },
    "50%": { backgroundColor: "#EEF0F4" },
    "100%": { backgroundColor: "#e6e9f0" },
  },
  animationTimingFunction: "ease-in-out",
});

export const Shimmer: React.FC<ShimmerProps> = ({ height, width }) => (
  // @ts-expect-error
  <ShimmerContainer aria-busy="true" style={{ height, width }} />
);
