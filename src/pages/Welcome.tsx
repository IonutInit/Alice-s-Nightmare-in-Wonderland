// eslint-disable-next-line import/no-extraneous-dependencies
import parse from "html-react-parser";
import useGameContext from "../context/useGameContext";

import cover from "../assets/cover.jpg";
import { welcome, welcome_disclaimer } from "../data/extraContent.json";

import OptionsButton from "../components/OptionsButton";
import Underline from "../components/Underline";

function Welcome() {
  const { dispatch } = useGameContext();

  return (
    <div>
      <div className=" flex flex-col items-center pb-5">
        <h1 className="text-4xl pb-5">ALICE&apos;S NIGHTMARE IN WONDERLAND</h1>
        <Underline />
        <img src={cover} alt="book cover" />
        <p className="p-5 text-sm italic">{parse(welcome_disclaimer)}</p>
      </div>

      <div>{parse(welcome)}</div>

      <div className="flex flex-col items-center pt-5">
        <OptionsButton
          onClick={() => {
            dispatch({
              type: "activate_introduction",
            });
          }}
        >
          NEXT
        </OptionsButton>
      </div>
    </div>
  );
}

export default Welcome;
