import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import CodeFrame from "../CodeFrame";
import Button from "../Button";
import CodeBlock from "@theme/CodeBlock";

type ShowCase =
  | { code: string; language: string }
  | { img: React.ComponentType<React.ComponentProps<"img">> };

type FeatureItem = {
  n?: number;
  title: string;
  description: JSX.Element;
  showcase: ShowCase;
  buttonText: string;
  shadowColor?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Beautiful, Ready-to-Use Tools",
    description: (
      <>
        NeoHaskell offers a clean and intuitive language design, complemented by
        a core library that provides all the tools you need to start creating
        amazing software right away.
      </>
    ),
    buttonText: "Start Coding",
    showcase: {
      language: "haskell",
      code: `processLogs rawLogs =
  rawLogs
  |> map parseLogs
  |> collect
  |> andThen (filter isImportant)
  |> andThen (map toStructuredLog)`,
    },
  },
  {
    title: "Hassle-Free Development Environment",
    description: (
      <>
        NeoHaskell's CLI tool installs all required utilities and makes
        multi-platform support a breeze. Whether you're compiling to native code
        or generating WebAssembly for browser compatibility, you'll enjoy error
        messages that guide, not hinder.
      </>
    ),
    buttonText: "Enjoy the Ride",
    showcase: { code: "", language: "" },
  },
  {
    title: "Focus-Driven, Event-Driven",
    description: (
      <>
        In NeoHaskell, you work directly events and functions that react to
        them. Say goodbye to the cognitive overhead of managing state or
        wrestling with dependency injection. Your focus stays where it belongs:
        on solving problems and crafting solutions.
      </>
    ),
    buttonText: "Begin your Journey",
    showcase: { code: "", language: "" },
  },
  {
    title: "Naturally Full-Stack",
    description: (
      <>
        Relish the ease of crafting full-stack applications in a unified
        language environment. NeoHaskell takes care of frontend-backend
        communication, allowing you to focus solely on your application's logic.
      </>
    ),
    buttonText: "Experience Bliss",
    showcase: { code: "", language: "" },
  },
];

function Feature({ n, title, showcase, description, buttonText }: FeatureItem) {
  const k = n ?? 0;
  const reverse = k % 2 === 0 ? "flex-row" : "flex-row-reverse";
  const showcaseComponent =
    "code" in showcase ? (
      // <CodeFrame language={showcase.language}>{showcase.code}</CodeFrame>
      <CodeBlock
        showLineNumbers
        className="!rounded-none !mb-0 "
        language={showcase.language}
      >
        {showcase.code}
      </CodeBlock>
    ) : (
      <showcase.img />
    );
  // <div className="bg-white -z-0 my-7 p-7 border-4 border-black"></div>
  return (
    <div
      className={`bg-violet-200 shadow-neocyan border-4 border-black p-32 flex mx-32 gap-16 ${reverse}`}
    >
      <div className="self-center bg-codeBg">{showcaseComponent}</div>
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl">{title}</h3>
        <p className="text-lg">{description}</p>
        <div>
          <Button rounded="full" color="cyan">
            <h3>{buttonText}</h3>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col gap-32">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} n={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
