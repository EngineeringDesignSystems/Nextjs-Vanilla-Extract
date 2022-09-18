import { recipe } from "@vanilla-extract/recipes";
import { buttonData } from "./ButtonData";
import { TButtonSizeVariants, TButtonStyleVariants } from "./TButton";

// Returns the Recipe data for all theme typography values
const generateRecipeButtonSizeVariantsData = () =>
  Object.keys(buttonData.sizeVariants).reduce((acc, key: string) => {
    const styles = buttonData.sizeVariants[key as keyof TButtonSizeVariants];
    acc[key as keyof TButtonSizeVariants] = {
      padding: styles.padding,
      fontSize: styles.fontVariant.fontSize,
      fontFamily: styles.fontVariant.fontFamily,
      fontWeight: styles.fontVariant.fontWeight,
    };
    return acc;
  }, {} as Record<keyof TButtonSizeVariants, { padding: string; fontFamily: string; fontSize: string; fontWeight: string }>);

// Returns the Recipe data for all theme typography values
const generateRecipeButtonStyleVariantsData = () =>
  Object.keys(buttonData.styleVariants).reduce(
    (acc, key: string) => {
      const styles =
        buttonData.styleVariants[key as keyof TButtonStyleVariants];

      acc[key as keyof TButtonStyleVariants] = {
        backgroundColor: styles.enabled.activeBackgroundColor,
        color: styles.enabled.activeFontColor,
        border: "none",
        ":focus": {
          backgroundColor: styles.enabled.activeBackgroundColor,
          color: styles.enabled.activeFontColor,
        },
        ":hover": {
          backgroundColor: styles.enabled.hoverBackgroundColor,
          color: styles.enabled.hoverFontColor,
        },
        ":disabled": {
          backgroundColor: styles.disabled.noneBackgroundColor,
          color: styles.disabled.noneFontColor,
        },
      };
      return acc;
    },
    {} as Record<
      keyof TButtonStyleVariants,
      {
        backgroundColor: string;
        color: string;
        border: string;
        ":focus": {
          backgroundColor: string;
          color: string;
        };
        ":hover": {
          backgroundColor: string;
          color: string;
        };
        ":disabled": {
          backgroundColor: string;
          color: string;
        };
      }
    >
  );

export const buttonStyles = recipe({
  variants: {
    sizeVariant: generateRecipeButtonSizeVariantsData(),
    styleVariant: generateRecipeButtonStyleVariantsData(),
  },

  defaultVariants: {
    sizeVariant: "small",
    styleVariant: "primary",
  },
});
