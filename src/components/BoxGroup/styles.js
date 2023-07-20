import { styled, units } from "../../styles/theme";

export const Container = styled("div", {
  display: "flex",
  alignItems: "center",
});

export const Row = styled("div", {
  display: "flex",
  overflowY: "auto",
  flexDirection: "column",
  flexWrap: "wrap",
});

export const SubItens = styled("div", {
  display: "flex",
});

export const Box = styled("div", {
  backgroundColor: "$secondary",
  marginRight: units(1),
  borderRadius: units(0.3),
  color: "$white",
  margin: units(0.3),
  marginLeft: 0,
  fontSize: units(1),
  width: "fit-content",
  cursor: "default",
  variants: {
    medium: {
      true: { padding: units(0.8), fontSize: units(1) },
    },

    small: {
      true: { padding: units(0.5), fontSize: units(0.9) },
    },

    micro: {
      true: { padding: units(0.4), fontSize: units(0.7) },
    },

    large: {
      true: { padding: units(1), fontSize: units(1.1) },
    },
  },
});

export const Others = styled("div", {
  borderRadius: 3,
  cursor: "pointer",
  marginLeft: units(0.8),
});
