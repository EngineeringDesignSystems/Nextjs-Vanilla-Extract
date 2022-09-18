import React from "react";
import { TThemeColorKey } from "../../theme.css";
import { Text } from "../Text/Text";
import { colorBarStyles, outerWrapperStyles } from "./PreviewColorToken.css";
import { getPrimitiveName } from "./utils";

export type TPreviewColorTokenProps = {
  /**
   * Theme color token to display
   */
  colorVariant: TThemeColorKey;
  /**
   * Is the color token a core theme color? This shows the primitive color key instead of HEX value
   */
  isCoreColor?: boolean;
};

export const PreviewColorToken: React.FC<TPreviewColorTokenProps> = ({
  colorVariant,
  isCoreColor = false,
}) => {
  const primitiveColorName = getPrimitiveName(colorVariant);
  console.log("AAAA", primitiveColorName);

  return (
    <div className={outerWrapperStyles}>
      <Text styleVariant="heading5">{colorVariant}</Text>
      <Text styleVariant="paragraph" tagElement="p">
        {/* Core theme colors display primitive key, primitives display hex value */}
        {isCoreColor ? primitiveColorName : ""}
      </Text>
      <div
        className={`${colorBarStyles({
          colorVariant: colorVariant,
        })}`}
      />
    </div>
  );
};
