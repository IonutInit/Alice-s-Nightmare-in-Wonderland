import React from "react";
import useGameContext from "../context/useGameContext";

import importedContent from "../data/content.json";

import { Content } from "../../types";

const content: Content = importedContent;

function ChapterContent() {
  const {
    state: { chapter },
  } = useGameContext();

  return (
    <div className="pt-[30px] h-[400px] overflow-scroll border-b border-slate-800">
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
