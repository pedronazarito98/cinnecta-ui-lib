import { styled, units } from "../../theme/theme";

export const ButtonGroupStyle = styled("div", {
  marginBottom: units(0.5),
  boxSizing: "border-box",
  display: "flex",

  variants: {
    soft: {
      true: {
        backgroundColor: "$blueGrayLighter",
        color: "$primary",

        "&:hover": {
          backgroundColor: "$blueGrayLight",
        },

        "&:active": {
          backgroundColor: "$blueGray",
        },
      },
    },

    fullWidth: {
      true: { width: "100%" },
    },

    loading: {
      true: { opacity: 1, pointerEvents: "none" },
    },

    block: {
      true: { width: "100%", textAlign: "left", marginRight: 0, marginLeft: 0 },
    },

    compact: {
      true: { paddingRight: units(0.75), paddingLeft: units(0.75) },
    },

    shade: {
      true: {
        background: "$shadowWeakest",

        "&:hover": {
          background: "$shadowWeaker",
        },

        "&:active": {
          background: "$shadowWeak",
        },
      },
    },

    short: {
      true: { height: units(2) },
    },

    grouped: {
      true: { marginRight: 1, marginBottom: 0, marginLeft: 1 },
    },

    groupedFirst: {
      true: { borderRadius: `0 0 3px 3px` },
    },
    groupedLast: {
      true: { borderRadius: ` 3px 3px 0 0` },
    },

    disabled: {
      true: { opacity: 0.5, pointerEvents: "none" },
    },

    mono: {
      true: {
        backgroundColor: "$transparent",
        borderColor: "$black",
        borderWidth: 1,
        borderStyle: "solid",
        color: "$black",

        "&:hover": {
          background: "none",
        },

        "&:active": {
          backgroundColor: "$grayLighter",
        },
      },
    },

    noSpacing: {
      true: { marginBottom: 0 },
    },

    primary: {
      true: {
        backgroundColor: "$primary",

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
        backgroundColor: "$transparent",
        borderColor: "$secondary",
        borderWidth: 1,
        borderStyle: "solid",
        color: "$secondary",

        "&:hover": {
          color: "$secondarySaturated",
          backgroundColor: "$grayLightest",
        },

        "&:active": {
          borderColor: "$secondaryDarker",
          backgroundColor: "$grayLighter",
        },
      },
    },

    inverse: {
      true: {
        backgroundColor: "$white",
        color: "$primary",
        borderWidth: 0,

        "&:hover": {
          backgroundColor: "$blueGrayLight",
        },

        "&:active": {
          backgroundColor: "$blueGray",
        },
      },
    },

    transparent: {
      true: {
        backgroundColor: "$transparent",
        color: "$primary",

        "&:hover": {
          background: "$shadowWeakest",
        },

        "&:active": {
          background: "$shadowWeaker",
        },
      },
    },

    rectangular: {
      true: { borderRadius: 0 },
    },

    noBorder: {
      true: { border: "none", borderWidth: 0 },
    },
  },
});

export const ButtonContainer = styled("div", {
  flex: 1,
});
