/* eslint-disable react/prop-types,import/no-unresolved */
import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Figure({ src, sourceLink, alt }) {
  return (
    <figure className="!flex !flex-col !place-items-center">
      <img src={src} alt={alt} />
      <figcaption className="!text-xs">{`Source: ${sourceLink}`}</figcaption>
    </figure>
  );
}
