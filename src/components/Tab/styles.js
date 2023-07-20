import { font, styled, units } from "../../styles/theme";

export const ButtonContainer = styled("button", {
  background: "$shadowWeaker",
  color: "$primary",
  appearance: "none",
  borderWidth: 0,
  height: units(2.5),
  //minWidth: units(2.5),
  paddingTop: units(0.25),
  paddingRight: units(1.25),
  paddingBottom: units(0.25),
  paddingLeft: units(1.25),
  fontSize: units(0.95),
  outline: 0,
  position: "relative",
  marginRight: 0.5,
  marginBottom: 0,
  marginLeft: 0.5,
  fontWeight: 500,
  fontFamily: font.default,
  boxSizing: "border-box",
  overflow: "hidden",
  cursor: "pointer",

  "&:hover": {
    background: "$shadowWeakest",
  },

  variants: {
    fullWidth: {
      true: { width: "100%" },
    },

    loading: {
      true: { opacity: 1, pointerEvents: "none" },
    },

    underlined: {
      true: {
        borderBottomWidth: 1,
        borderBottomColor: "$primary",
        borderBottomStyle: "solid",
      },
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
      },
    },

    primary: {
      true: { backgroundColor: "$primary" },
    },

    secondary: {
      true: {
        backgroundColor: "$transparent",
        borderColor: "$secondary",
        borderWidth: 1,
        borderStyle: "solid",
        color: "$secondary",
      },
    },

    inverse: {
      true: {
        backgroundColor: "$white",
        color: "$primary",
        borderWidth: 0,
      },
    },

    active: {
      true: {
        background: "$transparent",
        cursor: "default",

        "&:hover": {
          background: "$transparent",
        },
      },
    },

    noBorder: {
      true: { border: "none", borderWidth: 0 },
    },
  },
});

export const ButtonContent = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  opacity: 1,
  transition: "opacity .2s",
  whiteSpace: "nowrap",
  userSelect: "none",

  variants: {
    fullWidth: {
      true: { justifyContent: "center" },
    },

    loading: {
      true: { opacity: 0 },
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
