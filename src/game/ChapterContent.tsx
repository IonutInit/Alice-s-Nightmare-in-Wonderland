import React from "react";

import importedContent from "../data/content.json";

import { Content, State } from "../../types";

const content: Content = importedContent;

function ChapterContent({ state }: State) {
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
    </div>
  );
}

export default ChapterContent;