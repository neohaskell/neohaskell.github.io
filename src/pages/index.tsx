import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import Button from "../components/Button";
import Frame from "../components/Frame";
import styles from "./index.module.css";

const flowSteps = [
  { label: "Request", detail: "What should happen?", tone: "cyan" },
  { label: "Decision", detail: "Accept or refuse", tone: "yellow" },
  { label: "Accepted event", detail: "What happened", tone: "violet" },
  { label: "Useful view", detail: "What is needed next", tone: "cyan" },
] as const;

function BehaviorFlow() {
  return (
    <figure className={styles.diagram} aria-labelledby="behavior-flow-caption">
      <div className={styles.flow}>
        {flowSteps.map((step, index) => (
          <React.Fragment key={step.label}>
            <div className={`${styles.flowStep} ${styles[step.tone]}`}>
              <strong>{step.label}</strong>
              <span>{step.detail}</span>
            </div>
            {index < flowSteps.length - 1 ? (
              <span className={styles.flowConnector} aria-hidden="true" />
            ) : null}
          </React.Fragment>
        ))}
      </div>
      <figcaption id="behavior-flow-caption" className={styles.caption}>
        A request is checked against the rules before an event is accepted.
        Views are derived from accepted history.
      </figcaption>
    </figure>
  );
}

function HistoryComparison() {
  return (
    <figure className={styles.diagram} aria-labelledby="history-caption">
      <div className={styles.comparisonGrid}>
        <div className={styles.comparisonPanel}>
          <h3>Current value only</h3>
          <div className={styles.stateTransition}>
            <div className={`${styles.valueBlock} ${styles.violet}`}>
              <span>Balance</span>
              <strong>€100</strong>
            </div>
            <span className={styles.transitionConnector} aria-hidden="true" />
            <div className={`${styles.valueBlock} ${styles.violet}`}>
              <span>Balance</span>
              <strong>€70</strong>
            </div>
          </div>
          <p>The new value replaces the old one. The reason is elsewhere.</p>
        </div>

        <div className={styles.comparisonPanel}>
          <h3>Accepted history</h3>
          <div className={styles.timeline}>
            <div className={`${styles.timelineItem} ${styles.cyan}`}>
              <strong>AccountOpened</strong>
              <span>+€100</span>
            </div>
            <span className={styles.timelineConnector} aria-hidden="true" />
            <div className={`${styles.timelineItem} ${styles.cyan}`}>
              <strong>CashWithdrawn</strong>
              <span>-€30</span>
            </div>
            <span className={styles.timelineConnector} aria-hidden="true" />
            <div className={`${styles.timelineItem} ${styles.violet}`}>
              <strong>Current balance</strong>
              <span>€70</span>
            </div>
          </div>
          <p>The current value is reconstructed from the recorded facts.</p>
        </div>
      </div>
      <figcaption id="history-caption" className={styles.caption}>
        Illustrative account history. The application must explicitly model the
        facts, reasons, authority, and evidence it needs to retain.
      </figcaption>
    </figure>
  );
}

function FoundationMap() {
  const foundations = [
    ["Command / request", "Represents an intended change"],
    ["Entity", "Reconstructs current state from prior events"],
    ["Decision", "Accepts or refuses the request"],
    ["Event", "Records an accepted domain fact"],
    ["Query", "Builds a view for a particular question"],
  ];

  return (
    <figure className={styles.diagram} aria-labelledby="foundation-caption">
      <dl className={styles.foundationMap}>
        {foundations.map(([term, description], index) => (
          <div className={styles.foundationRow} key={term}>
            <dt>
              <span>{index + 1}</span>
              {term}
            </dt>
            <dd>{description}</dd>
          </div>
        ))}
      </dl>
      <figcaption id="foundation-caption" className={styles.caption}>
        These are explicit structures in the program, and the Neo IDE can show
        their relationships.
      </figcaption>
    </figure>
  );
}

function GrowthComparison() {
  const features = ["A", "B", "C", "D", "E", "F", "G"];
  const reworkLayers = [0, 0, 0, 1, 1, 2, 3];

  return (
    <figure className={styles.diagram} aria-labelledby="growth-caption">
      <div className={styles.costFigures}>
        <div className={styles.costFigure}>
          <h3>Implicit dependencies</h3>
          <svg
            className={styles.costChart}
            viewBox="0 0 460 280"
            role="img"
            aria-label="Chart showing rework accumulating as more behaviors depend on hidden shared assumptions"
          >
            <title>Implicit dependencies increase rework</title>
            <defs>
              <marker
                id="red-arrow"
                markerHeight="8"
                markerWidth="8"
                orient="auto"
                refX="7"
                refY="4"
              >
                <path d="M0,0 L8,4 L0,8 Z" className={styles.redArrow} />
              </marker>
            </defs>
            <path className={styles.chartAxis} d="M42 24 V230 H430" />
            <path
              className={styles.risingCurve}
              d="M54 172 C155 164 268 134 410 40"
              markerEnd="url(#red-arrow)"
            />
            <text className={styles.curveLabel} x="245" y="105">
              widening change surface
            </text>
            {features.map((feature, index) => {
              const x = 56 + index * 51;
              const layers = reworkLayers[index];
              return (
                <g key={feature}>
                  {Array.from({ length: layers }).map((_, layer) => (
                    <g key={layer}>
                      <rect
                        className={styles.reworkBlock}
                        height="36"
                        width="44"
                        x={x}
                        y={184 - layer * 38}
                      />
                      <text
                        className={styles.blockLabel}
                        x={x + 22}
                        y={207 - layer * 38}
                      >
                        R
                      </text>
                    </g>
                  ))}
                  <rect
                    className={styles.featureBlock}
                    height="36"
                    width="44"
                    x={x}
                    y={184 - layers * 38}
                  />
                  <text
                    className={styles.blockLabel}
                    x={x + 22}
                    y={207 - layers * 38}
                  >
                    {feature}
                  </text>
                </g>
              );
            })}
            <text className={styles.axisLabel} x="236" y="267">
              behaviors in the system
            </text>
            <text
              className={styles.axisLabel}
              transform="rotate(-90 15 134)"
              x="15"
              y="134"
            >
              relative change effort
            </text>
          </svg>
          <p>
            Hidden shared assumptions widen the change surface. Red blocks
            represent rework in earlier behavior.
          </p>
        </div>

        <div className={styles.costFigure}>
          <h3>Visible slices and contracts</h3>
          <svg
            className={styles.costChart}
            viewBox="0 0 460 280"
            role="img"
            aria-label="Chart showing additive behavior slices with a bounded change surface"
          >
            <title>Visible slices keep changes local</title>
            <defs>
              <marker
                id="blue-arrow"
                markerHeight="8"
                markerWidth="8"
                orient="auto"
                refX="7"
                refY="4"
              >
                <path d="M0,0 L8,4 L0,8 Z" className={styles.blueArrow} />
              </marker>
            </defs>
            <path className={styles.chartAxis} d="M42 24 V230 H430" />
            <path
              className={styles.boundedCurve}
              d="M54 166 C155 164 292 160 410 152"
              markerEnd="url(#blue-arrow)"
            />
            <text className={styles.boundedLabel} x="205" y="140">
              Event Modeled
            </text>
            {features.map((feature, index) => {
              const x = 56 + index * 51;
              return (
                <g key={feature}>
                  <rect
                    className={styles.featureBlock}
                    height="36"
                    width="44"
                    x={x}
                    y="184"
                  />
                  <text className={styles.blockLabel} x={x + 22} y="207">
                    {feature}
                  </text>
                </g>
              );
            })}
            <path className={styles.sharedContract} d="M56 220 H406" />
            <text className={styles.sharedLabel} x="230" y="247">
              shared contracts remain visible
            </text>
            <text className={styles.axisLabel} x="236" y="267">
              behaviors in the system
            </text>
            <text
              className={styles.axisLabel}
              transform="rotate(-90 15 134)"
              x="15"
              y="134"
            >
              relative change effort
            </text>
          </svg>
          <p>
            Each slice gives the team a boundary to implement and test.
            Shared contracts remain explicit coordination points.
          </p>
        </div>
      </div>
      <figcaption id="growth-caption" className={styles.caption}>
        Event Modeling gives each behavior a visible blueprint. NeoHaskell
        turns that blueprint into typed Commands, Decisions, Events, Entities,
        and Queries.
      </figcaption>
    </figure>
  );
}

function HomepageHeader() {
  return (
    <header className={styles.hero}>
      <h1 className="leading-relaxed lg:text-7xl md:text-6xl sm:text-5xl text-3xl">
        Know what your software does.{" "}
        <span className="text-lightsecondary">Explain why it did it.</span>
      </h1>
      <p className={styles.heroLead}>
        NeoHaskell helps teams model a change as a request, a decision, a
        recorded event, and a view. Those concepts stay visible from design
        through implementation, so the current state has a history and the next
        change has a place to start.
      </p>
      <div className={styles.heroDiagram}>
        <Frame rainbow>
          <BehaviorFlow />
        </Frame>
      </div>
    </header>
  );
}

function HomepageBody() {
  return (
    <main className={styles.content}>
      <section className={styles.section}>
        <div className={styles.sectionText}>
          <h2>A Current Value Is A Summary</h2>
          <p>
            A balance of €70 tells you where an account ended, but not how it
            got there. In an application backed by a persistent event store,
            accepted events can provide the history from which current state is
            reconstructed.
          </p>
        </div>
        <HistoryComparison />
        <p className={styles.callout}>
          History answers only the questions the application was designed to
          preserve. Reasons, evidence, attribution, privacy, and retention are
          still explicit design choices.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionText}>
          <h2>One Model, Carried Through The Toolchain</h2>
          <p>
            Event sourcing and domain modeling can be implemented in many
            languages. NeoHaskell is designed to make their core concepts part
            of the application model rather than conventions every team must
            recreate.
          </p>
        </div>
        <FoundationMap />
        <p className={styles.callout}>
          Types can make some invalid combinations unrepresentable. The
          compiler catches type mismatches and can require exhaustive handling
          where code uses closed alternatives. Tests exercise the policies and
          boundary cases they cover. None of these checks can decide whether a
          business rule is fair, complete, or right for the real world.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionText}>
          <h2>Add Behavior In Visible Slices</h2>
          <p>
            A behavior slice follows one useful change from request through
            decision and accepted event to the view needed next. Stable
            boundaries keep change local instead of forcing contributors to
            reinterpret the whole system.
          </p>
        </div>
        <GrowthComparison />
      </section>

      <section className={styles.section}>
        <div className={styles.sectionText}>
          <h2>Correct Mistakes Without Erasing Them</h2>
          <p>
            If a withdrawal is recorded twice, changing the balance repairs the
            number but not the history. A domain can instead define a request
            to reverse the duplicate, a decision that checks whether it is
            allowed, and a compensating event that records the correction.
          </p>
          <p>
            Human- and agent-initiated changes can be routed through the same
            request and authorization path. Automation can assist
            implementation or submit a request; the team still owns the rule,
            the authority to apply it, and the evidence that must be retained.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionText}>
          <h2>Use It Where History Earns Its Cost</h2>
          <p>
            This approach is strongest in domains with meaningful lifecycles:
            orders, accounts, approvals, grants, projects, memberships, and
            other systems where disputes, audit, or accountability matter.
          </p>
          <p>
            Simple content sites, disposable prototypes, static lookup data,
            and workflows with no meaningful history may be better served by
            conventional tools. Event sourcing introduces modeling and
            operational costs; those costs should solve a real problem.
          </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.closing}`}>
        <Frame background="bg-yellow-200">
          <div className={styles.closingContent}>
            <h2>Start With One Rule You Can Explain</h2>
            <p>
              Pick one behavior. Name the request, the decision, the fact worth
              keeping, and the information someone needs next. That gives the
              implementation a shared model to preserve.
            </p>
            <div className={styles.actions}>
              <Link to="https://github.com/neohaskell">
                <Button color="yellow" rounded="full" size="lg">
                  <span>Explore on GitHub</span>
                </Button>
              </Link>
              <Link to="https://discord.com/invite/wDj3UYzec8">
                <Button color="violet" rounded="full" size="lg">
                  <span>Join the Discord Server</span>
                </Button>
              </Link>
            </div>
          </div>
        </Frame>
      </section>
    </main>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <HomepageBody />
    </Layout>
  );
}
