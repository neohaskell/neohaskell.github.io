import React from "react";
import { FeatureItem } from "./feature-item";

export const ReadyFeatures: FeatureItem[] = [
  {
    title: "A Static that feels like Dynamic",
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
      code: `verify = do
  joe <- getPerson "Joe"
  if joe.age > 18 then
    print "Joe is an adult"
  else
    print "Joe is a child"`,
    },
  },
  {
    title: "Lazy Evaluation for Eager Minds",
    description: (
      <>
        NeoHaskell won't evaluate an expression until it's absolutely needed.
        This lets you create more efficient code and focus on what to compute
        rather than how to compute it.
      </>
    ),
    buttonText: "Get Lazy, Be Efficient",
    showcase: {
      language: "haskell",
      code: `let infiniteList = [1..]
let doubledList = List.map (*2) infiniteList
print (List.toString doubledList)`,
    },
  },
  {
    title: "Fearless Concurrency",
    description: (
      <>
        <p>
          Concurrency is not an afterthought in NeoHaskell; it's baked right in.
          Write concurrent code without the common pitfalls, and get more done,
          faster.
        </p>
        <br />
        <p>
          Functions like <code>async</code> and <code>race</code> make it easy
          to write concurrent code. And with concepts like Channels, you'll be
          able to write concurrent code without the headaches.
        </p>
      </>
    ),
    buttonText: "Unlock Concurrency",
    showcase: {
      language: "haskell",
      code: `foo = do
  threadDelay 500
  print "foo"

bar = do
  threadDelay 1000
  print "bar"

-- will print "foo" and exit
main = race foo bar`,
    },
  },
  {
    title: "A beautiful standard library",
    description: (
      <>
        NeoHaskell offers a clean and intuitive language design, complemented by
        a core library that provides all the tools you need to start creating
        amazing software right away.
      </>
    ),
    buttonText: "Start Coding",
    showcase: {
      language: "haskell",
      code: `"NeoHaskell is cool"
  |> Text.toWordList
  |> List.map Text.length
  |> List.map (\\x -> x * x)
  |> List.takeIf Int.isEven`,
    },
  },
];
