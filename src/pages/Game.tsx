import { useEffect } from "react";

import Console from "../game/Console";
import ChapterContent from "../game/ChapterContent";
import SimpleOption from "../options/SimpleOption";
import Test from "../options/Test";
import EndOfSample from "../options/EndOfSample";

import importedContent from "../data/content.json";

import handleEvent from "../lib/handleEvent";

import { Props, Content } from "../../types";

const content: Content = importedContent;

function Game({ dispatch, state }: Props) {
  const chapter = content[state.chapter];

  useEffect(() => {
    handleEvent(chapter.event, dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapter, dispatch, state.chapter]);

  const caseForEndOfSample = chapter.sample_end;
  const caseForTest = chapter.test;

  return (
    <div>
      <Console state={state} />

      <ChapterContent state={state} />

      {!caseForTest && <SimpleOption state={state} dispatch={dispatch} />}

      {caseForTest && <Test state={state} dispatch={dispatch} />}

      {caseForEndOfSample && <EndOfSample dispatch={dispatch} />}
    </div>
  );
}

export default Game;
