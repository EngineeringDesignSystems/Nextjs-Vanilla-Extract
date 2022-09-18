import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { generateRecipeBackgroundColorData } from "../../Helpers/generateRecipeData";
import { vars } from "../../theme.css";

export const colorBarStyles = recipe({
  base: {
    height: "42px",
    width: "100%",
  },
  variants: {
    colorVariant: generateRecipeBackgroundColorData(),
  },
  defaultVariants: {
    colorVariant: "onBackground",
  },
});

export const outerWrapperStyles = style({
  alignItems: "center",
  display: "grid",
  gap: vars.spacing[16],
  gridTemplateColumns: "2fr 2fr 8fr",
});
