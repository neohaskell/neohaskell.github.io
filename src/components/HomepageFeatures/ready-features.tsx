import React from "react";
import { FeatureItem } from "./feature-item";

export const ReadyFeatures: FeatureItem[] = [
  {
    title: "Static feels like Dynamic",
    description: (
      <>
        NeoHaskell's type system is so powerful that you'll forget it's there.
        With type inference, you'll spend less time annotating and more time
        coding in a language that feels dynamic.
      </>
    ),
    buttonText: "Start Coding",
    showcase: {
      language: "haskell",
      code: `process = do
  joe <- getPerson "Joe"
  if joe.age > 18 then
    print "Joe is an adult"
  else
    print "Joe is a child"`,
    },
  },
  {
    title: "Hassle-Free Development Environment",
    description: (
      <>
        NeoHaskell's CLI tool installs all required utilities and makes
        multi-platform support a breeze. Whether you're compiling to native code
        or generating WebAssembly for browser compatibility, you'll enjoy error
        messages that guide, not hinder.
      </>
    ),
    buttonText: "Enjoy the Ride",
    showcase: { code: "", language: "" },
  },
  {
    title: "Focus-Driven, Event-Driven",
    description: (
      <>
        In NeoHaskell, you work directly events and functions that react to
        them. Say goodbye to the cognitive overhead of managing state or
        wrestling with dependency injection. Your focus stays where it belongs:
        on solving problems and crafting solutions.
      </>
    ),
    buttonText: "Begin your Journey",
    showcase: { code: "", language: "" },
  },
  {
    title: "Naturally Full-Stack",
    description: (
      <>
        Relish the ease of crafting full-stack applications in a unified
        language environment. NeoHaskell takes care of frontend-backend
        communication, allowing you to focus solely on your application's logic.
      </>
    ),
    buttonText: "Experience Bliss",
    showcase: { code: "", language: "" },
  },
];
