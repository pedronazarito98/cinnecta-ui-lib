import { styled } from "../../styles/theme";

export const TitleStyles = styled("div", {
  wordWrap: "break-word",
  letterSpacing: "normal",
  // fontFamily: font.title ? font.title : font.default,
  color: "$grayDarker",
  fontWeight: "$bold",
  lineHeight: "$short",
  margin: 0,
  paddingTop: 15 * 0.5,
  paddingBottom: 15 * 0.5,
  display: "block",
  textAlign: "inherit",

  variant: {
    default: {
      true: { fontFamily: "$default" },
    },

    // alternative: {
    //   true: { fontFamily: font.alternative ? font.alternative : font.default },
    // },

    inverse: {
      true: { color: "$white" },
    },

    center: {
      true: { textAlign: "center" },
    },

    right: {
      true: { textAlign: "right" },
    },

    level1: {
      true: {
        fontSize: "$small_title1",

        "@large": {
          fontSize: "large_title1",
        },
      },
    },

    level2: {
      true: {
        fontSize: "$small_title2",

        "@large": {
          fontSize: "$large_title2",
        },
      },
    },

    level3: {
      true: {
        fontSize: "$small_title3",

        "@large": {
          fontSize: "$large_title3",
        },
      },
    },

    level4: {
      true: {
        fontSize: "$small_title4",

        "@large": {
          fontSize: "$large_title4",
        },
      },
    },

    level5: {
      true: {
        fontSize: "$small_title5",

        "@large": {
          fontSize: "$large_title5",
        },
      },
    },

    level6: {
      true: {
        fontSize: "$small_title6",

        "@large": {
          fontSize: "$large_title6",
        },
      },
    },
    light: {
      true: { fontWeight: "$light" },
    },

    regular: {
      true: { fontWeight: "$normal" },
    },

    mono: {
      true: { color: "$black" },
    },

    muted: {
      true: { color: "$blueGrayDark" },
    },

    negative: {
      true: { color: "$error" },
    },

    noBottomSpacing: {
      true: { paddingBottom: 0 },
    },

    noTopSpacing: {
      true: { paddingTop: 0 },
    },

    primary: {
      true: { color: "$primary" },
    },

    positive: {
      true: { color: "$success" },
    },

    secondary: {
      true: { color: "$secondary" },
    },

    short: {
      true: { lineHeight: "$shorter" },
    },

    tall: {
      true: { lineHeight: "$tall" },
    },

    truncate: {
      true: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        width: "100%",
        display: "inline-block",
      },
    },

    inline: {
      true: { display: "inline-block" },
    },
  },
});

export const TitleHeader = styled("h1", {
  fontSize: "1em",
  lineHeight: "inherit",
  fontWeight: "inherit",
  color: "inherit",
  margin: 0,
  padding: 0,
  display: "flex",
  alignItems: "center",

  variants: {
    truncate: {
      true: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        width: "100%",
        display: "inline-block",
      },
    },
    block: {
      true: { display: "block" },
    },

    flex: {
      true: { display: "flex" },
    },
  },
});
