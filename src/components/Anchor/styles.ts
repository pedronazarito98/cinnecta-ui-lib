import { styled } from "../../theme/theme";

export const AnchorStyles = styled("a", {
  color: "$secondary",
  cursor: "pointer",
  textDecoration: "none",

  variants: {
    underlined: {
      true: {
        "&:hover": {
          textDecoration: "underline",
        },
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
      },
    },
  },
});
