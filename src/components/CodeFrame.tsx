import React, { ReactElement } from "react";
import Button from "./Button";
import classNames from "classnames";
import CodeBlock from "@theme/CodeBlock";

type FrameType = {
  children?: string;
  language?: string;
  title?: string;
  rainbow?: boolean;
  shadowClass?: string;
  width?: "fit" | "full" | "1/2" | "1/3";
};

const widthClasses = {
  fit: "w-fit",
  full: "w-full",
  "1/2": "w-1/2",
  "1/3": "w-1/3",
};

const dimensionClasses = ["border-4"];

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
  language,
  title,
  width,
  shadowClass = "shadow-neoblack",
}: FrameType) => {
  const s = rainbow
    ? classes.filter((c) => !c.includes("shadow")).concat("shadow-rainbow")
    : classes;
  const cls = [...s, `${widthClasses[width]}`, shadowClass].join(" ");
  return (
    <div className={cls}>
      <CodeBlock
        className="!rounded-none h-full"
        language={language}
        title={title}
      >
        {children}
      </CodeBlock>
    </div>
  );
};

export default Frame;
