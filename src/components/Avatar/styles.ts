import { styled, units } from "../../theme/theme";

export const AvatarStyle = styled("div", {
  borderRadius: "50%",
  overflow: "hidden",
  backgroundSize: "cover",
  backgroundColor: "$gray",
  backgroundPosition: "center",

  variants: {
    inline: {
      true: { display: "inline-block" },
    },

    micro: {
      true: { width: units(1.5), height: units(1.5) },
    },

    small: {
      true: { width: units(2.5), height: units(2.5) },
    },

    medium: {
      true: { width: units(3.5), height: units(3.5) },
    },

    large: {
      true: { width: units(5), height: units(5) },
    },

    square: {
      true: { borderRadius: 3 },
    },
  },
});
