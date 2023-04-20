// This component is a late addition and there was no initial plan to a display such as "info". The method of referring to Introduction while avoiding possible re-renders is suboptimal, but it does the job for the time being

import { useState } from "react";
import useGameContext from "../context/useGameContext";

import githubLogo from "../assets/github.svg";
import info from "../assets/info.svg";

import importedContent from "../data/content.json";

import { Content } from "../../types";

const content: Content = importedContent;

function Footer() {
  const { state, dispatch } = useGameContext();
  const [isFooterActive, setIsFooterActive] = useState(true);
  const [isInfoActive, setIsInfoActive] = useState(false);

  const { inventory, event, combat, test } = content[`${state.chapter}`];

  const caseForInfo = state.gameState === 3 || state.chapter !== 0;
  const disableInfo = !!(
    inventory ||
    event ||
    combat ||
    test ||
    state.chapter === 0
  );

  const handleFooter = () => {
    setIsFooterActive(!isFooterActive);
  };

  const handleInfo = () => {
    // using a separate variable in which to store the state, which guarantees the immediate change of state (normally the button required two presses the first time the function was called)
    const newValue = !isInfoActive;
    setIsInfoActive(newValue);

    if (newValue) {
      dispatch({
        type: "activate_introduction",
      });
    } else {
      dispatch({
        type: "activate_game",
      });
    }

    setIsInfoActive(newValue);
  };

  return (
    <div
      className={`flex flex-col items-center w-full min-h-[80px] fixed bottom-0 bg-gray-400 ${
        isFooterActive ? "bottom-[-60px]" : "bottom-0"
      }`}
    >
      <button
        type="button"
        className="h-[20px] w-full bg-slate-700 hover:bg-slate-800 mb-1"
        onClick={handleFooter}
        aria-label="Show footer"
      />
      <div className="w-2/3 flex gap-5 justify-end items-center">
        <a
          href="https://github.com/IonutInit/Alice-s-Nightmare-in-Wonderland"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={githubLogo}
            style={{ height: "50px" }}
            className="icons"
            alt="Github logo"
          />
        </a>

        {caseForInfo && (
          <button
            className={disableInfo ? "cursor-not-allowed" : ""}
            type="button"
            onClick={handleInfo}
            disabled={disableInfo}
            title={
              disableInfo
                ? "Info unavailable. Try next chapter."
                : "Press for more info about the game."
            }
          >
            <img
              src={info}
              style={{ height: "50px", paddingRight: "50px" }}
              alt="Github logo"
              className="icons"
            />
          </button>
        )}
      </div>
    </div>
  );
}

export default Footer;
