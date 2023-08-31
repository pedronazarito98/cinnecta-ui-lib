import { icon, styled } from "../../theme/theme";

export const IconStyle = styled("div", {
  padding: 2,
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  variants: {
    noPadding: {
      true: { padding: 0 },
    },
  },
});

export const IconSvg = styled("svg", {
  width: icon.size.default,

  variants: {
    muted: {
      true: { fill: "$blueGrayDark" },
    },

    primary: {
      true: { fill: "$primary" },
    },

    secondary: {
      true: { fill: "$secondary" },
    },

    inverse: {
      true: { fill: "$white" },
    },

    mono: {
      true: { fill: "$black" },
    },

    text: {
      true: { fill: "$grayDarker" },
    },

    micro: {
      true: { width: icon.size.micro },
    },

    small: {
      true: { width: icon.size.small },
    },

    smaller: {
      true: { width: icon.size.smaller },
    },

    large: {
      true: { width: icon.size.large },
    },

    huge: {
      true: { width: icon.size.huge },
    },
  },
});
