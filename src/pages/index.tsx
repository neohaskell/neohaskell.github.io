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
import CodeFrame from "../components/CodeFrame";

const dynC = (className: string, color: string) =>
  `dark:${className}-dark${color} ${className}-light${color}`;

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={`${dynC("text", "text")}`}>
      <div className="px-8 my-24">
        <div className="mb-10">
          <div className="">
            <h1 className="text-center tracking-supatight leading-relaxed lg:text-7xl md:text-6xl sm:text-5xl text-3xl">
              A language that triggers
              <br />
              <span className="dark:text-darkprimary text-lightsecondary underline decoration-wavy underline-offset-8">
                flow state.
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="mx-auto mb-4 lg:w-2/3">
        <Frame rainbow>
          <p className="text-center md:text-2xl sm:text-xl text-lg justify-normal my-10 mx-auto md:w-3/4">
            Triggering joy with every event, with elegance in every line. You
            put the creativity, NeoHaskell gives you the reliability.{" "}
            <strong>Learn on the fly, ship whenever you want.</strong>
          </p>
        </Frame>
      </div>
      <div className="relative text-center mx-auto my-24">
        <Link to="/docs/intro">
          <Button color="yellow" rounded="full" size="lg">
            <h2 className="mx-4 my-2 text-2xl">Get Started!</h2>
          </Button>
        </Link>
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
        <main>
          <HomepageFeatures />
        </main>
      </Layout>
    </div>
  );
}
