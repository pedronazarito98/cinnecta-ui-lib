import { styled } from "../../styles/theme";

export const GridContainer = styled("div", {
  display: "flex",
  width: "100%",
  flexBasis: "auto",

  variants: {
    fullHeight: {
      true: { height: "100vh" },
    },
  },
});

export const GridWrapper = styled("div", {
  display: "flex",
  width: "100%",
  alignItems: "flex-start",
  flexWrap: "wrap",
  flexDirection: "row",
  flex: "1 1 0",
  boxSizing: "border-box",

  variants: {
    fullHeight: {
      true: { height: "100%" },
    },
    vertical: {
      true: { flexDirection: "column", alignItems: "stretch" },
    },

    noWrap: {
      true: { flexWrap: "nowrap" },
    },

    right: {
      true: { alignItems: "flex-end" },
    },

    center: {
      true: { alignItems: "center" },
    },

    spaceBetween: {
      true: { justifyContent: "space-between" },
    },

    spaced: {
      true: { alignItems: "spaced" },
    },
    baseline: {
      true: { alignItems: "baseline" },
    },

    top: {
      true: { justifyContent: "flex-start" },
    },

    middle: {
      true: { justifyContent: "center" },
    },

    bottom: {
      true: { justifyContent: "flex-end" },
    },

    stretch: {
      true: { alignItems: "stretch" },
    },

    resetSpacing: {
      true: {
        marginLeft: -"$gutter_small_regular_left",
        marginRight: -"$gutter_small_regular_right",

        "@mediumAndAbove": {
          marginLeft: -"$gutter_medium_regular_left",
          marginRight: -"$gutter_medium_regular_right",
        },

        "@large": {
          marginLeft: -"$gutter_large_regular_left",
          marginRight: -"$gutter_large_regular_right",
        },

        "@xlarge": {
          marginLeft: -"$gutter_xlarge_regular_left",
          marginRight: -"$gutter_xlarge_regular_right",
        },
      },
    },

    resetLargeSpacing: {
      true: {
        marginLeft: "-gutter_small_large_left",
        marginRight: -"gutter_small_large_right",

        "@mediumAndAbove": {
          marginLeft: -"$gutter_medium_large_left",
          marginRight: -"$gutter_medium_large_right",
        },

        "@large": {
          marginLeft: "-$gutter_large_large_left",
          marginRight: -"$gutter_large_large_right",
        },

        "@xlarge": {
          marginLeft: -"$gutter_xlarge_large_left",
          marginRight: -"$gutter_xlarge_large_right",
        },
      },
    },

    resetMicroSpacing: {
      true: {
        marginLeft: "-$gutter_small_micro_left",
        marginRight: -"$gutter_small_micro_right",

        "@mediumAndAbove": {
          marginLeft: -"$gutter_medium_micro_left",
          marginRight: -"$gutter_medium_micro_right",
        },

        "@large": {
          marginLeft: "-$gutter_large_micro_left",
          marginRight: -"$gutter_large_micro_right",
        },

        "@xlarge": {
          marginLeft: -"$gutter_xlarge_micro_left",
          marginRight: -"$gutter_xlarge_micro_right",
        },
      },
    },

    resetSmallSpacing: {
      true: {
        marginLeft: "-$gutter_small_small_left",
        marginRight: -"$gutter_small_small_right",

        "@mediumAndAbove": {
          marginLeft: -"$gutter_medium_small_left",
          marginRight: -"$gutter_medium_small_right",
        },

        "@large": {
          marginLeft: -"$gutter_large_small_left",
          marginRight: -"$gutter_large_small_right",
        },

        "@xlarge": {
          marginLeft: -"$gutter_xlarge_small_left",
          marginRight: -"$gutter_xlarge_small_right",
        },
      },
    },
  },
});
