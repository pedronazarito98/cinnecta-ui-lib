import { styled, units } from "../../theme/theme";

export const LabelContainer = styled("span", {
  display: "flex",
  alignItems: "center",
  flexShrink: 0,
});

export const LabelColor = styled("div", {
  width: 9,
  height: 9,
  borderRadius: "50%",
  marginRight: units(0.5),
  flexShrink: 0,
  position: "relative",
  overflow: "hidden",
});

export const ShimmerLabel = styled("div", {
  display: "flex",
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
});
