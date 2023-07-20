import { styled, units } from "../../styles/theme";

export const ItemConfiguration = styled("div", {
  borderRadius: 3,
  borderWidth: 1,
  borderColor: "$blueGrayLight",
  borderStyle: "solid",
  background: "$white",
  overflow: "hidden",
});

export const ItemContent = styled("div", {
  padding: units(1.5),
});

export const StatusLabel = styled("div", {
  width: 16,
  height: 16,
  marginLeft: 8,
  borderRadius: "50%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",

  variants: {
    done: {
      true: { background: "$success" },
    },

    error: {
      true: { background: "$alert" },
    },
  },
});

export const ErrorMessage = styled("div", {
  background: "$alertLight",
  marginTop: units(1.5),
  marginRight: units(-1.5),
  marginBottom: units(-1.5),
  marginLeft: units(-1.5),
  paddingTop: units(1),
  paddingRight: units(1.5),
  paddingBottom: units(1),
  paddingLeft: units(1.5),
});
