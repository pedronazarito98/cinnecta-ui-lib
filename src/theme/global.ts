import { globalCss } from "./theme";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },
  body: {
    color: "#323232",
    backgroundColor: "#F6F6F6",
    "-webkit-font-smoothing": "antialiased",
    fontFeatureSettings: `'pnum' on, 'lnum' on`,
  },
  "body,input,textarea,button": {
    fontFamily: "Cabin",
    fontWeight: 400,
  },

  "*::-webkit-scrollbar": {
    backgroundColor: "#fff",
    width: "16px",
  },
  "*::-webkit-scrollbar-track": {
    backgroundColor: "#fff",
  },
  "*::-webkit-scrollbar-thumb": {
    backgroundColor: "#babac0",
    borderRadius: "16px",
    border: "4px solid #fff",
  },
  "*::-webkit-scrollbar-button": {
    display: "none",
  },
});
