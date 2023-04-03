import { ACTIONS } from "./context/Reducer"

function Introduction({dispatch}) {
  return (
    <div>
     Hello Introduction
    <button onClick={() => {
        dispatch({type: ACTIONS.ACTIVATE_ATTRIBUTES})
    }}>NEXT</button>
    </div>
  )
}

export default Introduction
