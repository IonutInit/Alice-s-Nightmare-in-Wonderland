import { useEffect, useContext } from "react";
import { GameContext } from "../context/GameContext";

import OptionsButton from "../components/OptionsButton";

import content from "../data/content.json";

import disableSpecialAbilityButton from "../lib/specialAbilities";
import customButtonMessage from "../lib/customButtonMessage";

import { Content } from "../../types";

const SimpleOption = () => {
  const { state, dispatch } = useContext(GameContext);

  const typedContent: Content = content;

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

  // function customButtonMessage(log: string[]) {
  //   if (log[log.length - 1]?.indexOf("Alice won") === 0) {
  //     return `${log[log.length - 1]} Time to move on!`;
  //   }
  //   return "Move on";
  // }

  return (
    <div className="flex flex-col justify-center items-center">
      {typedContent[state.chapter].options.map((option) => (
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
