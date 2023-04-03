import { ACTIONS } from "./context/Reducer"
import content from "./data/content.json"

const SimpleOptions = ({state, dispatch}) => {
    function handleClick(newChapter) {
        dispatch({
            type: ACTIONS.CHANGE_CHAPTER,
            payload: newChapter 
        })
    }

  return (
    <>
        {content[state.chapter].options.map((option) => (
            <button onClick={() => handleClick(option[0])}>
                {option[1] === undefined ? "Move on": option[1]}
            </button>
        ))}
    </>
  )
}

export default SimpleOptions
