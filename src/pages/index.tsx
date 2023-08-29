import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import CodeBlock from "@theme/CodeBlock";

import styles from "./index.module.css";
import Dialog from "../components/Dialog";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx("bg-transparent  hero hero--primary", styles.heroBanner)}
    >
      <div className="dark:text-white text-black container">
        <div className="px-8 py-8 grid place-content-center space-y-4">
          <h1 className="hero__title">
            Don't fear shipping
            <br />{" "}
            <span className="dark:text-primary text-secondary underline decoration-wavy ">
              your prototype.
            </span>
          </h1>
          <div className={styles.buttons}></div>
          <p className="text-2xl py-8 mx-auto w-2/3">
            Deliver your prototype in no time, then joyfully refactor when
            needed.{" "}
            <strong>NeoHaskell prioritizes programmer happiness.</strong>
          </p>
          <div className="mx-auto p-5">
            <Link to="/docs/intro">
              <button className=" border-black border-2 p-2.5 bg-accent hover:bg-secondary hover:shadow-[3px_2px_0px_black] text-black hover:text-white active:bg-secondary rounded-full dark:border-white dark:shadow[3px_2px_0px_rgba(255,255,255,1)] ">
                <h2 className="mx-4 my-2">Get Started!</h2>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="bg-yellow-50 dark:bg-slate-950">
      <Layout description={`${siteConfig.tagline}`}>
        <HomepageHeader />
        <div className="container grid grid-cols-1 gap-4">
          <Dialog message="This is a dialog" width="full" />
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
