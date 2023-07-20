import { styled } from "../../styles/theme";

export const ClickableStyle = styled("span", {
  cursor: "pointer",
  borderRadius: 3,

  "&:hover": {
    background: "$shadowWeakest",
  },

  "&:active": {
    background: "$shadowWeaker",
  },

  variants: {
    disabled: {
      true: { pointerEvents: "none", opacity: 0.5 },
    },

    inverse: {
      true: {
        "&:hover": {
          background: "$fogWeakest",
        },

        "&:active": {
          background: "$fogWeaker",
        },
      },
    },

    rectangular: {
      true: { borderRadius: 0 },
    },
  },
});
