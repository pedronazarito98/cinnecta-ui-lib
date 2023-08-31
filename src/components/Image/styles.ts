import { styled } from "../../theme/theme";

export const ImageContainer = styled("div", {
  position: "relative",
  overflow: "hidden",
  boxSizing: "border-box",

  variants: {
    inline: {
      true: {
        display: "inline-block",
      },
    },
    rectangular: {
      true: { borderRadius: 0 },
    },

    radius: {
      true: { borderRadius: 3 },
    },
  },
});

export const ImageStyle = styled("div", {
  width: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",

  variants: {
    cover: {
      true: { backgroundSize: "cover" },
    },

    contain: {
      true: { backgroundSize: "contain" },
    },
    opaque: {
      true: { backgroundColor: "$gray" },
    },

    transparent: {
      true: { backgroundColor: "$transparent" },
    },
  },
});

export const LoadingContainer = styled("div", {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
});
