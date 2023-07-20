import { styled, units } from "../../styles/theme";

export const BlockStyles = styled("div", {
  borderRadius: 3,
  padding: units(1),

  variants: {
    background: {
      true: { background: "$white" },
    },

    alignCenter: {
      true: { display: "flex", alignItems: "center" },
    },

    alignEnd: {
      true: { display: "flex", alignItems: "flex-end" },
    },
    relative: {
      true: { position: "relative" },
    },

    alignStart: {
      true: { display: "flex", alignItems: "flex-start" },
    },

    justifyCenter: {
      true: { display: "flex", justifyContent: "center" },
    },

    justifyEnd: {
      true: { display: "flex", justifyContent: "flex-end" },
    },

    justifyStart: {
      true: { display: "flex", justifyContent: "flex-start" },
    },

    row: {
      true: { flexDirection: "row" },
    },

    column: {
      true: { flexDirection: "column" },
    },

    noPadding: {
      true: { padding: 0 },
    },

    largePadding: {
      true: { padding: units(2) },
    },
    smallPadding: {
      true: {
        padding: units(0.5),
      },
    },

    gray: {
      true: { background: "$grayLight" },
    },

    border: {
      true: { borderWidth: 1, borderStyle: "solid", borderColor: "$gray" },
    },
    borderTop: {
      true: { borderTop: "1px solid $gray" },
    },

    fullHeight: {
      true: { height: "100%" },
    },

    radius: {
      true: { borderRadius: 6 },
    },
  },
});
