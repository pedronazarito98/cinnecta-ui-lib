import { font, styled, units } from "../../styles/theme";

//! Estilização SummaryItem
export const SummaryItemContainer = styled("li", {
  padding: 0,
  paddingTop: units(1.25),
  paddingBottom: units(1.25),
  position: "relative",
  display: "flex",
  fontFamily: font.default,

  variants: {
    divided: {
      true: {
        borderBottomWidth: 1,
        borderBottomStyle: "solid",
        borderBottomColor: "$blueGrayLight",
      },
    },
  },
});

export const CheckboxContainer = styled("div", {
  flexShrink: 1,
  flexGrow: 0,

  variants: {
    clean: {
      position: "absolute",
      paddingLeft: units(1),
      transform: "translate(calc(-100% + .5rem), 0)",
      visibility: "visible",
      height: "100%",
      transition: "visibility .25s ,opacity .25s",

      "@large": {
        visibility: "hidden",
        opacity: 0.01,
      },
    },

    visible: {
      "@large": {
        visibility: "visible",
        opacity: 1,
      },
    },
  },
});

export const SummaryActions = styled("div", {
  marginTop: units(1),

  "@mediumAndAbove": {
    marginTop: 0,
  },

  variants: {
    clean: {
      true: {
        visibility: "visible",
        transition: "visibility .25s ,opacity .25s",

        "@large": {
          visibility: "hidden",
          opacity: 0.01,
        },
      },
    },

    visible: {
      true: {
        "@large": {
          visibility: "visible",
          opacity: 1,
        },
      },
    },
  },
});

export const InfoContainer = styled("div", {
  display: "flex",
});

export const InfoItem = styled("div", {
  width: units(5),
  padding: units(0.25),
  textAlign: "left",

  "@large": {
    textAlign: "center",
  },
});

export const InfoValue = styled("strong", {
  fontSize: "$small_large",
  fontWeight: "$bold",
  color: "$primary",
  lineHeight: 1,
  display: "block",

  "@large": {
    fontSize: "$large_large",
  },
});

export const InfoLabel = styled("span", {
  fontSize: "$small_small",
  color: "$grayDarker",

  "@large": {
    fontSize: "$large_small",
  },
});

//! Estilização SummaryList

export const SummaryListStyle = styled("div", {
  variants: {
    clean: {
      true: {
        "@mediumAndAbove": {
          //paddingLeft: units(2),
          //paddingRight: units(2),
        },
      },
    },

    edit: {
      true: {},
    },
  },
});

export const SummaryListHeader = styled("div", {
  paddingTop: 0,
  paddingBottom: units(1.5),
  borderBottomWidth: 1,
  borderBottomStyle: "solid",
  borderBottomColor: "$blueGrayLight",
});

export const SummaryHeaderFilter = styled("div", {
  maxWidth: units(24),
});

export const ListStyle = styled("ul", {
  margin: 0,
  padding: 0,
  listStyle: "none",
});
