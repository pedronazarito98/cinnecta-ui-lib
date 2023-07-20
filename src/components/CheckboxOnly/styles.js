import { input, styled } from "../../styles/theme";

export const ContainerCheckOnly = styled("div", {
  display: "inline-block",
  position: "relative",
  cursor: "pointer",
  overflow: "hidden",
  borderRadius: 3,
  marginTop: 2,

  "&:focus-within": {
    boxShadow: `0 0 2px $secondary`,
  },
});

export const CheckboxStyle = styled("div", {
  width: input.checkbox.size,
  height: input.checkbox.size,
  background: input.checkbox.background,
  textAlign: "center",
  ...input.checkbox.border,
  boxSizing: "border-box",

  variants: {
    disabled: {
      true: {
        background: input.checkbox.disabled.background,
        ...input.checkbox.disabled.border,
      },
    },

    invalid: {
      true: {
        background: input.checkbox.invalid.background,
        ...input.checkbox.invalid.border,
      },
    },
  },
});

export const CheckboxInput = styled("input", {
  width: "100%",
  height: "100%",
  margin: 0,
  padding: 0,
  opacity: 0,
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,

  "&:focus + [data-fake-checkbox]": {
    zIndex: 1,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "$secondary",
    boxSizing: "border-box",
  },
});

export const MarkContainer = styled("div", {
  display: "flex",
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: input.checkbox.borderRadius,
});

export const CheckMark = styled("div", {
  background: "$secondary",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const CheckMarkIcon = styled("svg", {
  fill: "$white",
  width: "60%",
});
