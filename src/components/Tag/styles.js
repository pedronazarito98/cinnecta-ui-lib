import { styled, units } from "../../styles/theme";

export const TagSTyle = styled("div", {
  display: "inline-flex",
  borderRadius: 4,
  background: "$grayLight",
  paddingTop: units(0.275),
  paddingBottom: units(0.275),
  paddingLeft: units(0.5),
  paddingRight: units(0.5),
  alignItems: "center",
  marginRight: units(0.5),
  marginBottom: units(0.5),
  width: "auto",

  variants: {
    borderFull: {
      true: {
        borderRadius: 50,
        marginLeft: "none",
        paddingLeft: units(1),
        paddingRight: units(1),
      },
    },

    primary: {
      true: { background: "$primary_blue0", color: "$primary_blue50" },
    },
    secondary: {
      true: { background: "$secondaryLight" },
    },
    warning: {
      true: { background: "$warningLight" },
    },
    noSpacing: {
      true: { margin: 0 },
    },
    marginLeft: {
      true: { marginLeft: "8px !important" },
    },
  },
});
