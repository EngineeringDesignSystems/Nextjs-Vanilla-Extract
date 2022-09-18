import React from "react";
import { dividerStyles } from "./Divider.css";

type TDividerProps = {};

export const Divider: React.FC<TDividerProps> = ({}) => {
  return <hr className={dividerStyles} />;
};
