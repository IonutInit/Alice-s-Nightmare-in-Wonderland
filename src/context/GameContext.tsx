import { createContext, Dispatch, useMemo } from "react";
import { GameState, Action } from "../../types";

type GameContextType = {
  state: GameState;
  dispatch: Dispatch<Action>;
};

export const GameContext = createContext<GameContextType>({
  state: {} as GameState,
  dispatch: () => null,
});

export const GameContextProvider = ({
  state,
  dispatch,
  children,
}: {
  state: GameState;
  dispatch: Dispatch<Action>;
  children: React.ReactNode;
}) => {
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};
