import { styled } from "../../styles/theme";

export const FormElementStyle = styled("label", {
  display: "inline-block",

  variants: {
    block: {
      true: {
        display: "block",
        width: "100%",
      },
    },
  },
});

export const LabelStyle = styled("div", {
  marginBottom: "8px",

  variants: {
    hideLabel: {
      true: {
        border: 0,
        clip: "rect(0, 0, 0, 0)",
        display: "block",
        height: 1,
        margin: -1,
        overflow: "hidden",
        padding: 0,
        position: "absolute",
        width: 1,
      },
    },
  },
});
