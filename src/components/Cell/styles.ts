import { styled } from "../../theme/theme";

export const CellStyles = styled("div", {
  paddingLeft: "$gutter_small_regular_left",
  paddingRight: "$gutter_small_regular_right",
  boxSizing: "border-box",

  "@mediumAndAbove": {
    paddingLeft: "$gutter_medium_regular_left",
    paddingRight: "$gutter_medium_regular_right",
  },

  "@large": {
    paddingLeft: "$gutter_large_regular_left",
    paddingRight: "$gutter_large_regular_right",
  },

  "@small": {
    paddingLeft: "$gutter_small_regular_left",
    paddingRight: "$gutter_small_regular_right",
  },

  "@xlarge": {
    paddingLeft: "$gutter_xlarge_regular_left",
    paddingRight: "$gutter_xlarge_regular_right",
  },

  variants: {
    fullHeight: {
      true: { height: "100%" },
    },

    fullHeightOnMedium: {
      true: {
        "@mediumAndAbove": {
          height: "100%",
        },
      },
    },

    fullHeightOnLarge: {
      true: {
        "@large": {
          height: "100%",
        },
      },
    },

    fullHeightOnXlarge: {
      true: {
        "@xlarge": {
          height: "100%",
        },
      },
    },

    microSpacing: {
      true: {
        paddingLeft: "$gutter_small_micro_left",
        paddingRight: "$gutter_small_micro_right",

        "@mediumAndAbove": {
          paddingLeft: "$gutter_medium_micro_left",
          paddingRight: "$gutter_medium_micro_right",
        },

        "@large": {
          paddingLeft: "$gutter_large_micro_left",
          paddingRight: "$gutter_large_micro_right",
        },

        "@xlarge": {
          paddingLeft: "$gutter_xlarge_micro_left",
          paddingRight: "$gutter_xlarge_micro_right",
        },
      },
    },

    smallSpacing: {
      true: {
        paddingLeft: "$gutter_small_small_left",
        paddingRight: "$gutter_small_small_right",

        "@mediumAndAbove": {
          paddingLeft: "$gutter_medium_small_left",
          paddingRight: "$gutter_medium_small_right",
        },

        "@large": {
          paddingLeft: "$gutter_large_small_left",
          paddingRight: "$gutter_large_small_right",
        },

        "@xlarge": {
          paddingLeft: "$gutter_xlarge_small_left",
          paddingRight: "$gutter_xlarge_small_right",
        },
      },
    },

    largeSpacing: {
      true: {
        paddingLeft: "$gutter_small_large_left",
        paddingRight: "$gutter_small_large_right",

        "@mediumAndAbove": {
          paddingLeft: "$gutter_medium_large_left",
          paddingRight: "$gutter_medium_large_right",
        },

        "@large": {
          paddingLeft: "$gutter_medium_large_left",
          paddingRight: "$gutter_large_large_right",
        },

        "@xlarge": {
          paddingLeft: "$gutter_xlarge_large_left",
          paddingRight: "$gutter_xlarge_large_right",
        },
      },
    },

    verticalSpacing: {
      true: {
        paddingTop: "$gutter_small_regular_top",
        paddingBottom: "$gutter_small_regular_bottom",

        "@mediumAndAbove": {
          paddingTop: "$gutter_medium_regular_top",
          paddingBottom: "$gutter_medium_regular_bottom",
        },

        "@large": {
          paddingTop: "$gutter_large_regular_top",
          paddingBottom: "$gutter_large_regular_bottom",
        },

        "@xlarge": {
          paddingTop: "$gutter_xlarge_regular_top",
          paddingBottom: "$gutter_xlarge_regular_bottom",
        },
      },
    },

    microVerticalSpacing: {
      true: {
        paddingTop: "$gutter_small_micro_top",
        paddingBottom: "$gutter_small_micro_bottom",

        "@mediumAndAbove": {
          paddingTop: "$gutter_medium_micro_top",
          paddingBottom: "$gutter_medium_micro_bottom",
        },

        "@large": {
          paddingTop: "$gutter_large_micro_top",
          paddingBottom: "$gutter_large_micro_bottom",
        },

        "@xlarge": {
          paddingTop: "$gutter_xlarge_micro_top",
          paddingBottom: "$gutter_xlarge_micro_bottom",
        },
      },
    },

    smallVerticalSpacing: {
      true: {
        paddingTop: "$gutter_small_small_top",
        paddingBottom: "$gutter_small_small_bottom",

        "@mediumAndAbove": {
          paddingTop: "$gutter_medium_small_top",
          paddingBottom: "$gutter_medium_small_bottom",
        },

        "@large": {
          paddingTop: "$gutter_large_small_top",
          paddingBottom: "$gutter_large_small_bottom",
        },

        "@xlarge": {
          paddingTop: "$gutter_xlarge_small_top",
          paddingBottom: "$gutter_xlarge_small_bottom",
        },
      },
    },

    largeVerticalSpacing: {
      true: {
        paddingTop: "$gutter_small_large_top",
        paddingBottom: "$gutter_small_large_bottom",

        "@mediumAndAbove": {
          paddingTop: "$gutter_medium_large_top",
          paddingBottom: "$gutter_medium_large_bottom",
        },

        "@large": {
          paddingTop: "$gutter_large_large_top",
          paddingBottom: "$gutter_large_large_bottom",
        },

        "@xlarge": {
          paddingTop: "$gutter_xlarge_large_top",
          paddingBottom: "$gutter_xlarge_large_bottom",
        },
      },
    },

    noSpacing: {
      true: {
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,

        "@mediumAndAbove": {
          paddingTop: 0,
          paddingRight: 0,
          paddingBottom: 0,
          paddingLeft: 0,
        },

        "@large": {
          paddingTop: 0,
          paddingRight: 0,
          paddingBottom: 0,
          paddingLeft: 0,
        },

        "@xlarge": {
          paddingTop: 0,
          paddingRight: 0,
          paddingBottom: 0,
          paddingLeft: 0,
        },
      },
    },

    auto: {
      true: { flex: "1 1 0", width: "auto" },
    },

    autoOnMedium: {
      true: {
        "@mediumAndAbove": {
          flex: "1 1 0",
          width: "auto",
        },
      },
    },

    autoOnLarge: {
      true: {
        "@large": {
          flex: "1 1 0",
          width: "auto",
        },
      },
    },

    autoOnXlarge: {
      true: {
        "@xlarge": {
          flex: "1 1 0",
          width: "auto",
        },
      },
    },

    shrink: {
      true: { flex: "0 0 auto", width: "auto" },
    },

    shrinkOnMedium: {
      true: {
        "@mediumAndAbove": {
          flex: "0 0 auto",
          width: "auto",
        },
      },
    },

    shrinkOnLarge: {
      true: {
        "@large": {
          flex: "0 0 auto",
          width: "auto",
        },
      },
    },

    shrinkOnXlarge: {
      true: {
        "@xlarge": {
          flex: "0 0 auto",
          width: "auto",
        },
      },
    },

    fit: {
      true: { flex: "0 1 auto", width: "auto" },
    },

    fitOnMedium: {
      true: {
        "@mediumAndAbove": {
          flex: "0 1 auto",
          width: "auto",
        },
      },
    },

    fitOnLarge: {
      true: {
        "@large": {
          flex: "0 1 auto",
          width: "auto",
        },
      },
    },

    fitOnXlarge: {
      true: {
        "@xlarge": {
          flex: "0 1 auto",
          width: "auto",
        },
      },
    },

    grow: {
      true: { flex: "1 0 auto", width: "auto" },
    },

    growOnMedium: {
      true: {
        "@mediumAndAbove": {
          flex: "1 0 auto",
          width: "auto",
        },
      },
    },

    growOnLarge: {
      true: {
        "@large": {
          flex: "1 0 auto",
          width: "auto",
        },
      },
    },

    growOnXlarge: {
      true: {
        "@xlarge": {
          flex: "1 0 auto",
          width: "auto",
        },
      },
    },

    scroll: {
      true: { overflow: "auto" },
    },

    relative: {
      true: { position: "relative" },
    },
  },
});
