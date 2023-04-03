import { ACTIONS } from "./context/Reducer" 

function Welcome({dispatch}) {
  return (
    <div>
        Hello Welcome
        <button onClick={() => {
            dispatch({type: ACTIONS.ACTIVATE_INTRODUCTION})
        }}>NEXT</button>
    </div>
  )
}

export default Welcome
