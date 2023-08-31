import { font, input, styled } from "../../theme/theme";

//* Estilização RadioButtonOnly
export const ContainerRadio = styled("div", {
  display: "inline-block",
  position: "relative",
  marginTop: 2,
  verticalAlign: "top",
});

export const RadioStyle = styled("div", {
  width: input.radio.size,
  height: input.radio.size,

  background: input.radio.background,
  ...input.radio.border,
  boxSizing: "border-box",

  variants: {
    disabled: {
      true: {
        background: input.radio.disabled.background,
        ...input.radio.disabled.border,
      },
    },

    invalid: {
      true: {
        background: input.radio.invalid.background,
        ...input.radio.invalid.border,
      },
    },
  },
});

export const InputRadio = styled("input", {
  width: "100%",
  height: "100%",
  margin: 0,
  padding: 0,
  opacity: 0,
  position: "absolute",

  "&:focus + [data-fake-radio]": {
    zIndex: 1,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "$secondary",
    boxSizing: "border-box",
  },
});

export const MarkContainer = styled("div", {
  display: "flex",
  position: "absolute",
  width: "100%",
  height: "100%",
  left: 0,
  top: 0,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: input.radio.border.borderRadius,
});

export const CheckMark = styled("div", {
  ...input.radio.checkMark,
});

//* Estilização RadioButton

export const ColumnRadio = styled("div", {
  display: "table-cell",
  verticalAlign: "top",
  whiteSpace: "normal",

  variants: {
    spacing: {
      true: { paddingLeft: 12 },
    },

    marginRight: {
      true: { marginRight: 32 },
    },

    pullRight: {
      true: { float: "right" },
    },
  },
});

export const RadioButtonLabel = styled("div", {
  color: "$grayDarker",
  cursor: "pointer",
  display: "inline-block",
  wordWrap: "break-word",
  letterSpacing: "normal",
  fontFamily: "Cabin",
  fontWeight: "$normal",
  fontSize: "$small_regular",
  lineHeight: "$regular",

  "@large": {
    fontSize: "$large_regular",
  },
});
