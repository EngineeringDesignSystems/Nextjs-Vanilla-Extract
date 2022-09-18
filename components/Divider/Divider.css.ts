import { style } from "@vanilla-extract/css";
import { vars } from "../../theme.css";

export const dividerStyles = style({
  border: `3px solid ${vars.color.primary}`,
  width: "100%",
});
