import {
  themeShape,
  TThemeColorKey,
  TThemeTypographyKey,
  vars,
} from "../theme.css";

// Returns the Recipe data for all theme colors as a CSS color attribute
export const generateRecipeColorData = () =>
  Object.keys(themeShape.color).reduce((acc, key: string) => {
    acc[key as TThemeColorKey] = { color: vars.color[key as TThemeColorKey] };
    return acc;
  }, {} as Record<TThemeColorKey, { color: string }>);

// Returns the Recipe data for all theme colors as a CSS background color attribute
export const generateRecipeBackgroundColorData = () =>
  Object.keys(themeShape.color).reduce((acc, key: string) => {
    acc[key as TThemeColorKey] = {
      backgroundColor: vars.color[key as TThemeColorKey],
    };
    return acc;
  }, {} as Record<TThemeColorKey, { backgroundColor: string }>);

// Returns the Recipe data for all theme typography values
export const generateRecipeTypographyData = () =>
  Object.keys(themeShape.typography).reduce((acc, key: string) => {
    acc[key as TThemeTypographyKey] = {
      fontSize: vars.typography[key as TThemeTypographyKey].fontSize,
      fontWeight: vars.typography[key as TThemeTypographyKey].fontWeight,
      lineHeight: vars.typography[key as TThemeTypographyKey].lineHeight,
    };
    return acc;
  }, {} as Record<TThemeTypographyKey, { fontSize: string; fontWeight: string; lineHeight: string }>);
