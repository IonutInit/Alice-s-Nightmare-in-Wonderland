import { useReducer } from "react";
import { GameContextProvider } from "./context/GameContext";
import Welcome from "./pages/Welcome";
import Introduction from "./pages/Introduction";
import Attributes from "./pages/Attributes";
import Game from "./pages/Game";
import YouLost from "./pages/YouLost";

import reducer from "./context/Reducer";

import gameData from "./data/gameData";

function App() {
  const [state, dispatch] = useReducer(reducer, gameData);

  return (
    <GameContextProvider state={state} dispatch={dispatch}>
      <div className="h-screen flex justify-center bg-gray-400">
        <div className="w-2/3 bg-gray-200 px-20 py-10">
          {state.gameState === 0 && <Welcome />}
          {state.gameState === 1 && <Introduction />}
          {state.gameState === 2 && <Attributes />}
          {state.gameState === 3 && <Game />}
          {state.gameState === 4 && <YouLost />}
        </div>
      </div>
    </GameContextProvider>
  );
}

export default App;
