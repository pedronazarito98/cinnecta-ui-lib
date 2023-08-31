import { styled, units } from "../../theme/theme";

export const SeparatorStyles = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$grayDark",

  variants: {
    horizontal: {
      true: {
        flexDirection: "row",
        width: "100%",
        marginTop: units(15),
        marginBottom: units(15),
      },
    },

    vertical: {
      true: {
        height: "100%",
        flexDirection: "column",
        marginLeft: units(15),
        marginRight: units(15),
      },
    },

    noSpacing: {
      true: { marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0 },
    },

    horizontalSmallSpacing: {
      true: { marginTop: units(15), marginBottom: units(15) },
    },

    horizontalLargeSpacing: {
      true: { marginTop: units(15), marginBottom: units(15) },
    },

    verticalSmallSpacing: {
      true: { marginLeft: units(15), marginRight: units(15) },
    },

    verticalLargeSpacing: {
      true: { marginLeft: units(15), marginRight: units(15) },
    },

    line: {
      true: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomStyle: "solid",
        borderBottomColor: "$gray",
      },
    },

    lineVertical: {
      true: {
        flex: 1,
        borderLeftWidth: 1,
        borderLeftStyle: "solid",
        borderLeftColor: "$gray",
      },
    },

    content: {
      true: { paddingLeft: units(15), paddingRight: units(15) },
    },

    contentVertical: {
      true: { paddingTop: units(15), paddingBottom: units(15) },
    },
  },
});
