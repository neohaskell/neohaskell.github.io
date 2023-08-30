import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import CodeBlock from "@theme/CodeBlock";

import styles from "./index.module.css";
import Frame from "../components/Frame";
import Button from "../components/Button";

const dynC = (className: string, color: string) =>
  `dark:${className}-dark${color} ${className}-light${color}`;

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={`${dynC("text", "text")}`}>
      <div className="px-8 my-24">
        <div className="mb-10">
          <div className="">
            <h1 className="md:leading-snug text-center leading-normal mb-20 md:text-7xl text-5xl">
              Don't fear shipping{" "}
              <span className="dark:text-darkprimary text-lightsecondary underline decoration-wavy">
                the MVP.
              </span>
            </h1>
            <Frame rainbow>
              <p className="text-center text-2xl justify-normal my-10 mx-auto md:w-2/3">
                From your head to the world in no time, without the fear of
                future refactors.{" "}
                <strong>NeoHaskell scales with your product.</strong>
              </p>
            </Frame>
          </div>
        </div>
        <div className="text-center mx-auto p-5">
          <Link to="/docs/intro">
            <Button color="yellow" rounded="full" size="lg">
              <h2 className="mx-4 my-2">Get Started!</h2>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="container">
      <Layout description={`${siteConfig.tagline}`}>
        <HomepageHeader />
        <div className="container grid grid-cols-1 gap-4">
          <Frame width="full">
            <h2 className="text-3xl font-bold">Hello, World!</h2>
          </Frame>
          <div className="place-content-left">
            <CodeBlock language="haskell" title="src/Main.hs" showLineNumbers>
              {`module Main where

main :: IO ()
main = putStrLn "Hello, World!"`}
            </CodeBlock>
          </div>

          <p className="text-red-500 font-extrabold text-5xl">
            If you're reading this, you probably found it by accident. This is a
            WIP project, and the site is far from finished. If you're curious
            about the project, better join the{" "}
            <a
              className="text-blue-500"
              href="https://discord.com/invite/wDj3UYzec8"
            >
              Discord server
            </a>
            !
          </p>
        </div>
        <main>
          <HomepageFeatures />
        </main>
      </Layout>
    </div>
  );
}
