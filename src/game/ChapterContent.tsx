import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";

import importedContent from "../data/content.json";

import { Content } from "../../types";

const content: Content = importedContent;

function ChapterContent() {
  const {
    state: { chapter },
  } = useContext(GameContext);

  return (
    <div className="pt-[30px] h-[400px] overflow-scroll">
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
