import Console from "../game/Console";
import ChapterContent from "../game/ChapterContent";
import SimpleOption from "../options/SimpleOption";
import EndOfSample from "../options/EndOfSample";

import importedContent from "../data/content.json";

import { Props, Content } from "../../types";

const content: Content = importedContent;

function Game({ dispatch, state }: Props) {
  return (
    <div>
      <Console state={state} />

      <ChapterContent state={state} />

      <SimpleOption state={state} dispatch={dispatch} />

      {content[state.chapter].sample_end && <EndOfSample dispatch={dispatch} />}
    </div>
  );
}

export default Game;
