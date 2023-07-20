import { styled } from "../../styles/theme";
import Link from "next/link";

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
  },
});
