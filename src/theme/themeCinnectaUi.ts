const breakpoints = {
  small: 0,
  medium: 744,
  large: 1128,
  xlarge: 1440,
};
const unit = 16;
const columns = 12;
const globalRadius = 3;
const color = {
  primary: "#001166",
  primarySaturated: "#001573",
  primaryDarker: "#001055",

  secondary: "#0055ff",
  secondarySaturated: "#0044ff",
  secondaryDarker: "#0033ff",
  secondaryLight: "#EFF3FF",

  success: "#3adb76",
  warning: "#ffae00",
  alert: "#FF594C",

  successLight: "",
  warningLight: "#FFF8EB",
  alertLight: "#FFEAEA",

  successDark: "",
  warningDark: "",
  alertDark: "#a14343",

  gray: "#ececec",
  grayLighter: "#FAFAFD",
  grayLight: "#f5f5f5",
  grayDark: "#9B9B9B",
  grayDarker: "#464646",
  grayDarkest: "#202020",

  blueGray: "#c5d2e3",
  blueGrayLightest: "#F7F9FB",
  blueGrayLighter: "#f5f5f5",
  blueGrayLight: "#ebf1ff",
  blueGrayDark: "#8F94A9",

  black: "#0a0a0a",
  white: "#fefefe",

  shadow: "rgba(0, 0, 0, .2)",
  shadowWeakest: "rgba(0, 0, 0, .035)",
  shadowWeaker: "rgba(0, 0, 0, .055)",
  shadowWeak: "rgba(0, 0, 0, .1)",
  shadowStrong: "rgba(0, 0, 0, .3)",
  shadowStronger: "rgba(0, 0, 0, .5)",
  shadowStrongest: "rgba(0, 0, 0, .7)",

  fog: "rgba(255, 255, 255, .2)",
  fogWeakest: "rgba(255, 255, 255, .075)",
  fogWeaker: "rgba(255, 255, 255, .1)",
  fogWeak: "rgba(255, 255, 255, .15)",
  fogStrong: "rgba(255, 255, 255, .3)",
  fogStronger: "rgba(255, 255, 255, .5)",
  fogStrongest: "rgba(255, 255, 255, .7)",

  transparent: "transparent",

  scale: ["#DC2626", "#FF7C06", "#FFB000", "#648FFF", "#0055FF"],
};

const input = {
  background: color.grayLight,
  color: color.grayDarker,
  placeholderColor: color.grayDark,
  disabledBackground: color.gray,
  invalidBackground: color.alertLight,
  focusBackground: color.white,
  spacing: 0.5 * unit,

  border: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: color.grayLight,
    borderRadius: globalRadius,
  },

  disabledBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: color.gray,
    borderRadius: globalRadius,
  },

  invalidBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: color.alert,
    borderRadius: globalRadius,
  },

  focusBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: color.secondary,
    borderRadius: globalRadius,
  },

  radioBorderRadius: "50%",
  checkboxBorderRadius: globalRadius,
};

/*
const Catamaran = [
    {
        fontFamily: 'Catamaran',
        fontStyle: 'normal',
        fontWeight: 300,
        src: "url('https://fonts.gstatic.com/s/catamaran/v8/o-0IIpQoyXQa2RxT7-5r5TRASf6M7Q.woff2') format('woff2')",
    },
    {
        fontFamily: 'Catamaran',
        fontStyle: 'normal',
        fontWeight: 400,
        src: "url('https://fonts.gstatic.com/s/catamaran/v8/o-0IIpQoyXQa2RxT7-5r5TRASf6M7Q.woff2#1') format('woff2')",
    },
    {
        fontFamily: 'Catamaran',
        fontStyle: 'normal',
        fontWeight: 600,
        src: "url('https://fonts.gstatic.com/s/catamaran/v8/o-0IIpQoyXQa2RxT7-5r5TRASf6M7Q.woff2#2') format('woff2')",
    },
    {
        fontFamily: 'Catamaran',
        fontStyle: 'normal',
        fontWeight: 700,
        src: "url('https://fonts.gstatic.com/s/catamaran/v8/o-0IIpQoyXQa2RxT7-5r5TRASf6M7Q.woff2#3') format('woff2')",
    },
    {
        fontFamily: 'Catamaran',
        fontStyle: 'normal',
        fontWeight: 900,
        src: "url('https://fonts.gstatic.com/s/catamaran/v8/o-0IIpQoyXQa2RxT7-5r5TRASf6M7Q.woff2#4') format('woff2')",
    }
]
*/

const font = {
  family: {
    default: [
      'Cabin, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
    ],
    icon: "cinnecta-suite",
  },

  size: {
    small: {
      title1: 32,
      title2: 26,
      title3: 21,
      title4: 18,
      title5: 15,
      title6: 14,
      large: 17,
      regular: 15,
      small: 14,
      micro: 12,
    },

    large: {
      title1: 34,
      title2: 28,
      title3: 22,
      title4: 18,
      title5: 16,
      title6: 14,
      large: 18,
      regular: 16,
      small: 14,
      micro: 12,
    },
  },
};

const theme = {
  unit: unit,
  units: (value: any) => value * unit,
  radius: globalRadius,
  columns: columns,
  //map: map,

  icon: {
    defaultColor: color.grayDark,

    size: {
      micro: 8,
      smaller: 12,
      small: 16,
      default: 20,
      large: 24,
      huge: 36,
    },
  },

  container: {
    micro: 800,
    small: 1200,
    default: 1440,
    large: 1800,
  },

  weight: {
    light: 300,
    normal: 400,
    medium: 600,
    bold: 700,
    black: 900,
  },

  font: {
    ...font.family,
  },

  button: {
    horizontalPadding: 1.25 * unit,
    compactHorizontalPadding: 0.75 * unit,
    wideHorizontalPadding: 1.75 * unit,
    verticalPadding: 0.25 * unit,
    borderWidth: 0,
    height: 2.5 * unit,
    shortHeight: 2 * unit,
    tallHeight: 3 * unit,
    radius: globalRadius,
    fontSize: font.size.small.small,
    fontSizeOnLarge: font.size.large.small,
    largeFontSize: font.size.small.large,
    largeFontSizeOnLarge: font.size.large.large,
    smallFontSize: 13,
    smallFontSizeOnLarge: 13,
    spacing: 0.125 * unit,
    bottomSpacing: 0.5 * unit,
    fontWeight: 500,
    fontFamily: font.family.default,
  },

  input: {
    inlineSpacing: 32,
    spacing: input.spacing,
    borderRadius: globalRadius,
    background: input.background,
    color: input.color,
    placeholderColor: input.placeholderColor,
    verticalPadding: 10,
    horizontalPadding: 10,

    default: {
      ...input.border,
      background: input.background,
      color: input.color,
      fontFamily: font.family.default,
      fontSize: font.size.small.regular,
      letterSpacing: "normal",
      lineHeight: 1.3,
      marginBottom: input.spacing,
    },

    disabled: {
      background: input.disabledBackground,
      ...input.disabledBorder,
    },

    invalid: {
      background: input.invalidBackground,
      ...input.invalidBorder,
    },

    small: {
      color: color.grayDarker,
      fontFamily: font.family.default,
      fontSize: font.size.small.small,
      letterSpacing: "normal",
      lineHeight: 1.4,
      height: 32,
    },

    focus: {
      ...input.focusBorder,
      background: input.focusBackground,
    },

    radio: {
      size: 18,
      // @ts-expect-error TS(2339): Property 'white' does not exist on type '{ backgro... Remove this comment to see the full error message
      background: input.white,
      borderRadius: input.radioBorderRadius,

      border: {
        ...input.border,
        borderColor: color.gray,
        borderRadius: input.radioBorderRadius,
      },

      disabled: {
        background: input.disabledBackground,
        border: {
          ...input.disabledBorder,
          borderRadius: input.radioBorderRadius,
        },
      },

      invalid: {
        background: input.invalidBackground,
        border: {
          ...input.invalidBorder,
          borderRadius: input.radioBorderRadius,
        },
      },

      checkMark: {
        width: 8,
        height: 8,
        background: color.secondary,
        borderRadius: input.radioBorderRadius,
      },
    },

    checkbox: {
      size: 18,
      // @ts-expect-error TS(2339): Property 'white' does not exist on type '{ backgro... Remove this comment to see the full error message
      background: input.white,
      borderRadius: input.checkboxBorderRadius,

      border: {
        ...input.border,
        borderColor: color.gray,
        borderRadius: input.checkboxBorderRadius,
      },

      disabled: {
        background: input.disabledBackground,
        border: {
          ...input.disabledBorder,
          borderRadius: input.checkboxBorderRadius,
        },
      },

      invalid: {
        background: input.invalidBackground,
        border: {
          ...input.invalidBorder,
          borderRadius: input.checkboxBorderRadius,
        },
      },

      checkMark: {
        width: 8,
        height: 8,
        background: color.secondary,
      },
    },
  },

  fontSize: {
    ...font.size,
  },

  lineHeight: {
    regular: 1.4,
    short: 1.125,
    shorter: 1,
    tall: 1.6,
  },

  shadow: {
    level0: { boxShadow: "none" },
    level1: { boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)" },
    level2: { boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.05)" },
    level3: { boxShadow: "0 3px 9px 3px rgba(0, 0, 0, 0.05)" },
  },

  color: {
    ...color,

    error: color.alert,
    negative: color.alert,
    positive: color.success,

    shimmer: {
      from: color.blueGray,
      to: color.blueGrayLight,
    },

    background: color.white,
  },

  breakpoint: {
    xlarge: `@media (min-width: ${breakpoints.xlarge - 1}px)`,
    large: `@media (min-width: ${breakpoints.large - 1}px)`,
    mediumAndAbove: `@media (min-width: ${breakpoints.medium}px)`,
    medium: `@media (max-width: ${breakpoints.large - 1}px)`,
    small: `@media (max-width: ${breakpoints.medium - 1}px)`,
  },

  animation: {
    shimmer: {
      "0%": { backgroundColor: "#e6e9f0" },
      "50%": { backgroundColor: "#EEF0F4" },
      "100%": { backgroundColor: "#e6e9f0" },
    },

    spinner: {
      from: { transform: "rotate(0deg)" },
      to: { transform: "rotate(360deg)" },
    },
  },

  gutter: {
    small: {
      micro: {
        top: 0.25 * unit,
        right: 0.25 * unit,
        bottom: 0.25 * unit,
        left: 0.25 * unit,
      },

      small: {
        top: 0.5 * unit,
        right: 0.5 * unit,
        bottom: 0.5 * unit,
        left: 0.5 * unit,
      },

      regular: {
        top: 1 * unit,
        right: 1 * unit,
        bottom: 1 * unit,
        left: 1 * unit,
      },

      large: {
        top: 1 * unit,
        right: 1 * unit,
        bottom: 1 * unit,
        left: 1 * unit,
      },
    },

    medium: {
      micro: {
        top: 0.25 * unit,
        right: 0.25 * unit,
        bottom: 0.25 * unit,
        left: 0.25 * unit,
      },

      small: {
        top: 0.5 * unit,
        right: 0.5 * unit,
        bottom: 0.5 * unit,
        left: 0.5 * unit,
      },

      regular: {
        top: 0.5 * unit,
        right: 0.5 * unit,
        bottom: 0.5 * unit,
        left: 0.5 * unit,
      },

      large: {
        top: 1 * unit,
        right: 1 * unit,
        bottom: 1 * unit,
        left: 1 * unit,
      },
    },

    large: {
      micro: {
        top: 0.25 * unit,
        right: 0.25 * unit,
        bottom: 0.25 * unit,
        left: 0.25 * unit,
      },

      small: {
        top: 0.5 * unit,
        right: 0.5 * unit,
        bottom: 0.5 * unit,
        left: 0.5 * unit,
      },

      regular: {
        top: 0.5 * unit,
        right: 0.5 * unit,
        bottom: 0.5 * unit,
        left: 0.5 * unit,
      },

      large: {
        top: 1 * unit,
        right: 1 * unit,
        bottom: 1 * unit,
        left: 1 * unit,
      },
    },

    xlarge: {
      micro: {
        top: 0.25 * unit,
        right: 0.25 * unit,
        bottom: 0.25 * unit,
        left: 0.25 * unit,
      },

      small: {
        top: 0.5 * unit,
        right: 0.5 * unit,
        bottom: 0.5 * unit,
        left: 0.5 * unit,
      },

      regular: {
        top: 1 * unit,
        right: 1 * unit,
        bottom: 1 * unit,
        left: 1 * unit,
      },

      large: {
        top: 2.5 * unit,
        right: 1.25 * unit,
        bottom: 2.5 * unit,
        left: 1.25 * unit,
      },
    },
  },
};

export default theme;
