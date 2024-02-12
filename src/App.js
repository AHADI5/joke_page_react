import React from "react";
import Joke from "./components/Joke";
import Data from "./components/Data";
export default function App() {
  const Jokes = Data.map((data) => {
    return <Joke 
    setUp = {data.setUp}
    Punchline = {data.Punchline}

    />
  })
  return (
    <div>
      {Jokes}
    </div>

  )

}
