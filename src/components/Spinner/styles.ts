import { animation, styled, units } from "../../theme/theme";

export const SpinnerContainer = styled("div", {
  borderWidth: units(0.2),
  borderStyle: "solid",
  borderTopColor: "$white",
  borderRightColor: "$transparent",
  borderBottomColor: "$transparent",
  borderLeftColor: "$transparent",
  borderRadius: "50%",
  animationName: animation.spinner,
  animationDuration: ".6s",
  animationIterationCount: "infinite",
  animationEasing: "linear",
  width: units(2.5),
  height: units(2.5),

  variants: {
    micro: {
      true: { width: units(1), height: units(1), borderWidth: units(0.125) },
    },

    small: {
      true: {
        width: units(1.375),
        height: units(1.375),
        borderWidth: units(0.125),
      },
    },

    large: {
      true: { width: units(5), height: units(5) },
    },

    primary: {
      true: { borderTopColor: "$primary" },
    },

    secondary: {
      true: { borderTopColor: "$secondary" },
    },

    fast: {
      true: { animationDuration: ".3s" },
    },

    slow: {
      true: { animationDuration: "1s" },
    },
  },
});
