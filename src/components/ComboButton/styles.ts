import { animation, styled, units } from "../../theme/theme";

export const ComboButtonStyle = styled("div", {
  height: units(2.5),
  borderRadius: 3,
  display: "inline-block",
  position: "relative",
  backgroundColor: "$secondary",
  paddingTop: units(0.25),
  paddingRight: units(0.125),
  paddingBottom: units(0.25),
  paddingLeft: units(0.125),
  marginTop: 0,
  marginRight: units(0.125),
  marginBottom: units(0.5),
  marginLeft: units(0.125),
  boxSizing: "border-box",

  variants: {
    loading: {
      true: { opacity: 1 },
    },

    disabled: {
      true: { opacity: 0.5, pointerEvents: "none" },
    },

    soft: {
      true: { backgroundColor: "$blueGrayLighter" },
    },

    fullWidth: {
      true: { width: "100%" },
    },

    block: {
      true: { width: "100%", textAlign: "left", marginRight: 0, marginLeft: 0 },
    },

    inverse: {
      true: { backgroundColor: "$white" },
    },

    mono: {
      true: {
        backgroundColor: "$transparent",
        borderColor: "$black",
        borderWidth: 1,
        borderStyle: "solid",
      },
    },

    noSpacing: {
      true: { marginBottom: 0 },
    },
    rectangular: {
      true: { borderRadius: 0 },
    },

    primary: {
      true: { backgroundColor: "$primary" },
    },

    secondary: {
      true: {
        backgroundColor: "$transparent",
        borderColor: "$secondary",
        borderWidth: 1,
        borderStyle: "solid",
      },
    },
    shimmer: {
      true: { minWidth: units(6) },
    },
    transparent: {
      true: { backgroundColor: "$transparent" },
    },
  },
});

export const ComboButtonContent = styled("div", {
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  borderRadius: 3,

  variants: {
    shimmer: {
      true: { minWidth: units(6) },
    },

    loading: {
      true: { opacity: 0 },
    },

    rectangular: {
      true: { borderRadius: 0 },
    },
  },
});

export const ComboButtonSeparator = styled("div", {
  width: 1,
  height: units(1.5),
  marginRight: units(0.125),
  marginLeft: units(0.125),
  backgroundColor: "$fogStrong",

  variants: {
    dark: {
      true: { backgroundColor: "$shadow" },
    },

    mono: {
      true: { backgroundColor: "$black" },
    },

    secondary: {
      true: { backgroundColor: "$secondary" },
    },
  },
});

export const ComboButtonLoader = styled("div", {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 3,

  variants: {
    rectangular: {
      true: { borderRadius: 0 },
    },
    shimmer: {
      true: {
        backgroundColor: "$blueGray",
        animationDirection: "alternate",
        animationDuration: "1s",
        animationFillMode: "forwards",
        animationIterationCount: "infinite",
        animationName: animation.shimmer,
        animationTimingFunction: "ease-in-out",
      },
    },
  },
});
