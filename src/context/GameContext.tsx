import { createContext, useReducer, Dispatch, useMemo } from "react";
import { GameState, Action } from "../../types";
import reducer from "./Reducer";
import gameData from "../data/gameData";

type GameContextType = {
  state: GameState;
  dispatch: Dispatch<Action>;
};

export const GameContext = createContext<GameContextType>({
  state: gameData,
  dispatch: () => null,
});

export const GameContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, gameData);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};
