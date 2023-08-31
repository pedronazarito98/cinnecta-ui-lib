import { styled, units } from "../../theme/theme";

export const ConfigurationBoxStyle = styled("div", {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  fontFamily: "$default",
});

export const ConfigurationBoxHeader = styled("div", {
  paddingRight: units(1.5),
  paddingLeft: units(1.5),
  borderBottomWidth: 1,
  borderBottomColor: "$blueGrayLight",
  borderBottomStyle: "solid",
  background: "$white",

  "@large": {
    paddingRight: units(3),
    paddingLeft: units(3),
  },
});

export const ConfigurationBoxHeaderItem = styled("div", {
  paddingRight: units(2),

  variants: {
    padded: {
      true: {
        paddingTop: units(0.5),
        paddingBottom: units(0.5),

        "@medium": {
          paddingTop: units(1),
          paddingBottom: units(1),
        },
      },
    },
    borderRight: {
      true: {
        "@medium": {
          borderRightWidth: 1,
          borderRightColor: "$blueGrayLight",
          borderRightStyle: "solid",
        },
      },
    },
  },
});

export const ConfigurationBoxBody = styled("div", {
  flex: 1,
  background: "$blueGrayLightest",
  overflow: "auto",
  paddingBottom: units(4),
});

export const ConfigurationBoxBullet = styled("div", {
  width: 6,
  height: 6,
  background: "$grayDarker",
  borderRadius: "50%",
  marginTop: 8,
});

export const CloseButtonContainer = styled("div", {
  position: "absolute",
  right: units(1),
  top: units(1),

  "@medium": {
    position: "static",
    borderLeftWidth: 1,
    borderLeftColor: "$blueGray",
    borderLeftStyle: "solid",
    marginLeft: 16,
    paddingLeft: 8,
  },
});
