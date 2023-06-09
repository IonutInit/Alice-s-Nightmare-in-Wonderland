import { useEffect } from "react";
import useGameContext from "../context/useGameContext";

import OptionsButton from "../components/OptionsButton";

import disableSpecialAbilityButton from "../lib/specialAbilities";
import customButtonMessage from "../lib/customButtonMessage";

import content from "../lib/typedContent";

const SimpleOption = () => {
  const { state, dispatch } = useGameContext();

  function handleClick(newChapter: number, specialAbility?: string) {
    if (specialAbility !== undefined) {
      dispatch({
        type: "modify_attribute",
        payload: { attribute: specialAbility.toString(), amount: -1 },
      });
    }
    dispatch({
      type: "change_chapter",
      payload: newChapter,
    });
  }

  useEffect(() => {
    dispatch({
      type: "clear_options",
    });
  }, [dispatch]);

  return (
    <div className="flex flex-col justify-center items-center">
      {content[state.chapter].options.map((option) => (
        <OptionsButton
          key={option[0]}
          disabled={disableSpecialAbilityButton(option, state.alice)}
          onClick={() => handleClick(Number(option[0]), option[2]?.toString())}
        >
          {option[1] === undefined ? customButtonMessage(state.log) : option[1]}
        </OptionsButton>
      ))}
    </div>
  );
};

export default SimpleOption;
