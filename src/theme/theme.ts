import { createStitches, defaultThemeMap } from "@stitches/react";
import type * as Stitches from "@stitches/react";
import { fontSizes } from "./foundations/fontSizes";
import { fontWeights } from "./foundations/fontWeights";
import { lineHeight } from "./foundations/lineHeight";
import { breakpoints } from "./foundations/breakpoints";
import { space } from "./foundations/space";
import { inputTokens } from "./foundations/input";
import { colors } from "./foundations/colors";

export const animation = {
  shimmer: {
    "0%": { backgroundColor: "#e6e9f0" },
    "50%": { backgroundColor: "#EEF0F4" },
    "100%": { backgroundColor: "#e6e9f0" },
  },

  spinner: {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
  },
};

export const icon = {
  defaultColor: "#9B9B9B",

  size: {
    micro: 8,
    smaller: 12,
    small: 16,
    default: 20,
    large: 24,
    huge: 36,
  },
};

export const map = [
  {
    featureType: "all",
    elementType: "labels.text.fill",
    stylers: [
      {
        saturation: 36,
      },
      {
        color: "#5f5f5f",
      },
      {
        lightness: 40,
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels.text.stroke",
    stylers: [
      {
        visibility: "on",
      },
      {
        color: "#ffffff",
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#fefefe",
      },
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#fefefe",
      },
      {
        lightness: 17,
      },
      {
        weight: 1.2,
      },
    ],
  },
  {
    featureType: "landscape.man_made",
    elementType: "geometry",
    stylers: [
      {
        saturation: 22,
      },
      {
        lightness: 54,
      },
      {
        gamma: 0.17,
      },
      {
        hue: "#005cff",
      },
    ],
  },
  {
    featureType: "landscape.natural",
    elementType: "geometry",
    stylers: [
      {
        color: "#eef0f4",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#eef0f4",
      },
      {
        lightness: 21,
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#e6e9f0",
      },
      {
        lightness: 21,
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#ffffff",
      },
      {
        lightness: 17,
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#ffffff",
      },
      {
        lightness: 29,
      },
      {
        weight: 0.2,
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#ffffff",
      },
      {
        lightness: 18,
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "geometry",
    stylers: [
      {
        color: "#ffffff",
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [
      {
        color: "#eef0f4",
      },
      {
        lightness: 19,
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#d7dae1",
      },
      {
        lightness: 17,
      },
    ],
  },
];

export const input = {
  inlineSpacing: 32,
  spacing: inputTokens?.spacing,
  borderRadius: 3,
  background: inputTokens?.background,
  color: inputTokens?.color,
  placeholderColor: inputTokens?.placeholderColor,
  verticalPadding: 10,
  horizontalPadding: 10,

  default: {
    ...inputTokens?.border,
    background: inputTokens?.background,
    color: inputTokens?.color,
    fontSize: "$small_regular",
    letterSpacing: "normal",
    lineHeight: 1.3,
    marginBottom: inputTokens?.spacing,
  },

  disabled: {
    background: inputTokens?.disabledBackground,
    ...inputTokens?.disabledBorder,
  },

  invalid: {
    background: inputTokens?.invalidBackground,
    ...inputTokens?.invalidBorder,
  },

  small: {
    color: "$grayDarker",

    fontSize: "$small_small",
    letterSpacing: "normal",
    lineHeight: 1.4,
    height: 32,
  },

  focus: {
    ...inputTokens?.focusBorder,
    background: inputTokens?.focusBackground,
  },

  radio: {
    size: 18,

    background: inputTokens?.white,
    borderRadius: inputTokens?.radioBorderRadius,

    border: {
      ...inputTokens?.border,
      borderColor: "$gray",
      borderRadius: inputTokens?.radioBorderRadius,
    },

    disabled: {
      background: inputTokens?.disabledBackground,
      border: {
        ...inputTokens?.disabledBorder,
        borderRadius: inputTokens?.radioBorderRadius,
      },
    },

    invalid: {
      background: inputTokens?.invalidBackground,
      border: {
        ...inputTokens?.invalidBorder,
        borderRadius: inputTokens?.radioBorderRadius,
      },
    },

    checkMark: {
      width: 8,
      height: 8,
      background: "$secondary",
      borderRadius: inputTokens?.radioBorderRadius,
    },
  },

  checkbox: {
    size: 18,

    background: inputTokens?.white,
    borderRadius: inputTokens?.checkboxBorderRadius,

    border: {
      ...inputTokens?.border,
      borderColor: "$gray",
      borderRadius: inputTokens?.checkboxBorderRadius,
    },

    disabled: {
      background: inputTokens?.disabledBackground,
      border: {
        ...inputTokens?.disabledBorder,
        borderRadius: inputTokens?.checkboxBorderRadius,
      },
    },

    invalid: {
      background: inputTokens?.invalidBackground,
      border: {
        ...inputTokens?.invalidBorder,
        borderRadius: inputTokens?.checkboxBorderRadius,
      },
    },

    checkMark: {
      width: 8,
      height: 8,
      background: "$secondary",
    },
  },
};
export const container = {
  micro: 800,
  small: 1200,
  default: 1440,
  large: 1800,
};
export const font = {
  family: {
    default:
      'Oxygen, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
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
      micro: 11,
    },

    large: {
      title1: 34,
      title2: 29,
      title3: 23,
      title4: 20,
      title5: 16,
      title6: 14,
      large: 18,
      regular: 16,
      small: 14,
      micro: 11,
    },
  },
};
export const unit = 15;
export const units = (value: number) => value * unit;

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: "space",
    width: "space",
  },
  media: {
    xlarge: ` (min-width: ${breakpoints.xlarge - 1}px)`,
    large: `(min-width: ${breakpoints.large - 1}px)`,
    mediumAndAbove: `(min-width: ${breakpoints.medium}px)`,
    medium: ` (max-width: ${breakpoints.large - 1}px)`,
    small: `(max-width: ${breakpoints.medium - 1}px)`,
  },
  utils: {
    flexHorizontalCenter: (gap: number) => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: gap,
    }),
    flexVerticalCenter: (gap: number) => ({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: gap,
    }),
    verticalPadding: (value: number) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    horizontalPadding: (value: number) => ({
      paddingRight: value,
      paddingLeft: value,
    }),
    compactHorizontalPadding: (value: number) => ({
      paddingRight: value,
      paddingLeft: value,
    }),
    cellColumnslarge: (size: number) => ({
      "@large": {
        width: `${100 / size}%`,
      },
    }),
    size: (size: number) => ({
      width: `${(size / 12) * 100}%`,
    }),
    mediumSize: (size: number) => ({
      "@mediumAndAbove": {
        width: `${(size / 12) * 100}%`,
      },
    }),
    largeSize: (size: number) => ({
      "@large": {
        width: `${(size / 12) * 100}%`,
      },
    }),
    xlargeSize: (size: number) => ({
      "@xlarge": {
        width: `${(size / 12) * 100}%`,
      },
    }),
    columns: (size: number) => ({
      width: `${100 / size}%`,
    }),
    columnsOnMedium: (size: number) => ({
      "@mediumAndAbove": {
        width: `${100 / size}%`,
      },
    }),
    columnsOnLarge: (size: number) => ({
      "@large": {
        width: `${100 / size}%`,
      },
    }),
    columnsOnXlarge: (size: number) => ({
      "@xlarge": {
        width: `${100 / size}%`,
      },
    }),
  },
  theme: {
    colors: colors,
    fontSizes,
    fontWeights,
    lineHeight,
    breakpoints,
    space,
  },
});
