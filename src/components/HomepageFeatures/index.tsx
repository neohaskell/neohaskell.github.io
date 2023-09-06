import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import CodeFrame from "../CodeFrame";
import Button from "../Button";

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
    buttonText: "Empower your Development",
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
      <CodeFrame language={showcase.language}>{showcase.code}</CodeFrame>
    ) : (
      <showcase.img />
    );
  return (
    <div className={`flex p-4 ${reverse}`}>
      {showcaseComponent}
      <div className="bg-white -z-0 my-7 p-7 border-4 border-black">
        <h3 className="text-xl">{title}</h3>
        <p className="text-lg">{description}</p>
        <Button rounded="full" color="lime">
          <h3>{buttonText}</h3>
        </Button>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section>
      <div className="container">
        <div className="col">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} n={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
