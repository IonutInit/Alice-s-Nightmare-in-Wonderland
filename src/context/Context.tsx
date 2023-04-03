import { createContext, useContext } from "react"

import gameData from "../data/gameData"

const GameContext = createContext(gameData)

export function GameProvider({children}) {

    return(
        <GameContext.Provider value={gameData}>
            {children}
        </GameContext.Provider>
    )
}