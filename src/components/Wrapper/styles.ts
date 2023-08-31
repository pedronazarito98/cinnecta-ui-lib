import { container, styled, units } from "../../theme/theme";

export const ContainerWrapper = styled("div", {
  boxSizing: "border-box",
  paddingLeft: units(1.5),
  paddingRight: units(1.5),
  width: "100%",

  "@large": {
    paddingLeft: units(4),
    paddingRight: units(4),
  },

  variants: {
    container: {
      true: { marginLeft: "auto", marginRight: "auto", alignSelf: "center" },
    },

    default: {
      true: { maxWidth: container.default },
    },

    micro: {
      true: { maxWidth: container.micro },
    },

    small: {
      true: { maxWidth: container.small },
    },

    large: {
      true: { maxWidth: container.large },
    },

    fullHeight: {
      true: { height: "100vh" },
    },

    gray: {
      true: { background: "$grayLight" },
    },

    spacingLarge: {
      true: {
        paddingLeft: units(3),
        paddingRight: units(3),

        "@large": {
          paddingLeft: units(6),
          paddingRight: units(6),
        },
      },
    },

    spacingSmall: {
      true: {
        paddingLeft: units(1),
        paddingRight: units(1),

        "@large": {
          paddingLeft: units(3),
          paddingRight: units(3),
        },
      },
    },
    spacingMicro: {
      true: {
        paddingLeft: units(0.5),
        paddingRight: units(0.5),

        "@large": {
          paddingLeft: units(1.5),
          paddingRight: units(1.5),
        },
      },
    },

    verticalSpacing: {
      true: { paddingTop: units(2.5), paddingBottom: units(2.5) },
    },

    verticalSpacingLarge: {
      true: { paddingTop: units(5), paddingBottom: units(5) },
    },

    verticalSpacingSmall: {
      true: { paddingTop: units(1), paddingBottom: units(1) },
    },

    noSpacing: {
      true: {
        paddingTop: 0,
        paddingLeft: 0,
        paddingBottom: 0,
        paddingRight: 0,

        "@large": {
          paddingTop: 0,
          paddingLeft: 0,
          paddingBottom: 0,
          paddingRight: 0,
        },
      },
    },

    relative: {
      true: { position: "relative" },
    },
  },
});
