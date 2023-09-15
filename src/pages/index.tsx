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
import Dialog from "../components/Dialog";
import Modal from "../components/Modal";
import Disclaimer from "../components/Disclaimer";

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
            <strong>
              NeoHaskell is a dialect of Haskell that is focused on
              beginner-friendliness and productivity.
            </strong>
          </p>
          <p className="text-center md:text-2xl sm:text-xl text-lg justify-normal my-10 mx-auto md:w-3/4">
            It is designed to be easy to learn and use, while also being
            powerful enough to release your app with minimum effort and maximum
            confidence.
          </p>
        </Frame>
      </div>
      <div className="mx-auto mt-24 width-full max-w-6xl">
        <div className="relative overflow-hidden h-0 pb-16-9">
          <iframe
            className="absolute top-0 left-0 w-full h-full max-w-full"
            src="https://www.youtube.com/embed/VM-2OVNt-eQ?si=A7JKcVobgEpi1fvt"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
      <div className="relative text-center mx-auto my-10">
        <Link to="/docs/intro">
          <Button color="yellow" rounded="full" size="lg">
            <h2 className="mx-4 my-2 sm:text-2xl text-xl">Read the Dogma</h2>
          </Button>
        </Link>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description={`${siteConfig.tagline}`}>
      <div className="container">
        <Disclaimer />
        <HomepageHeader />

        <main className="pt-32">
          <HomepageFeatures />
        </main>
      </div>
    </Layout>
  );
}
