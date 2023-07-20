import { styled } from "../../styles/theme";

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
        marginTop: 15 * 2,
        marginBottom: 15 * 2,
      },
    },

    vertical: {
      true: {
        height: "100%",
        flexDirection: "column",
        marginLeft: 15 * 2,
        marginRight: 15 * 2,
      },
    },

    noSpacing: {
      true: { marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0 },
    },

    horizontalSmallSpacing: {
      true: { marginTop: 15 * 1, marginBottom: 15 * 1 },
    },

    horizontalLargeSpacing: {
      true: { marginTop: 15 * 3, marginBottom: 15 * 3 },
    },

    verticalSmallSpacing: {
      true: { marginLeft: 15 * 1, marginLeft: 15 * 1 },
    },

    verticalLargeSpacing: {
      true: { marginLeft: 15 * 3, marginLeft: 15 * 3 },
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
      true: { paddingLeft: 15 * 1, paddingRight: 15 * 1 },
    },

    contentVertical: {
      true: { paddingTop: 15 * 1, paddingTop: 15 * 1 },
    },
  },
});
