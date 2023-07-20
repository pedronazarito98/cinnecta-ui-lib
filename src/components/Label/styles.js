import { styled } from "../../styles/theme";

export const LabelStyle = styled("label", {
  backgroundColor: "$transparent",
  border: 0,
  cursor: "pointer",
  display: "block",
  padding: 0,

  variants: {
    inline: {
      true: { display: "inline-block", whiteSpace: "nowrap" },
    },

    table: {
      true: { display: "table" },
    },
  },
});

export const TableRow = styled("div", {
  display: "table-row",
});
