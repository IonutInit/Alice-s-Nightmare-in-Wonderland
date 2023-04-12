import { useEffect } from "react";

import content from "../data/content.json";

import disableSpecialAbilityButton from "../lib/specialAbilities";

import { Props, Content } from "../../types";

const SimpleOption = ({ state, dispatch }: Props) => {
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

  return (
    <>
      {typedContent[state.chapter].options.map((option) => (
        <button
          type="button"
          key={option[0]}
          disabled={disableSpecialAbilityButton(option, state.alice)}
          onClick={() => handleClick(Number(option[0]), option[2]?.toString())}
        >
          {option[1] === undefined ? "Move on" : option[1]}
        </button>
      ))}
    </>
  );
};

export default SimpleOption;
