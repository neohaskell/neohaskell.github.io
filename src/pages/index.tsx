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

const dynC = (className: string, color: string) => `${className}-light${color}`;

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={`${dynC("text", "text")}`}>
      <div className="px-8 my-24">
        <div className="mb-10">
          <div className="">
            <h1 className="text-center tracking-supatight leading-relaxed lg:text-7xl md:text-6xl sm:text-5xl text-3xl">
              Software Development Is Broken.{" "}
              <span className=" text-lightsecondary ">
                We're Fixing It From The Language Up.
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="mx-auto mb-4 lg:w-2/3">
        <Frame rainbow>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10">
            Every successful software company follows the same tragic arc:
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            - <strong>Day one:</strong> pure creativity, features ship in hours,
            everyone understands everything.
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            - <strong>Year one:</strong> velocity slows, meetings multiply, "technical debt"
            enters the vocabulary.
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            - <strong>Year three:</strong> the rewrite discussions begin.
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            - <strong>Year five:</strong> half your budget maintains what the other half tries to
            replace.
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            <strong>This isn't incompetence. It's not bad management.</strong> It's the
            inevitable result of building on foundations that turn human
            thoughts into machine instructions through layers of mistranslation.
          </p>
          <h2 className="text-4xl">The Broken Telephone Architecture</h2>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            Watch how a simple business need travels through your organization:
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            The CEO says: "When customers upgrade, we should celebrate with
            them."
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            The CTO interprets: "Upon plan upgrade, trigger celebration
            workflow."
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            The Product Manager writes: "Implement upgrade handler with
            notification service integration."
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            The Developer codes:{" "}
            <pre>
              <code>
                UPDATE users SET plan = 'premium'; INSERT INTO notifications...
              </code>
            </pre>
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            Six months later, nobody remembers why that code exists. The
            celebration feature breaks. The developer who wrote it left. The new
            developer is afraid to touch it. <strong>The cycle of decay has begun.</strong>
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            <strong>This isn't a people problem. It's a technology problem.</strong> We're
            forcing humans to speak machine when machines should speak human.
          </p>
          <h2 className="text-4xl">Technology Shapes Thought</h2>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            The tools we use shape how we think. When your language forces you
            to express everything as CREATE, READ, UPDATE, DELETE, you start
            seeing the world as records to manipulate rather than events that
            happen. You stop thinking "customer upgraded" and start thinking
            "update customer record."
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            <strong>This subtle shift is poison.</strong> It disconnects your code from your
            business. It makes simple things complex. It makes change dangerous.
            It makes your software brittle where it should be antifragile.
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            The oldest ideas survive because everything unnecessary has been
            stripped away. <strong>Double-entry bookkeeping has worked for 700 years.</strong>
            Event ledgers are how humans naturally think about change. Banks
            don't UPDATE your balance; they record deposits and withdrawals.
            History doesn't UPDATE the past; it records what happened.
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            <strong>Why did we abandon this natural model for CRUD?</strong>
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            Because storage was expensive. Because computers were slow. Because
            we optimized for machines instead of humans.
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            <strong>Those constraints are gone. It's time for software development to
            become human again.</strong>
          </p>
          <h2 className="text-4xl">
            Enter NeoHaskell: Where Business Events Become Code
          </h2>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            <strong>NeoHaskell isn't just another programming language.</strong> It's a
            fundamental rethinking of how human intention becomes running
            software.
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            When your business team says "customer plan upgraded" that's
            literally how you write it:
          </p>
          <p>
            <CodeBlock className="!rounded-none !mb-0" language="haskell">
              {`data CustomerPlanUpgraded = CustomerPlanUpgraded
  { customer :: CustomerId,
    fromPlan :: Plan,
    toPlan :: Plan,
    upgradeDate :: DateTime
  }
`}
            </CodeBlock>
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            <strong>No translation. No abstraction. No impedance mismatch.</strong> Your business
            logic reads like a business conversation.
          </p>
          <h2 className="text-4xl">What Makes NeoHaskell Different</h2>
          <h2 className="text-3xl my-10">
            Event Sourcing Is The Language, Not A Library
          </h2>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            Other languages make you fight for event sourcing. You need
            frameworks, libraries, careful discipline. One mistake and you're
            back in CRUD hell.
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            In NeoHaskell, <strong>event sourcing isn't something you add. It's
            something you'd have to work to avoid.</strong> Every state change is an
            event. Every event is immutable. Every system is automatically
            auditable, replayable, debuggable.{" "}
            <strong>
              The compiler doesn't let you store something in the database where
              you're not supposed to.
            </strong>
          </p>
          <h2 className="text-3xl my-10">
            Mathematical Guarantees, Human Expression
          </h2>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            From Haskell, we inherit something profound: <strong>if it compiles, it
            works.</strong> This isn't marketing, it's math. Entire categories of errors
            become impossible. Race conditions, null pointer exceptions, type
            mismatches, all gone.
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            But unlike Haskell, we've optimized for developer happiness, and we
            chase your success at all costs. The standard library feels
            familiar. There are no millions of operators to memorize. The
            concepts map to how you already think. The error messages actually
            help.
          </p>
          <h2 className="text-3xl my-10">
            Linear Complexity In A Exponential World
          </h2>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            In traditional systems, feature #100 might take 10x longer than
            feature #10. Dependencies tangle. Side effects multiply. Fear creeps
            in.
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            In NeoHaskell, <strong>feature #1000 takes the same effort as feature #1.</strong>
            New events don't break old ones. New handlers don't destabilize
            existing ones. Your system grows by addition, never by modification.
          </p>
          <h2 className="text-4xl my-10">Where We Are Today</h2>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            NeoHaskell is not complete. We're building this in public, with real
            production users, solving real problems.
          </p>
          <h2 className="text-3xl my-10">What's Already Working:</h2>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            - A Beautiful Standard Library: Carefully crafted APIs that make
            simple things trivial and complex things possible. Every function
            documented, every pattern thoughtful.
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            - Production-Ready Concurrency: Channels for message passing. Locks
            when you need them. Thread-safe variables that actually work. These
            are the primitives NeoHaskell is built on top of, ensuring your
            system is not only correct, but also blazing fast.
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            - In-Memory Event Store: Perfect for development and testing. Your
            events are safe, queryable, replayable.
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            - PostgreSQL Event Store (In Progress): Because production needs
            production databases. Built on boring, bulletproof technology.
            Coming together beautifully.
          </p>
          <h2 className="text-3xl my-10">What's Coming:</h2>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            We're building toward a complete platform that generates everything
            you need from your event model. Automatic API generation.
            Infrastructure that scales. Deployment that just works. The ease of
            low-code with the power of real programming.
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            Imagine describing your business events and getting:
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            - A GraphQL (or Swagger, or gRPC, or...!) API that updates in
            real-time
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            - A scalable infrastructure that handles millions of events
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            - Complete observability—know everything that ever happened
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            - Time travel debugging—replay any scenario instantly
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            - The ability to fork a stream of events from your production
            environment to your development environment for debugging
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            - Perfect audit trails—compliance becomes trivial
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            This isn't fantasy. We've already done parts of this in the past.
            With every release, more becomes automatic.
          </p>
          <h2 className="text-4xl my-10">
            The Philosophy: Remove Everything That Gets In The Way
          </h2>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            We're not adding features for their own sake. Every decision follows
            a simple principle: <strong>does this remove friction between human
            intention and running software?</strong>
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            - <strong>Configuration files? Removed.</strong> Your code should express intent
            clearly enough.
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            - <strong>Dependency hell? Removed.</strong> One tool, one purpose, one way that
            works.
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            - <strong>DevOps complexity? Removed.</strong> From code to cloud in one command.
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            - <strong>The fear of change? Removed.</strong> If it compiles, it works.
          </p>
          <h2 className="text-4xl my-10">Who This Is For</h2>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            You're a startup founder who knows that initial technical decisions
            determine your company's fate. You can't afford to be rewriting in
            two years when you should be scaling.
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            You're an enterprise architect tired of managing complexity instead
            of creating value. You want systems that grow gracefully, not ones
            that calcify.
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            You're a developer who came to this field to build, not to debug.
            You want to write business logic, not boilerplate.
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            You're a product manager exhausted by "technical limitations." You
            want your ideas to become features, not tickets that languish in
            backlogs.
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            You're a CEO who suspects you're spending too much on engineering
            for too little output. You're right. And it's not your team's fault.
          </p>
          <h2 className="text-4xl my-10">The Invitation</h2>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            We're not asking you to trust us blindly. We're building this with
            real companies, solving real problems, in production, today.
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            If you're tired of:
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            - Features that get exponentially harder to implement
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            - Teams that grow faster than output
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            - Systems that everyone fears to change
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            - The constant specter of "the rewrite"
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            <strong>Join us.</strong>
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            <strong>Software development should be joyful, not painful.</strong> Systems should
            become more valuable over time, not more dangerous. Technology
            should amplify human creativity, not constrain it. <strong>Your 1000th day
            of development should feel like your first.</strong>
          </p>
          <h2 className="text-4xl my-10">Start Today</h2>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            NeoHaskell is ready for pioneers. If you're building something new,
            if you're ready to escape the rewrite trap, if you believe software
            can be better: We're waiting for you.
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            <strong>The revolution isn't coming. It's being typed right now,</strong> one event
            at a time, by developers who refuse to accept that suffering is the
            price of scale.
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            <strong>
              Welcome to NeoHaskell. Welcome to software development as it
              should be.
            </strong>
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10 ">
            <i>
              The old world optimizes for machines. We're optimizing for humans.
              Join us.
            </i>
          </p>
        </Frame>
      </div>
      <VideoPlayer />
      <div className="relative text-center mx-auto mt-20 mb-10">
        <div className="flex lg:flex-row flex-col justify-center gap-10">
          <Link to="/docs/docs-intro">
            <Button color="yellow" rounded="full" size="lg" className="w-full">
              <h2 className="mx-4 my-2 sm:text-2xl text-xl">
                Support the Project
              </h2>
            </Button>
          </Link>
          <Link to="https://discord.com/invite/wDj3UYzec8">
            <Button color="violet" rounded="full" size="lg" className="w-full">
              <h2 className="mx-4 my-2 sm:text-2xl text-xl">
                Join the Discord server
              </h2>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

function VideoPlayer({ enabled }: { enabled?: boolean }) {
  return enabled ? (
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
  ) : (
    <></>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description={`${siteConfig.tagline}`}>
      <div className="container">
        {/* <Disclaimer /> */}
        <HomepageHeader />

        {/* <main className="pt-32">
          <HomepageFeatures />
          <div className="relative">
            <img
              className="absolute sm:h-36 h-24 top-0 -z-10"
              src="img/Star1.svg"
            />
            <img
              className="absolute sm:h-36 h-24 bottom-0 right-0 -z-10 "
              src="img/Star2.svg"
            />
            <div className="lg:mx-32 mx-0 mb-32">
              <Frame>
                <div className="lg:p-16 p-0 flex flex-col gap-8">
                  <img src="img/logo.svg" className="mx-auto lg:h-64 h-32" />
                  <h2 className="text-center md:text-4xl text-2xl">
                    A Community for People Like You
                  </h2>
                  <div className="flex flex-col gap-8 text-lg">
                    <p>
                      NeoHaskell is a community of people who are passionate
                      about delivering software in an efficient and enjoyable
                      way. We believe that programming should be fun, and that
                      the best way to learn is to build things.
                    </p>
                    <p>
                      Therefore, NeoHaskell is a work in progress project. We
                      are aiming to build a language that is delightful to learn
                      and use,{" "}
                      <b>
                        strongly focusing on optimizing developers' happiness
                      </b>
                      .
                    </p>
                    <p>
                      Whether you're a freshman or a senior, a hacker or a
                      rocket scientist, you'll find a place in our community.
                    </p>
                    <p>
                      Together, we are building the best language for the next
                      generation of developers. Join us!
                    </p>
                  </div>
                  <div className="mx-auto">
                    <Button
                      className="mx-auto"
                      color="violet"
                      rounded="full"
                      size="lg"
                    >
                      <a
                        href="https://discord.com/invite/wDj3UYzec8"
                        target="_blank"
                      >
                        <h3>JOIN THE DISCORD SERVER!</h3>
                      </a>
                    </Button>
                  </div>
                </div>
              </Frame>
            </div>
          </div>
        </main> */}
      </div>
    </Layout>
  );
}
