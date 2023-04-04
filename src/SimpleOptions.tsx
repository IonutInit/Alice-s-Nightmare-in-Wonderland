import content from "./data/content.json";

import { Props, Content } from "../types";

const SimpleOptions = ({ state, dispatch }: Props) => {
  function handleClick(newChapter: number) {
    dispatch({
      type: "change_chapter",
      payload: newChapter,
    });
  }

  const typedContent: Content = content;

  return (
    <>
      {typedContent[state.chapter].options.map((option) => (
        <button
          type="button"
          key={state.chapter}
          onClick={() => handleClick(Number(option[0]))}
        >
          {option[1] === undefined ? "Move on" : option[1]}
        </button>
      ))}
    </>
  );
};

export default SimpleOptions;
