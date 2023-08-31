import { styled, units } from "../../theme/theme";

export const HeaderPage = styled("div", {
  paddingTop: units(1),
  paddingBottom: units(1),
  display: "flex",
  marginBottom: units(1.5),

  variants: {
    withBorder: {
      true: {
        borderBottomColor: "$blueGray",
        borderBottomWidth: 1,
        borderBottomStyle: "solid",
        marginBottom: units(2),
      },
    },

    noMargin: {
      true: { marginBottom: 0 },
    },
  },
});
