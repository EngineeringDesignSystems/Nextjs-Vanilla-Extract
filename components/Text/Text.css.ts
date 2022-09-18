import { recipe } from "@vanilla-extract/recipes";
import {
  generateRecipeColorData,
  generateRecipeTypographyData,
} from "../../Helpers/generateRecipeData";

export const textStyles = recipe({
  variants: {
    color: generateRecipeColorData(),
    style: generateRecipeTypographyData(),
  },

  defaultVariants: {
    color: "onBackground",
  },
});
