import { keyframes, styled } from "../../theme/theme";
import * as PopoverPrimitive from "@radix-ui/react-popover";

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

export const PopoverContent = styled(PopoverPrimitive.Content, {
  borderRadius: 4,
  padding: 20,
  width: 326,
  backgroundColor: "white",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity",
  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
  "&:focus": {
    boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px, 0 0 0 2px #f0f0f0`,
  },
});

export const TriggerStyle = styled(PopoverPrimitive.Trigger, {
  border: "none",
  background: "transparent",
  color: "#0055ff",

  "&:hover": {
    cursor: "pointer",
    textDecoration: "underline",
  },

  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
    textDecoration: "none",
  },
});

export const PopoverArrow = styled(PopoverPrimitive.Arrow, {
  fill: "white",
});

export const PopoverClose = styled(PopoverPrimitive.Close, {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 25,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#0055ff",
  position: "absolute",
  top: 5,
  right: 5,

  "&:hover": { backgroundColor: "#F5F7FC" },
  "&:focus": { boxShadow: `0 0 0 2px '#0055ff'` },
});
