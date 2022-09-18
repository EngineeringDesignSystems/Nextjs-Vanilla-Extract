import { sharedThemeValues, vars } from "../../theme.css";
import { TButtons } from "./TButton";

export const buttonData: TButtons = {
  sizeVariants: {
    large: {
      fontVariant: sharedThemeValues.typography.paragraph,
      padding: `${vars.spacing[16]} ${vars.spacing[32]}`,
    },
    small: {
      fontVariant: sharedThemeValues.typography.paragraph,
      padding: `${vars.spacing[16]} ${vars.spacing[16]}`,
    },
  },
  styleVariants: {
    primary: {
      disabled: {
        // active
        activeBackgroundColor: vars.color.primaryDisabled,
        activeFontColor: vars.color.onPrimary,

        // hover
        hoverBackgroundColor: vars.color.primaryDisabled,
        hoverFontColor: vars.color.onPrimary,

        // none
        noneBackgroundColor: vars.color.primaryDisabled,
        noneFontColor: vars.color.onPrimary,
      },
      enabled: {
        // active
        activeBackgroundColor: vars.color.primaryActive,
        activeFontColor: vars.color.onPrimary,

        // hover
        hoverBackgroundColor: vars.color.primaryHover,
        hoverFontColor: vars.color.onPrimary,

        // none
        noneBackgroundColor: vars.color.primary,
        noneFontColor: vars.color.onPrimary,
      },
    },
    secondary: {
      enabled: {
        // active
        activeBackgroundColor: vars.color.surfaceActive,
        activeFontColor: vars.color.onSurface,

        // hover
        hoverBackgroundColor: vars.color.surfaceHover,
        hoverFontColor: vars.color.onSurface,

        // none
        noneBackgroundColor: vars.color.surface,
        noneFontColor: vars.color.onSurface,
      },
      disabled: {
        // active
        activeBackgroundColor: vars.color.surfaceDisabled,
        activeFontColor: vars.color.onSurface,

        // hover
        hoverBackgroundColor: vars.color.surfaceDisabled,
        hoverFontColor: vars.color.onSurface,

        // none
        noneBackgroundColor: vars.color.surfaceDisabled,
        noneFontColor: vars.color.onSurface,
      },
    },
  },
};
