import React from "react";
import { TThemeColorKey, TThemeTypographyKey } from "../../theme.css";
import { textStyles } from "./Text.css";

type TTextProps = {
  /**
   * Theme Color token to display
   */
  colorVariant?: TThemeColorKey;
  /**
   * Theme Typography variant
   */
  styleVariant: TThemeTypographyKey;
  /**
   * Tag to render as
   */
  tagElement?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label" | "p";
  /**
   * Tag to render as
   */
  children: React.ReactNode;
};

export const Text: React.FC<TTextProps> = ({
  colorVariant = "onBackground",
  styleVariant,
  tagElement = "p",
  children,
}) => {
  const Tag = tagElement;
  return (
    <Tag
      className={`${textStyles({
        color: colorVariant,
        style: styleVariant,
      })}`}
    >
      {children}
    </Tag>
  );
};
