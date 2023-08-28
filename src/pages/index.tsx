import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import CodeBlock from "@theme/CodeBlock";

import styles from "./index.module.css";
import magic from "./magicpattern.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx("bg-transparent  hero hero--primary", styles.heroBanner)}
    >
      <div className="bg-white-500 text-black container">
        <div className="px-8 py-4 bg-white border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] grid place-content-center space-y-4">
          <img src="/img/logo.svg" alt="logo" className="mx-auto h-64" />
          <h1 className="hero__title">Think less, do more.</h1>
          <div className={styles.buttons}></div>
          <p className="text-2xl mx-auto w-1/2">
            Release quickly with confidence, refine when needed.{" "}
            <b>
              NeoHaskell gets out of the way so you can focus on delivering
              value to your users.{" "}
            </b>
          </p>
          <div className="mx-auto p-5">
            <Link to="/docs/intro">
              <button className=" border-black border-2 p-2.5 bg-accent hover:bg-secondary hover:shadow-[3px_2px_0px_rgba(0,0,0,1)] text-black hover:text-white active:bg-secondary rounded-full">
                <h2 className="mx-4 my-2">Read the Manifesto!</h2>
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
    <div className={magic.magicpattern}>
      <Layout description={`${siteConfig.tagline}`}>
        <HomepageHeader />
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
        <main>
          <HomepageFeatures />
        </main>
      </Layout>
    </div>
  );
}
