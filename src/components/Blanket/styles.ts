import { styled } from "../../theme/theme";

export const BlanketStyles = styled("div", {
  width: "100%",
  height: "100%",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 99,
  background: "$white",
  opacity: 0.75,
  transition: "opacity 300ms ease-out",

  variants: {
    absolute: {
      true: { position: "absolute" },
    },

    fixed: {
      true: { position: "fixed" },
    },

    global: {
      true: { zIndex: 101 },
    },

    primary: {
      true: { background: "$primary" },
    },

    entering: {
      true: { opacity: 0.75, transition: "opacity 300ms ease-out" },
    },

    exiting: {
      true: { opacity: 0.01, transition: "opacity 300ms ease-out" },
    },
  },
});
