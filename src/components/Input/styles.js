import { input, styled } from "../../styles/theme";
import MaskedTextInput from "react-text-mask";

export const Container = styled("div", {
  ...input.default,
  display: "inline-flex",
  position: "relative",
  width: "100%",
  //zIndex: 0,
  flexWrap: "nowrap",
  alignItems: "center",
  boxSizing: "border-box",
  height: 38,

  "&:focus-within": {
    ...input.focus,
  },

  variants: {
    focusBorderless: {
      true: {
        "&:focus-within": {
          borderWidth: 0,
        },
      },
    },

    disabled: {
      true: {
        background: "$gray",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "$gray",
        borderRadius: 3,
      },
    },

    invalid: {
      true: {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "$alert",
        background: "$alertLight",
        borderRadius: 3,
      },
    },

    flat: {
      true: { borderColor: "$blueGray", background: "$white" },
    },

    floating: {
      true: {
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        background: "$white",
        borderColor: "$white",
      },
    },

    small: {
      true: {
        color: "$grayDarker",
        fontSize: "$small_small",
        letterSpacing: "normal",
        lineHeight: 1.4,
        height: 32,
      },
    },

    removeMargins: {
      true: { margin: 0 },
    },
    prefix: {
      true: { paddingLeft: "10px", flexShrink: 0 },
    },

    suffix: {
      true: { paddingRight: "10px", flexShrink: 0 },
    },

    separator: {
      true: {
        width: 1,
        height: 1.5 * 15,
        background: "$gray",
        flexShrink: 0,
      },
    },

    separatorPrefix: {
      true: { marginLeft: "10px" },
    },

    separatorSuffix: {
      true: { marginRight: "10px" },
    },

    block: {
      true: { display: "flex", width: "100%" },
    },

    borderless: {
      true: { borderColor: "$grayLight" },
    },
  },
});

export const InputStyles = styled("input", {
  ...input.default,
  border: 0,
  margin: 0,
  background: "$transparent",
  width: "100%",
  height: "auto",
  paddingTop: input.verticalPadding,
  paddingRight: input.horizontalPadding,
  paddingBottom: input.verticalPadding,
  paddingLeft: input.horizontalPadding,
  boxSizing: "border-box",

  "::-ms-clear": {
    display: "none",
  },

  ":focus": {
    outline: "none",
    boxShadow: "none",
    border: 0,
  },

  variants: {
    showOverflowEllipsis: {
      true: { textOverflow: "ellipsis" },
    },

    inputDefaultPlaceholder: {
      true: {
        "&::placeholder": {
          color: "$grayDark",
          opacity: 1,
        },
      },
    },

    inpuFakeValuePlaceholder: {
      true: {
        "&::placeholder": {
          color: "$grayDarker",
          opacity: 1,
        },
      },
    },

    inputInversePlaceholder: {
      true: {
        "&::placeholder": {
          color: "$white",
          opacity: 1,
        },
      },
    },
  },
});

export const WrapperShimmer = styled("div", {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
});

export const MaskedInput = styled(MaskedTextInput, {
  //   ...input.default,
  border: 0,
  margin: 0,
  background: "$transparent",
  width: "100%",
  height: "auto",
  padding: 10,
  boxSizing: "border-box",

  "&::-ms-clear": {
    display: "none",
  },

  "&:focus": {
    outline: "none",
    boxShadow: "none",
    border: 0,
  },

  variants: {
    showOverflowEllipsis: {
      true: { textOverflow: "ellipsis" },
    },

    inputDefaultPlaceholder: {
      true: {
        "&::placeholder": {
          color: "$grayDark",
          opacity: 1,
        },
      },
    },

    inpuFakeValuePlaceholder: {
      true: {
        "&::placeholder": {
          color: "$grayDarker",
          opacity: 1,
        },
      },
    },

    inputInversePlaceholder: {
      true: {
        "&::placeholder": {
          color: "$white",
          opacity: 1,
        },
      },
    },
  },
});
