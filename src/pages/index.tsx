import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx("bg-background  hero hero--primary", styles.heroBanner)}
    >
      <div className="bg-white-500 text-black container">
        <div className="px-8 py-4 bg-white border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] grid place-content-center space-y-4">
          <img src="/img/logo.svg" alt="logo" className="mx-auto h-64" />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <div className={styles.buttons}></div>
          <p className="text-2xl mb-4">{siteConfig.tagline}</p>
          <div className="mx-auto p-5">
            <Link to="/docs/intro">
              <button className="h-12 border-black border-2 p-2.5 bg-accent hover:bg-secondary hover:shadow-[3px_2px_0px_rgba(0,0,0,1)] text-black hover:text-white active:bg-secondary rounded-full">
                <h2>Read the Manifesto!</h2>
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
    <>
      <Layout description={`${siteConfig.tagline}`}>
        <HomepageHeader />
        <main>
          <HomepageFeatures />
        </main>
      </Layout>
    </>
  );
}
