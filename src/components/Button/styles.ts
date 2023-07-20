import { styled, units } from "../../theme/theme";

export const ButtonContainer = styled("button", {
  appearance: "none",
  borderWidth: 0,
  backgroundColor: "$primary_blue50",
  height: units(2.5),
  verticalPadding: units(0.25),
  horizontalPadding: units(1.25),

  borderRadius: 3,
  color: "$white",
  outline: 0,
  position: "relative",
  marginLeft: units(0.125),
  marginRight: units(0.125),
  marginBottom: units(0.5),
  maxWidth: "100%",
  fontWeight: "$normal",
  cursor: "pointer",
  boxSizing: "border-box",
  overflow: "hidden",
  flexShrink: 0,

  transition: "all 0.2s ease-in-out",

  "&:hover": {
    backgroundColor: "$secondarySaturated",
  },

  "&:active": {
    backgroundColor: "$secondaryDarker",
  },
  variants: {
    soft: {
      true: {
        backgroundColor: "$blueGrayLighter",
        color: "$secondary",

        "&:hover": {
          backgroundColor: "$blueGrayLight",
        },

        "&:active": {
          backgroundColor: "$blueGray",
        },
      },
    },

    dashed: {
      true: {
        color: "$primary",
        backgroundColor: "$transparent",
        borderColor: "$primary",
        borderWidth: 1,
        borderStyle: "dashed",

        "&:hover": {
          background: "$shadowWeakest",
        },

        "&:active": {
          background: "$shadowWeak",
        },
      },
    },

    fullWidth: {
      true: {
        width: "100%",
      },
    },

    loading: {
      true: {
        opacity: 1,
        pointerEvents: "none",
      },
    },

    block: {
      true: {
        width: "100%",
        textAlign: "left",
        marginRight: 0,
        marginLeft: 0,
      },
    },

    compact: {
      true: {
        compactHorizontalPadding: units(0.75),
      },
    },

    wide: {
      true: {
        wideHorizontalPadding: units(1.75),
      },
    },

    shade: {
      true: {
        background: "$shadowWeakest",
        color: "$neutral_gray70",
        svg: {
          path: {
            fill: "$neutral_gray40",
          },
        },

        "&:hover": {
          background: "$shadowWeaker",
        },

        "&:active": {
          background: "$shadowWeak",
        },
      },
    },

    simple: {
      true: {
        background: "$transparent",
        color: "$secondary",

        "&:hover": {
          color: "$secondarySaturated",
          backgroundColor: "$primary_blue2",
        },
      },
    },

    short: {
      true: { height: units(2) },
    },

    tall: {
      true: { height: units(3) },
    },

    underlined: {
      true: {
        borderBottomWidth: 1,
        borderBottomColor: "$primary",
        borderBottomStyle: "solid",
      },
    },

    grouped: {
      true: { marginRight: 0.5, marginBottom: 0, marginLeft: 0.5 },
    },

    groupedFirst: {
      true: { borderRadius: `3px 0 0 3px`, marginLeft: 0 },
    },

    groupedLast: {
      true: { borderRadius: `0 3px 3px 0`, marginRight: 0 },
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

    removeSideSpacing: {
      true: { marginLeft: 0, marginRight: 0 },
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
          backgroundColor: "$primary_blue2",
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
        color: "$secondary",

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

    small: {
      true: {
        fontSize: 13,

        "@large": {
          fontSize: 13,
        },
      },
    },

    large: {
      true: {
        fontSize: "$small_large",

        "@large": {
          fontSize: "$large_large",
        },
      },
    },

    medium: {
      true: {
        fontSize: "$small_small",

        "@large": {
          fontSize: "$large_small",
        },
      },
    },

    danger: {
      true: {
        background: "$alert",
        color: "$white",
        transition: "0.2s all",
        "&:hover": {
          background: "$alertDark",
        },
      },
    },

    btnIcon: {
      true: {
        display: "flex",
        alignItems: "center",
        paddingRight: 20,
        paddingLeft: 20,
        svg: {
          marginLeft: 8,
        },
      },
    },

    ghost: {
      true: {
        backgroundColor: "transparent",
        color: "$primary_blue50",
        transition: "background 0.3s ease-out",
        "&:hover": {
          background: "$primary_blue2",
          color: "$primary_blue50",
        },
      },
    },

    rounded: {
      true: {
        borderRadius: 22,
        color: "$neutral_gray40",
        backgroundColor: "$transparent",
        border: "1px solid $neutral_gray40",

        "&:hover": {
          backgroundColor: "$neutral_gray40",
          color: "$black",
        },

        "&:active": {
          backgroundColor: "#$white",
          color: "$black",
        },
      },
    },

    chip: {
      true: {
        all: "unset",
        fontFamily: "inherit",
        borderRadius: 24,
        border: " 1px solid #898989",
        height: 35,
        maxWidth: "100%",
        verticalPadding: 0.25 * 15,
        horizontalPadding: 1.25 * 15,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        color: "$neutral_gray40",
        backgroundColor: "white",
        zIndex: 1000,

        p: {
          color: "$neutral_gray40",
          "&:hover": {
            color: "$neutral_gray50",
            svg: {
              path: {
                fill: "$neutral_gray50",
              },
            },
          },
        },

        "&:hover": {
          cursor: "pointer",
          color: "$neutral_gray50",
          background: "transparent",
        },
        "&[data-disabled]": { opacity: 0.5, cursor: "not-allowed" },

        "&:active": {
          borderColor: "$primary_blue50",
          backgroundColor: "$primary_blue2",
          svg: {
            path: {
              fill: "$primary_blue50",
            },
          },
          p: {
            color: "$primary_blue50",
          },
        },
      },
    },
  },
});

export const WrapperShimmer = styled("div", {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
});

export const Content = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  opacity: 1,
  transition: "opacity .2s",
  whiteSpace: "nowrap",
  userSelect: "none",

  variants: {
    contentLoading: {
      true: { opacity: 0 },
    },

    contentFullWidth: {
      true: { justifyContent: "center" },
    },
  },
});

export const ButtonLoader = styled("div", {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
