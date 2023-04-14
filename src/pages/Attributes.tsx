import { useState, useContext } from "react";
import { GameContext } from "../context/GameContext";

function Attributes() {
  const { state, dispatch } = useContext(GameContext);
  const { agility, logic, combat, endurance } = state.alice;
  const [initialValue] = useState(state.alice);
  const attributes = Object.entries({ agility, logic, combat, endurance });

  const [points, setPoints] = useState(10);
  const maxPerAttribute = 5;

  function modifyAttribute(attribute: string, value: number) {
    setPoints(() => points - value);
    dispatch({
      type: "modify_attribute",
      payload: { attribute, amount: value },
    });
  }

  return (
    <div>
      {attributes.map(([attribute, value]) => (
        <div key={attribute}>
          <button
            type="button"
            onClick={() => modifyAttribute(attribute, 1)}
            disabled={
              points === 0 || value >= initialValue[attribute] + maxPerAttribute
            }
          >
            +
          </button>
          {attribute.toUpperCase()}: {value}
          <button
            type="button"
            onClick={() => modifyAttribute(attribute, -1)}
            disabled={points === 10 || value <= initialValue[attribute]}
          >
            -
          </button>
          <p>{}</p>
        </div>
      ))}
      <p>Points remaining: {points}</p>
      <button
        type="button"
        disabled={points !== 0}
        onClick={() => {
          dispatch({ type: "activate_game" });
        }}
      >
        NEXT
      </button>
    </div>
  );
}

export default Attributes;
