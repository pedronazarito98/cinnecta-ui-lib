import { styled } from "../../theme/theme";

export const Container = styled("div", {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  padding: 0,
  margin: 0,
  height: "100vh",
  width: "100vw",
  overflow: "auto",
  boxSizing: "border-box",
  variants: {
    centralize: {
      true: { display: "flex", alignItems: "center", justifyContent: "center" },
    },
  },
});

export const ModalStyles = styled("div", {
  position: "absolute",
  zIndex: 999,
  background: "$white",
  left: "50%",
  boxSizing: "border-box",
  transform: "translate(-50%, 0)",
  width: `calc(100% - ${15 * 2}px)`,
  borderRadius: 3,
  borderColor: "$gray",
  borderWidth: 1,
  borderStyle: "solid",
  padding: 15 * 1.5,
  marginTop: 15 * 1.5,

  variants: {
    centralize: {
      true: { display: "flex", alignItems: "center" },
    },

    default: {
      true: { maxWidth: 15 * 30 },
    },

    medium: {
      true: { maxWidth: 15 * 40 },
    },

    flex: {
      true: { display: "flex", flexDirection: "column" },
    },

    micro: {
      true: { maxWidth: 15 * 18 },
    },

    small: {
      true: { maxWidth: 15 * 24 },
    },

    large: {
      true: { maxWidth: 15 * 64 },
    },

    xlarge: {
      true: { maxWidth: 15 * 96 },
    },

    fullScreen: {
      true: {
        width: "unset",
        margin: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        transform: "unset",
        borderRadius: 0,
        border: 0,
      },
    },
    noPadding: {
      true: { padding: 0 },
    },
    fullHeight: {
      true: {
        minHeight: `calc(100% - ${15 * 3}px)`,
        "@large": {
          maxHeight: `calc(100% - ${15 * 3}px)`,
        },
      },
    },
  },
});

export const CloseButton = styled("div", {
  position: "absolute",
  top: 15 * 0.5,
  right: 15 * 0.5,
});
