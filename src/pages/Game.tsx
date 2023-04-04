import React from "react";

import SimpleOption from "../options/SimpleOption";

import { Props, Content } from "../../types";

import importedContent from "../data/content.json";

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
      <SimpleOption state={state} dispatch={dispatch} />
    </div>
  );
}

export default Game;
