import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import CodeFrame from "../CodeFrame";
import Button from "../Button";
import CodeBlock from "@theme/CodeBlock";
import Frame from "../Frame";
import { FeatureItem } from "./feature-item";
import { ReadyFeatures } from "./ready-features";
import { ComingSoonFeatures } from "./coming-soon-features";

const bgAndShadows = [
  {
    bg: "bg-violet-200",
    shadow: "shadow-neocyan",
    button: "yellow",
  },
  {
    bg: "bg-yellow-200",
    shadow: "shadow-neoviolet",
    button: "cyan",
  },
  {
    bg: "bg-green-200",
    shadow: "shadow-neoyellow",
    button: "violet",
  },
];

function Feature({ n, title, showcase, description, buttonText }: FeatureItem) {
  const k = n ?? 0;
  const reverse = k % 2 === 0 ? "xl:flex-row" : "xl:flex-row-reverse";
  const { bg, shadow, button } = bgAndShadows[k % bgAndShadows.length];
  const showcaseComponent =
    "code" in showcase ? (
      // <CodeFrame language={showcase.language}>{showcase.code}</CodeFrame>
      <CodeBlock
        showLineNumbers
        className="!rounded-none !mb-0"
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
      className={`${bg} ${shadow} border-4 border-black xl:p-16 sm:p-8 p-0 flex sm:flex-col xl:flex-nowrap flex-wrap md:mx-32 sm:gap-16 gap-8 ${reverse} z-10`}
    >
      <div className="self-center bg-codeBg flex-grow sm:overflow-visible overflow-hidden">
        {showcaseComponent}
      </div>
      <div className="flex flex-col gap-4 sm:p-0 p-8">
        <h3 className="text-3xl">{title}</h3>
        <p className="text-lg">{description}</p>
        <div className="xl:self-start self-center">
          <Button rounded="full" color={button as any}>
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
      <div className="sm:container relative">
        <span className="absolute left-1/2 w-4 h-full bg-black border-black border-2" />
        <div className="flex flex-col gap-32">
          <div>
            <span className="absolute w-full py-36 bg-lightbackground" />
            <div className="relative mb-10">
              {/* horrible hack to hide the vertical bar */}
              <img
                className="absolute sm:h-36 h-24 bottom-1/4 lg:right-2/3 right-3/4 z-10"
                src="img/Star2.svg"
              />
              <img
                className="absolute sm:h-36 h-24 top-1/4 lg:left-2/3 left-3/4 z-10"
                src="img/Star1.svg"
              />
              <h1 className="text-center z-10">
                <span className="text-4xl sm:text-6xl">Features</span>
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-32 mb-24">
            {ReadyFeatures.map((props, idx) => (
              <Feature key={idx} {...props} n={idx} />
            ))}
          </div>
          <div className="mx-auto relative pb-10">
            <Frame background="bg-yellow-400">
              <h2 className="text-black sm:text-2xl text-lg">Coming Soon</h2>
            </Frame>
          </div>
        </div>
        <div className="flex flex-col gap-32 mb-24">
          {ComingSoonFeatures.map((props, idx) => (
            <Feature key={idx} {...props} n={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
