import Console from "../game/Console";
import ChapterContent from "../game/ChapterContent";
import SimpleOption from "../options/SimpleOption";

import { Props } from "../../types";

function Game({ dispatch, state }: Props) {
  return (
    <div>
      <Console state={state} />

      <ChapterContent state={state} />

      <SimpleOption state={state} dispatch={dispatch} />
    </div>
  );
}

export default Game;
