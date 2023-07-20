import { font } from "../../styles/theme";

export const TableContainer = styled("div", {
  display: "block",
  margin: "auto",
  width: "100%",
  fontFamily: font.default,
});

export const FlexTable = styled("div", {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  transitionDuration: "0.5s",

  "&:nth-child(1)": {
    backgroundColor: "#edf1f5",
  },
});

export const FlexRow = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "calc(100% / 4)",
  textAlign: "center",
  // padding: '0.5em 0.5em', //Padding e border right/left faz com que não caiba a conta certinha do width.
  paddingTop: "0.5em",
  paddingBottom: "0.5em",

  "@medium": {
    width: "calc(100% / 3)",
    "&:nth-child(1)": {
      width: "100%",
      paddingTop: "1.5em",
      paddingBottom: "1.5em",
    },
  },

  "@small": {
    borderBottom: 0,
    width: "100%",

    "&:nth-child(1)": {
      borderBottom: "solid 1px #d9d9d9",
      width: "100%",
    },
  },
});

export const FlexLoading = styled("div", {
  width: "100%",
  padding: "0.5em 0.5em",
});
