import React from "react"

import SimpleOptions from "./SimpleOptions"

import content from "./data/content.json"

function Game({dispatch, state}) {
    const chapter = state.chapter
 
  return (
 <div>
      {content[chapter].content
        .split("\n")
        .map((line: string, index: number) => (
          // eslint-disable-next-line react/no-array-index-key
          <React.Fragment key={index}>
            {line}
            <br />
            <br />
          </React.Fragment>
        ))}
        <SimpleOptions state={state} dispatch={dispatch}/>
    </div>
  )
}

export default Game
