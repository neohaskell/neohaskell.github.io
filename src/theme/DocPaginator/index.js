import React from "react";
import DocPaginator from "@theme-original/DocPaginator";
import Utterance from "@site/src/components/Utterance";

export default function DocPaginatorWrapper(props) {
  return (
    <>
      <DocPaginator {...props} />
      <Utterance />
    </>
  );
}
