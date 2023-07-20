import { styled } from "../../styles/theme";

export const TextContainer = styled("p", {
  wordWrap: "break-word",
  letterSpacing: "normal",
  color: "$neutral_gray80",

  fontWeight: "$normal",
  fontSize: "$small_regular",
  lineHeight: "$regular",
  margin: 0,
  padding: 0,
  display: "block",
  "@large": {
    fontSize: "$large_regular",
  },
  variants: {
    center: {
      true: {
        textAlign: "center",
      },
    },

    fontRaleway: {
      true: {
        fontFamily: "Raleway",
        fontSize: "$small_regular",
        fontFeatureSettings: `'pnum' on, 'lnum' on`,
        "@large": {
          fontSize: "$large_regular",
        },
      },
    },

    right: {
      true: {
        textAlign: "right",
      },
    },

    error: {
      true: {
        color: "$alertDark",
      },
    },

    inverse: {
      true: {
        color: "$white",
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

    light: {
      true: {
        color: "$neutral_gray60",
        fontWeight: "$light",
      },
    },
    color: {
      gray: {
        color: "$neutral_gray50",
      },
    },

    micro: {
      true: {
        fontSize: "$small_micro",

        "@large": {
          fontSize: "$large_micro",
        },
      },
    },

    mono: {
      true: {
        color: "$black",
      },
    },

    muted: {
      true: {
        color: "$blueGrayDark",
      },
    },

    primary: {
      true: {
        color: "$primary",
      },
    },

    secondary: {
      true: {
        color: "$primary_blue50",
      },
    },

    positive: {
      true: {
        color: "$success",
      },
    },

    short: {
      true: {
        lineHeight: "$short",
      },
    },

    tall: {
      true: {
        lineHeight: "$tall",
      },
    },

    small: {
      true: {
        fontSize: "$small_small",
        "@large": {
          fontSize: "$large_small",
        },
      },
    },

    inline: {
      true: {
        display: "inline-block",
      },
    },

    nowrap: {
      true: {
        whiteSpace: "nowrap",
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
      },
    },
    collapsed: {
      true: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
    },
    bold: {
      true: {
        fontWeight: "$bold",
      },
    },
    header: {
      true: {
        fontSize: "1rem",
        lineHeight: "inherit",
        fontWeight: "inherit",
        color: "inherit",
        margin: 0,
        padding: 0,
        display: "flex",
        alignItems: "center",
      },
    },
  },
});
