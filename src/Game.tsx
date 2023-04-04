import React from "react";

import SimpleOptions from "./SimpleOptions";

import { Props, Content } from "../types";

// const content: Content = require("./data/content.json");

import importedContent from "./data/content.json";

const content: Content = importedContent;

function Game({ dispatch, state }: Props) {
  const { chapter } = state;

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
      <SimpleOptions state={state} dispatch={dispatch} />
    </div>
  );
}

export default Game;
