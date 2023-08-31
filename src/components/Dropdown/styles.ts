import { styled, units } from "../../theme/theme";

export const DropdownStyles = styled("button", {
  minWidth: units(1.5),
  minHeight: units(1.5),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  outline: "none",
  cursor: "pointer",
  borderWidth: 0,
  background: "$transparent",
  position: "relative",
  variants: {
    asAButton: {
      true: { margin: 0 },
    },

    only: {
      true: { minWidth: units(2.5), height: units(2.5) },
    },
  },
});

export const DropdownArrow = styled("svg", {
  width: units(0.5),
  fill: "$white",
  marginLeft: 8,

  variants: {
    leftMarged: {
      true: { marginLeft: units(0.75) },
    },

    rightMarged: {
      true: { marginRight: units(0.75) },
    },

    mono: {
      true: { fill: "$black" },
    },

    primary: {
      true: { fill: "$primary" },
    },

    secondary: {
      true: { fill: "$secondary" },
    },
  },
});

export const DropdownContainer = styled("div", {
  display: "inline-block",
  boxSizing: "border-box",
  maxWidth: "100%",
  position: "relative",
  variants: {
    relative: {
      true: { position: "relative" },
    },

    asAButton: {
      true: { marginTop: 0 },
    },

    noSpacing: {
      true: { marginBottom: 0 },
    },
  },
});

export const DropdownList = styled("ul", {
  margin: 0,
  padding: 0,
  listStyle: "none",

  variants: {
    listItem: {
      true: {},
    },
  },
});

//! Dropdown Menu

export const DropdownMenuStyle = styled("div", {
  position: "absolute",
  marginTop: units(0.25),
  top: "100%",
  backgroundColor: "$white",
  boxShadow: `0 ${units(0.5)} ${units(0.75)} ${units(-0.45)} ${"$shadow"}`,
  padding: units(0.5),
  borderRadius: 4,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "$blueGrayLight",
  zIndex: 50,
  opacity: 0.01,
  transform: "translate(0, -10%)",
  transition: "opacity 200ms ease-out, transform 300ms ease-out",
  pointerEvents: "none",

  variants: {
    left: {
      true: { left: 0 },
    },

    right: {
      true: { right: 0 },
    },

    leftSide: {
      true: { right: "100%", marginTop: 0, marginRight: units(0.25) },
    },

    rightSide: {
      true: { left: "100%", marginTop: 0, marginLeft: units(0.25) },
    },

    sideBottom: {
      true: { top: "unset", bottom: 0 },
    },

    sideTop: {
      true: { top: 0 },
    },

    insideAButton: {
      true: { marginRight: units(0.125), marginLeft: units(0.125) },
    },

    //transitions
    entering: {
      true: {
        opacity: 1,
        transform: "translate(0, 0)",
        transition: "opacity 200ms ease-out, transform 300ms ease-out",
        pointerEvents: "auto",
      },
    },

    exiting: {
      true: {
        opacity: 0,
        transform: "translate(0, -10%)",
        transition: "opacity 200ms ease-out, transform 300ms ease-out",
        pointerEvents: "none",
      },
    },
  },
});
