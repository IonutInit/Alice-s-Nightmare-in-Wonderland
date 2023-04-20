import { useState, useContext } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import parse from "html-react-parser";
import { GameContext } from "../context/GameContext";

import RoundedButton from "../components/RoundedButton";
import OptionsButton from "../components/OptionsButton";

import extraContent from "../data/extraContent.json";

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
    <div className="flex flex-col items-center pt-10">
      <h1 className="text-3xl pb-5">SET ATTRIBUTES</h1>
      <div className="h-1 w-full bg-slate-600 mb-10" />
      <div className="items-left">
        {attributes.map(([attribute, value]) => (
          <div key={attribute} className="flex">
            <RoundedButton
              onClick={() => modifyAttribute(attribute, 1)}
              disabled={
                points === 0 ||
                value >= initialValue[attribute] + maxPerAttribute
              }
            >
              <span className="text-3xl">+</span>
            </RoundedButton>

            <RoundedButton
              onClick={() => modifyAttribute(attribute, -1)}
              disabled={points === 10 || value <= initialValue[attribute]}
            >
              <span className="text-3xl">-</span>
            </RoundedButton>
            <div className="text-xl">
              {attribute.toUpperCase()}:{" "}
              <span className="text-3xl font-bold">{value}</span>
            </div>
          </div>
        ))}
      </div>

      <p className="text-xl py-3 flex items-center">
        <span className="mr-2">Points remaining:</span>
        <span className="inline-flex w-[55px] h-[55px] rounded-full bg-slate-700 text-white items-center justify-center text-3xl font-bold">
          {points}
        </span>
      </p>

      <OptionsButton
        disabled={points !== 0}
        onClick={() => {
          dispatch({ type: "activate_game" });
        }}
      >
        NEXT
      </OptionsButton>
      <div className="pt-5">{parse(extraContent.attributes)}</div>
    </div>
  );
}

export default Attributes;
