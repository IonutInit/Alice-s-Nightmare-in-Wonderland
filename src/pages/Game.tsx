import Console from "../game/Console";
import ChapterContent from "../game/ChapterContent";
import SimpleOption from "../options/SimpleOption";
import Test from "../options/Test";
import EndOfSample from "../options/EndOfSample";

import importedContent from "../data/content.json";

import { Props, Content } from "../../types";

const content: Content = importedContent;

function Game({ dispatch, state }: Props) {
  const chapter = content[state.chapter];

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
