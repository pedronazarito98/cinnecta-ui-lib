import { font, units } from "../../styles/theme";

export const ButtonFlat = styled("button", {
  appearance: "none",
  borderWidth: 0,
  background: "$secondary",
  height: units(2.5),
  width: units(2.5),
  padding: 0,
  borderRadius: "50%",
  color: "$white",
  fill: "$white",
  outline: 0,
  position: "relative",
  margin: 0,
  fontWeight: 500,
  fontFamily: font.default,
  cursor: "pointer",
  boxSizing: "border-box",
  overflow: "hidden",

  "&&:hover": {
    background: "$secondarySaturated",
  },

  "&&:active": {
    background: "$secondaryDarker",
  },

  variants: {
    small: {
      true: { width: units(1.75), height: units(1.75) },
    },

    soft: {
      true: {
        background: "$blueGrayLighter",
        color: "$primary",
        fill: "$primary",

        "&&:hover": {
          background: "$blueGrayLight",
        },

        "&&:active": {
          background: "$blueGray",
        },
      },
    },

    loading: {
      true: { opacity: 1, pointerEvents: "none" },
    },

    disabled: {
      true: { opacity: 0.5, pointerEvents: "none" },
    },

    mono: {
      true: {
        background: "$transparent",
        borderColor: "$black",
        borderWidth: 1,
        borderStyle: "solid",
        color: "$black",
        fill: "$black",

        "&:hover": {
          background: "none",
        },

        "&:active": {
          background: "$grayLighter",
        },
      },
    },

    primary: {
      true: {
        background: "$primary",

        "&:hover": {
          background: "$primarySaturated",
        },

        "&:active": {
          background: "$primaryDarker",
        },
      },
    },

    secondary: {
      true: {
        background: "$transparent",
        borderColor: "$secondary",
        borderWidth: 1,
        borderStyle: "solid",
        color: "$secondary",
        fill: "$secondary",

        "&:hover": {
          color: "$secondarySaturated",
          fill: "$secondarySaturated",
          background: "$grayLightest",
        },

        "&:active": {
          borderColor: "$secondaryDarker",
          background: "$grayLighter",
        },
      },
    },

    inverse: {
      true: {
        background: "$white",
        color: "$primary",
        fill: "$primary",
        borderWidth: 0,

        "&:hover": {
          background: "$blueGrayLight",
        },

        "&:active": {
          background: "$blueGray",
        },
      },
    },

    transparent: {
      true: {
        background: "$transparent",
        color: "$primary",
        fill: "$primary",

        "&:hover": {
          background: "$shadowWeakest",
        },

        "&:active": {
          background: "$shadowWeaker",
        },
      },
    },

    square: {
      true: { borderRadius: 4 },
    },
  },
});

export const ContentButton = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 1,
  transition: "opacity .2s",
  whiteSpace: "nowrap",
  userSelect: "none",

  variants: {
    loading: {
      true: {
        opacity: 0,
      },
    },
  },
});

export const LoaderButton = styled("div", {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const ShimmerButton = styled("div", {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
});
