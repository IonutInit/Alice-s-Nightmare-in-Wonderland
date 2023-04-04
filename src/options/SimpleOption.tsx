import { useEffect } from "react";

import content from "../data/content.json";

import { Props, Content } from "../../types";

const SimpleOption = ({ state, dispatch }: Props) => {
  function handleClick(newChapter: number) {
    dispatch({
      type: "change_chapter",
      payload: newChapter,
    });
  }

  const typedContent: Content = content;

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
          onClick={() => handleClick(Number(option[0]))}
        >
          {option[1] === undefined ? "Move on" : option[1]}
        </button>
      ))}
    </>
  );
};

export default SimpleOption;
