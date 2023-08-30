import React, { ReactElement } from "react";
import Button from "./Button";
import classNames from "classnames";

type FrameType = {
  children?: ReactElement | ReactElement[];
  rainbow?: boolean;
  width?: "fit" | "full" | "1/2" | "1/3";
};

const dimensionClasses = ["px-8", "py-4", "dark:bg-slate-950", "border-4"];

const lightModeClasses = [
  "bg-white",
  "text-black",
  "border-black",
  "shadow-neoblack",
];

const darkModeClasses = [
  "bg-slate-950",
  "text-white",
  "border-white",
  "shadow-neowhite",
].map((className) => `dark:${className}`);

const classes = [...dimensionClasses, ...lightModeClasses, ...darkModeClasses];

const Frame = ({ rainbow, children, width }: FrameType) => {
  const s = rainbow
    ? classes.filter((c) => !c.includes("shadow")).concat("shadow-rainbow")
    : classes;
  const cls = [...s, `w-${width}`].join(" ");
  return <div className={cls}>{children}</div>;
};

export default Frame;
