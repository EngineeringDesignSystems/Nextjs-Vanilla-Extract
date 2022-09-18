import {
  darkTheme,
  lightTheme,
  primitiveColors,
  TPrimitiveColors,
  TThemeColorKey,
} from "../../theme.css";

// Returns the primitive color name for a colorVariant (coreColor)
// TODO loop through a managed list of themes instead of light/dark individually
export const getPrimitiveName = (colorVariant: TThemeColorKey) => {
  const primitiveColorName = Object.keys(primitiveColors).find(
    (key: string) =>
      primitiveColors[key as keyof TPrimitiveColors] ===
        lightTheme.color[colorVariant as TThemeColorKey] ||
      primitiveColors[key as keyof TPrimitiveColors] ===
        darkTheme.color[colorVariant as TThemeColorKey]
  );
  return primitiveColorName;
};
