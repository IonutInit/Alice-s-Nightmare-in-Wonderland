// eslint-disable-next-line import/no-extraneous-dependencies
import parse from "html-react-parser";
import useGameContext from "../context/useGameContext";

import OptionsButton from "../components/OptionsButton";
import Accordion from "../components/Accordion";
import Underline from "../components/Underline";

import extraContent from "../data/extraContent.json";

function Instructions() {
  const content = Array.from({ length: 7 }, (_, i) => (
    <Accordion
      key={i + 1}
      title={extraContent.intro[i + 1].title}
      quote={extraContent.intro[i + 1].quote}
      content={parse(extraContent.intro[i + 1].content)}
    />
  ));
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{content}</>;
}

function Introduction() {
  const { dispatch } = useGameContext();
  return (
    <div>
      <h1 className="text-4xl text-center py-5">Welcome to Wonderland</h1>
      <Underline />

      <h3 className="text-2xl text-center pb-3">
        {parse(extraContent.intro[0].quote)}
      </h3>
      <div>{parse(extraContent.intro[0].content)}</div>

      <br />
      <Instructions />
      <br />

      <div className="flex flex-col items-center">
        <OptionsButton
          onClick={() => {
            dispatch({
              type: "activate_attributes",
            });
          }}
        >
          NEXT
        </OptionsButton>
      </div>
    </div>
  );
}

export default Introduction;
