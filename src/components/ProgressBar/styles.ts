import { styled } from "../../theme/theme";

export const ContainerProgressBar = styled("div", {
  display: "inline-block",
});

export const ProgressBarStyles = styled("div", {
  borderRadius: 15 * 0.5,
});

export const OutsideProgressBar = styled("div", {
  backgroundColor: "#e5e5e5",
  position: "relative",
  boxShadow: "inset 1px 2px 5px #c1c1c1",
  borderRadius: 15 * 0.5,
  variants: {
    micro: {
      true: { width: 15 * 5, height: 15 * 0.8 },
    },

    small: {
      true: { width: 15 * 10, height: 15 * 0.8 },
    },

    medium: {
      true: { width: 15 * 15, height: 15 * 0.8 },
    },

    large: {
      true: { width: 15 * 20, height: 15 * 0.8 },
    },
    square: {
      true: { borderRadius: 3 * 0.5 },
    },
  },
});

export const InsideProgressBar = styled("div", {
  backgroundColor: "$secondary",
  backgroundImage: "linear-gradient(to right, #055bad , #00d4ff)",
  height: "100%",
  maxWidth: "100%",
  position: "absolute",
  borderRadius: 15 * 0.5,
  variants: {
    loading: {
      true: { backgroundColor: "$blueGray", backgroundImage: "None" },
    },
    square: {
      true: { borderRadius: 3 * 0.5 },
    },
  },
});

export const ProgressionStyles = styled("div", {
  textAlign: "right",
  marginBottom: 15 * 0.1,
  fontSize: 15 * 1.2,
});
