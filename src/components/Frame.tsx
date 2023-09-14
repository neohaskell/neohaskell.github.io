import React, { ReactElement } from "react";
import Button from "./Button";
import classNames from "classnames";

type FrameType = {
  children?: ReactElement | ReactElement[];
  rainbow?: boolean;
  shadowClass?: string;
  background?: string;
  width?: "fit" | "full" | "1/2" | "1/3";
};

const widthClasses = {
  fit: "w-fit",
  full: "w-full",
  "1/2": "w-1/2",
  "1/3": "w-1/3",
};

const dimensionClasses = ["px-8", "py-4", "dark:bg-slate-950", "border-4"];

const lightModeClasses = ["bg-white", "text-black", "border-black"];

const darkModeClasses = [
  "bg-slate-950",
  "text-white",
  "border-white",
  "shadow-neowhite",
].map((className) => `dark:${className}`);

const classes = [...dimensionClasses, ...lightModeClasses, ...darkModeClasses];

const Frame = ({
  rainbow,
  children,
  width,
  shadowClass = "shadow-neoblack",
  background = "bg-white",
}: FrameType) => {
  const s = rainbow
    ? classes.filter((c) => !c.includes("shadow")).concat("shadow-rainbow")
    : classes;
  const cls = [...s, `${widthClasses[width]}`, shadowClass, background].join(
    " "
  );
  return <div className={cls}>{children}</div>;
};

export default Frame;
