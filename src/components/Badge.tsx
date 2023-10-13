import React, { useEffect } from "react";

interface Props {
  issue: string;
}

const url = (issue: string) =>
  `https://img.shields.io/github/issues/detail/state/NeoHaskell/NeoHaskell/${issue}?style=for-the-badge&logo=github`;

const Badge = ({ issue }: Props) => {
  const [issueState, setIssueState] = React.useState("loading");
  const [issueTitle, setIssueTitle] = React.useState<string>();

  useEffect(() => {
    try {
      fetch(
        `https://api.github.com/repos/neohaskell/neohaskell/issues/${issue}`
      )
        .then((r) => r.json())
        .then((r) => {
          if (!r) return;
          setIssueState(r.state);
          setIssueTitle(r.title);
        });
    } catch (e) {
      console.error(e);
    }
  }, []);

  const colorClass = {
    open: "badge-warning",
    closed: "hidden",
    loading: "badge-primary",
  };

  const issueInfo = issueState ? `#${issue} - ${issueTitle}` : "LOADING";

  return (
    <a
      className="tooltip"
      data-tip={issueInfo}
      target="_blank"
      href={`https://github.com/neohaskell/neohaskell/issues/${issue}`}
    >
      <div
        className={`badge border-black ${colorClass[issueState]} badge-lg`}
      ></div>
    </a>
  );
};

export default Badge;
