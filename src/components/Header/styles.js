import { styled } from "../../styles/theme";
import Image from "next/image";

export const HeaderContainer = styled("header", {
  height: "4.875rem",
  left: "15rem",
  top: "0px",
  borderRadius: "0px",
  padding: "0 1rem",
  backgroundColor: "$white",
  flexHorizontalCenter: 8,
  justifyContent: "flex-start",
});

export const Icon = styled(Image, {
  left: "0px",
  top: "0px",
  borderRadius: "0.25rem",
});

export const WrapperText = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: "0px",

  p: {
    fontFamily: "Cabin",
    margin: 0,
    fontSize: "1.375rem",
    fontWeight: "500",
    lineHeight: "1.75rem",
    letterSpacing: "0em",
    textAlign: "left",
    color: "#323232",
  },

  span: {
    fontFamily: "Cabin",
    fontSize: "0.875rem",
    fontWeight: "400",
    lineHeight: "1.125rem",
    letterSpacing: "0em",
    textAlign: "left",
    color: "$neutral_gray50",
  },
});
