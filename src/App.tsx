import { useReducer } from "react";
import Welcome from "./Welcome";
import Introduction from "./Introduction";
import Attributes from "./Attributes";
import Game from "./Game";
import "./App.css";

import reducer from "./context/Reducer";

import gameData from "./data/gameData";

function App() {
  const [state, dispatch] = useReducer(reducer, gameData);

  return (
    <div>
      {state.gameState === 0 && <Welcome dispatch={dispatch} />}
      {state.gameState === 1 && <Introduction dispatch={dispatch} />}
      {state.gameState === 2 && (
        <Attributes dispatch={dispatch} state={state} />
      )}
      {state.gameState === 3 && <Game dispatch={dispatch} state={state} />}
    </div>
  );
}

export default App;
