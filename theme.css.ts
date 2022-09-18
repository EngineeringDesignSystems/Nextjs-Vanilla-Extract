import { createTheme } from "@vanilla-extract/css";

/**
 *
 * TYPOGRAPHY
 *
 */

/**
 * Typography styles type
 */
type TTypographyStyles = {
  fontSize: string;
  textDecoration: string;
  fontFamily: string;
  fontWeight: string;
  fontStyle: string;
  fontStretch: string;
  letterSpacing: string;
  lineHeight: string;
  paragraphIndent: string;
  paragraphSpacing: string;
  textCase: string;
};

/**
 * Typography variants object type
 */
export type TTypography = {
  heading1: TTypographyStyles;
  heading2: TTypographyStyles;
  heading3: TTypographyStyles;
  heading4: TTypographyStyles;
  heading5: TTypographyStyles;
  paragraph: TTypographyStyles;
};
export type TThemeTypographyKey = keyof TTypography; // for props
export type TThemeTypographyVariant = TTypographyStyles; // for objects storing font variants

/**
 * Typography variant values
 */
const typography: TTypography = {
  heading1: {
    fontSize: "48.83000183105469px",
    textDecoration: "none",
    fontFamily: "Inter",
    fontWeight: "400",
    fontStyle: "normal",
    fontStretch: "normal",
    letterSpacing: "0",
    lineHeight: "58.596px",
    paragraphIndent: "0",
    paragraphSpacing: "0",
    textCase: "none",
  },
  heading2: {
    fontSize: "39.060001373291016px",
    textDecoration: "none",
    fontFamily: "Inter",
    fontWeight: "400",
    fontStyle: "normal",
    fontStretch: "normal",
    letterSpacing: "0",
    lineHeight: "46.872px",
    paragraphIndent: "0",
    paragraphSpacing: "0",
    textCase: "none",
  },
  heading3: {
    fontSize: "31.25px",
    textDecoration: "none",
    fontFamily: "Inter",
    fontWeight: "400",
    fontStyle: "normal",
    fontStretch: "normal",
    letterSpacing: "0",
    lineHeight: "37.5px",
    paragraphIndent: "0",
    paragraphSpacing: "0",
    textCase: "none",
  },
  heading4: {
    fontSize: "25px",
    textDecoration: "none",
    fontFamily: "Inter",
    fontWeight: "400",
    fontStyle: "normal",
    fontStretch: "normal",
    letterSpacing: "0",
    lineHeight: "30px",
    paragraphIndent: "0",
    paragraphSpacing: "0",
    textCase: "none",
  },
  heading5: {
    fontSize: "20px",
    textDecoration: "none",
    fontFamily: "Inter",
    fontWeight: "400",
    fontStyle: "normal",
    fontStretch: "normal",
    letterSpacing: "0",
    lineHeight: "24px",
    paragraphIndent: "0",
    paragraphSpacing: "0",
    textCase: "none",
  },
  paragraph: {
    fontSize: "16px",
    textDecoration: "none",
    fontFamily: "Inter",
    fontWeight: "400",
    fontStyle: "normal",
    fontStretch: "normal",
    letterSpacing: "0",
    lineHeight: "19.2px",
    paragraphIndent: "0",
    paragraphSpacing: "0",
    textCase: "none",
  },
};

/**
 * Shared theme Values Object
 * This is anything that doesn't change between themes.
 */
const sharedThemeValues = {
  typography,
  spacing: {
    0: "0px",
    4: "4px",
    8: "8px",
    12: "12px",
    16: "16px",
    20: "20px",
    24: "24px",
    28: "28px",
    32: "32px",
    36: "36px",
    40: "40px",
    44: "44px",
  },
};

/**
 *
 * COLORS
 *
 */

/**
 * Color types
 */
type TRGB = `rgb(${number}, ${number}, ${number})`;
type TRGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type THEX = `#${string}`;
export type Color = TRGB | TRGBA | THEX;

/**
 * Theme Primitive Color Type
 */
export type TPrimitiveColors = {
  gray50: Color;
  gray100: Color;
  gray200: Color;
  gray300: Color;
  gray400: Color;
  gray500: Color;
  gray600: Color;
  gray700: Color;
  gray800: Color;
  gray900: Color;
  indigo50: Color;
  indigo100: Color;
  indigo300: Color;
  indigo400: Color;
  indigo500: Color;
  indigo600: Color;
  indigo700: Color;
  indigo800: Color;
  indigo900: Color;
};

/**
 * Theme Variable Semantic (Core) colors
 */
export type TCoreColors = {
  background: Color;
  onBackground: Color;
  surface: Color;
  surfaceActive: Color;
  surfaceDisabled: Color;
  surfaceHover: Color;
  onSurface: Color;
  primary: Color;
  primaryActive: Color;
  primaryDisabled: Color;
  primaryHover: Color;
  onPrimary: Color;
};

/**
 * All Colors Types
 */
export type TThemeColors = TPrimitiveColors & TCoreColors;
export type TThemeColorKey = keyof TThemeColors;

/**
 * Primitive Color values
 * These are the palette that all themes pull from
 */
export const primitiveColors: TPrimitiveColors = {
  gray50: "#f9fafbff",
  gray100: "#f3f4f6ff",
  gray200: "#e5e7ebff",
  gray300: "#d1d5dbff",
  gray400: "#9ca3afff",
  gray500: "#6b7280ff",
  gray600: "#4b5563ff",
  gray700: "#374151ff",
  gray800: "#1f2937ff",
  gray900: "#111827ff",
  indigo50: "#eff3feff",
  indigo100: "#e0e7ffff",
  indigo300: "#a5b4fcff",
  indigo400: "#818cf8ff",
  indigo500: "#6366f1ff",
  indigo600: "#4f46e5ff",
  indigo700: "#3f40c2ff",
  indigo800: "#3730a3ff",
  indigo900: "#312e81ff",
};

/**
 * Light Theme Variable Semantic (Core) colors
 */
export const lightThemeColors: TCoreColors = {
  background: "#e5e7ebff",
  onBackground: "#111827ff",
  onPrimary: "#f9fafbff",
  onSurface: "#111827ff",
  primary: "#3730a3ff",
  primaryActive: "#312e81ff",
  primaryDisabled: "#4b5563ff",
  primaryHover: "#3f40c2ff",
  surface: "#f3f4f6ff",
  surfaceActive: "#9ca3afff",
  surfaceDisabled: "#6b7280ff",
  surfaceHover: "#d1d5dbff",
};

/**
 * Dark Theme Variable Semantic (Core) colors
 */
export const darkThemeColors: TCoreColors = {
  background: "#111827ff",
  onBackground: "#f9fafbff",
  onPrimary: "#f9fafbff",
  onSurface: "#f9fafbff",
  primary: "#3730a3ff",
  primaryActive: "#312e81ff",
  primaryDisabled: "#4b5563ff",
  primaryHover: "#3f40c2ff",
  surface: "#374151ff",
  surfaceActive: "#1f2937ff",
  surfaceDisabled: "#6b7280ff",
  surfaceHover: "#4b5563ff",
};

/**
 * Variable Semantic color keys
 */
export const themeSpecificColorsKeys = Object.keys(lightThemeColors);

/**
 * Theme Shape for Vanilla Extract's createTheme
 */
export const themeShape = {
  color: {
    ...primitiveColors,
    ...lightThemeColors,
  },
  ...sharedThemeValues,
};

/**
 * Static Light Theme
 * Do not use inline for styles
 */
export const lightTheme = themeShape;

/**
 * Static Dark Theme
 * Do not use inline for styles
 */
export const darkTheme = {
  color: {
    ...primitiveColors,
    ...darkThemeColors,
  },
  ...sharedThemeValues,
};

/**
 * Light Theme tools
 */
export const [lightThemeClass, vars] = createTheme(themeShape);

/**
 * Dark Theme tools
 * note: validated by light theme's vars so we make sure it has the same shape
 */
export const darkThemeClass = createTheme(vars, darkTheme);
