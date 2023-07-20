import { styled, units } from "../../styles/theme";

export const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  position: "relateive",
});

export const AvatarStyle = styled("div", {
  borderRadius: "50%",
  marginLeft: units(-1),
  backgroundColor: "$blueGray",
  boxShadow: "3px 3px 3px -1px #d3d3d3",

  ":nth-child(1)": {
    marginLeft: 0,
  },

  variants: {
    squareAvatar: {
      true: {
        borderRadius: 0,
      },
    },
  },
});

export const Others = styled("div", {
  borderRadius: 3,
  cursor: "pointer",
  marginLeft: units(0.8),
});
