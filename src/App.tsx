import { useReducer } from "react";
import Welcome from "./pages/Welcome";
import Introduction from "./pages/Introduction";
import Attributes from "./pages/Attributes";
import Game from "./pages/Game";
import YouLost from "./pages/YouLost";
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
      {state.gameState === 4 && <YouLost dispatch={dispatch} />}
      <h1>{state.chapter}</h1>
    </div>
  );
}

export default App;
