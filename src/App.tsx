import {useReducer, useContext } from 'react'
import { GameProvider } from './context/Context'
import Welcome from './Welcome'
import Introduction from './Introduction'
import Attributes from './Attributes'
import Game from './Game'
import './App.css'

import reducer from './context/Reducer'

import gameData from './data/gameData'

function App() {
  const [state, dispatch] = useReducer(reducer, gameData)

  return (
    <GameProvider>
       <div >
        {state.gameState === 0 && <Welcome dispatch={dispatch}/>}
        {state.gameState === 1 && <Introduction dispatch={dispatch}/>}
        {state.gameState === 2 && <Attributes dispatch={dispatch}/>}
        {state.gameState === 3 && <Game dispatch={dispatch} state={state}/>}
    </div>
    </GameProvider>
   
  )
}

export default App
