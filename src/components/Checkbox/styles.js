import { font, styled } from "../../styles/theme";

export const ColumnStyle = styled("div", {
  display: "table-cell",
  verticalAlign: "top",

  variants: {
    pullRight: {
      true: { float: "right" },
    },

    spacing: {
      true: { paddingLeft: 12 },
    },

    marginRight: {
      true: { marginRight: 32 },
    },

    subtitle: {
      true: { paddingTop: 2 },
    },

    columnTextBreak: {
      true: { whiteSpace: "normal" },
    },

    columnTextNoBreak: {
      true: { whiteSpace: "nowrap" },
    },
  },
});

export const Subtitle = styled("div", {
  paddingTop: 2,
});

export const CheckboxLabel = styled("div", {
  color: "$grayDarker",
  cursor: "pointer",
  display: "inline-block",
  wordWrap: "break-word",
  letterSpacing: "normal",
  fontWeight: "$normal",
  fontSize: "$small_regular",
  lineHeight: "normal",

  "@large": {
    fontSize: "$large_regular",
  },
});
