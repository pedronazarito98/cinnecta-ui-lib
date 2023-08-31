import { input, styled } from "../../theme/theme";

export const SelectOnlyStyle = styled("div", {
  ...input.default,
  display: "inline-flex",
  position: "relative",
  flexWrap: "nowrap",
  alignItems: "center",
  boxSizing: "border-box",
  minHeight: 40,

  "&:focus-within": {
    ...input.focus,
  },

  variants: {
    inverse: {
      true: { background: "$white" },
    },

    focusBorderless: {
      true: {
        "&:focus-within": {
          borderWidth: 0,
        },
      },
    },

    insidePrefix: {
      true: { height: 38 },
    },

    insideSuffix: {
      true: { height: 38 },
    },

    disabled: {
      true: { ...input.disabled },
    },

    invalid: {
      true: { ...input.invalid },
    },

    flat: {
      true: { borderColor: "$blueGray", background: "$white" },
    },

    floating: {
      true: { background: "$white", borderColor: "$white" },
    },

    small: {
      true: { ...input.small },
    },
  },
});

export const SelectOnlyPrefix = styled("div", {
  paddingLeft: input.horizontalPadding,
  flexShrink: 0,

  variants: {
    suffix: {
      true: { paddingRight: input.horizontalPadding, flexShrink: 0 },
    },
    removePrefixSpacing: {
      true: {
        padding: 0,
      },
    },
  },
});

export const SelectOnlySuffix = styled("div", {
  paddingRight: input.horizontalPadding,
  flexShrink: 0,

  variants: {
    removeSuffixSpacing: {
      true: {
        padding: 0,
      },
    },
  },
});

export const Separator = styled("div", {
  width: 1,
  height: 24,
  background: "$gray",
  flexShrink: 0,

  variants: {
    prefix: {
      true: { marginLeft: input.horizontalPadding },
    },
    removePrefixSpacing: { true: {} },
    suffix: {
      true: { marginRight: input.horizontalPadding },
    },
    removeSuffixSpacing: {
      true: {
        margin: 0,
      },
    },
  },
});
