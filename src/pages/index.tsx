import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import CodeBlock from "@theme/CodeBlock";

import Frame from "../components/Frame";
import Button from "../components/Button";

const dynC = (className: string, color: string) => `${className}-light${color}`;

function HomepageHeader() {
  return (
    <header className={`${dynC("text", "text")}`}>
      <div className="px-8 my-24">
        <div className="mb-10">
          <h1 className="text-center tracking-supatight leading-relaxed lg:text-7xl md:text-6xl sm:text-5xl text-3xl">
            Code Can Be Generated.{" "}
            <span className="text-lightsecondary">
              Meaning Has To Be Designed.
            </span>
          </h1>
        </div>
      </div>

      <div className="mx-auto mb-4 lg:w-2/3">
        <Frame rainbow>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10">
            AI can produce an endpoint, a database migration, or a handler in
            seconds. That makes software faster to start. It does not make the
            resulting system easier to understand.
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10">
            The hard part is preserving what the system means: which requests
            it accepts, which rules it applies, what facts it keeps, and why the
            current state exists. When that meaning is scattered across
            generated files, framework conventions, tickets, and tribal
            knowledge, every change begins with archaeology.
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10">
            <strong>
              NeoHaskell is a language and application model for keeping those
              semantics explicit.
            </strong>{" "}
            It brings business decisions, retained history, and useful views
            into one model that people can discuss and the compiler can check.
          </p>

          <h2 className="text-4xl my-10">
            Generated Artifacts Are Not A System Model
          </h2>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10">
            An API describes how a request arrives. A table describes how data
            is stored. A handler describes what a program does next. None of
            them, on its own, explains why a change is allowed, who can make it,
            what should be remembered, or what the rest of the business needs
            to know.
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10">
            Code generation can reproduce that architecture more quickly, but
            it cannot supply the missing meaning. The faster artifacts
            multiply, the more important it becomes to give the system an
            explicit semantic core.
          </p>

          <h2 className="text-4xl my-10">
            Model Decisions, Not Just Data
          </h2>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10">
            NeoHaskell starts with the behavior your application exists to
            perform. For each small slice, name four things:
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10">
            - <strong>Request:</strong> what someone is asking the system to do.
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10">
            - <strong>Decision:</strong> the rule that accepts or refuses that
            request.
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10">
            - <strong>Accepted fact:</strong> what is worth retaining when the
            rule succeeds.
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10">
            - <strong>Useful view:</strong> the information someone needs next.
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10">
            Instead of reducing “the customer upgraded” to a row update, make
            the request and the accepted fact visible in the program:
          </p>
          <p>
            <CodeBlock className="!rounded-none !mb-0" language="haskell">
              {`data UpgradeCustomerPlan = UpgradeCustomerPlan
  { customer :: CustomerId,
    newPlan :: Plan
  }

data CustomerPlanUpgraded = CustomerPlanUpgraded
  { customer :: CustomerId,
    previousPlan :: Plan,
    newPlan :: Plan,
    acceptedAt :: DateTime
  }
`}
            </CodeBlock>
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10">
            The names are not decoration. They give domain experts and
            developers the same concepts to question before those concepts
            disappear inside implementation detail.
          </p>

          <h2 className="text-4xl my-10">
            Let History Explain The Current State
          </h2>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10">
            A balance, booking status, or subscription tier is a summary. With
            event sourcing, accepted domain events form the retained history
            from which that state is reconstructed. A correction can add a new
            fact instead of silently rewriting the past.
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10">
            That history makes more questions answerable: what happened, in
            what order, and which recorded facts produced the state we see now.
            It only explains what the application chose to record, so reasons,
            authority, and evidence still have to be designed deliberately.
          </p>

          <h2 className="text-4xl my-10">
            Put Semantics Where Tools Can Protect Them
          </h2>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10">
            A library can recommend a pattern. A team convention can ask people
            to remember it. A language and compiler can make important parts of
            the model visible and checkable as the system changes.
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10">
            NeoHaskell is being built around that deeper layer: a language,
            application framework, CLI, and visual IDE that share the same
            concepts. Requests, decisions, events, and views are not an
            after-the-fact diagram. They are structures in the program.
          </p>

          <h2 className="text-4xl my-10">
            The Compiler Checks Structure. People Decide What Is Right.
          </h2>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10">
            Types and compiler checks can rule out invalid combinations and
            expose mismatched assumptions. Tests can provide evidence for the
            success, refusal, and boundary cases they cover. Neither can decide
            whether a business rule is fair, complete, or correct for the real
            world.
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10">
            AI coding agents can help write the implementation. People who
            understand the domain still choose the policy. NeoHaskell aims to
            keep that policy visible long enough to discuss, implement, review,
            and change without pretending that generated code is the decision
            itself.
          </p>

          <h2 className="text-4xl my-10">
            Make The Next Change Small Enough To Explain
          </h2>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10">
            Build one useful behavior from request through decision, accepted
            fact, and view. Check the ordinary success case, the refusal case,
            and the boundaries. Then add the next slice without hiding the old
            meaning.
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10">
            This does not make change automatic. Shared events and existing
            history still require deliberate coordination. It does give the
            team stable concepts to reason about instead of asking every future
            contributor to reverse-engineer intent from side effects.
          </p>

          <h2 className="text-4xl my-10">Where NeoHaskell Is Today</h2>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10">
            NeoHaskell is a work in progress, built in public. The goal is not
            to produce more code than existing tools. It is to make software
            meaning explicit enough that humans and tools can work from the
            same model.
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10">
            The language, application framework, Neo CLI, and visual IDE are
            being developed together around this workflow. You can follow the
            project, try the current pieces, and help shape what comes next.
          </p>

          <h2 className="text-4xl my-10">Start With One Rule You Can Explain</h2>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10">
            Pick one behavior in your system. Name the request, the decision,
            the fact worth keeping, and the information needed next. If the
            team can discuss that model clearly, implementation has a meaning
            to preserve.
          </p>
          <p className="text-left md:text-2xl sm:text-xl text-lg justify-normal my-10">
            <strong>
              Build systems whose current state has a history—and whose code
              still says what the business meant.
            </strong>
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
                Join the Discord Server
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
        <HomepageHeader />
      </div>
    </Layout>
  );
}
