import { ACTIONS } from "./context/Reducer" 
import content from "./data/content.json"
import gameData from "./data/gameData"

function Attributes({dispatch}) {
    const {agility, logic, insanity, endurance} = gameData.alice;
  const attributes = Object.entries({agility, logic, insanity, endurance});
    console.log(gameData.alice)

  return (
    <div>
          {attributes.map(([name, value]) => (
        <div key={name}>
          <button onClick={() => {
            dispatch({type: ACTIONS.INCREASE_ATTRIBUTE, payload: { name, amount: 1}})
          }}>+</button>
          {name.toUpperCase()}: {value}
          <button>-</button>
        </div>
      ))}

        <button onClick={() => {
        dispatch({type: ACTIONS.ACTIVATE_GAME})
     }}>NEXT</button> 
    </div> 
  )
}

export default Attributes
