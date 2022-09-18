import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const appStyles = style({
  backgroundColor: vars.color.background,
  padding: vars.spacing[44],
});

export const headerStyles = style({
  paddingBottom: vars.spacing[44],
});

export const typographyWrapperStyles = style({
  paddingBottom: vars.spacing[44],
});
