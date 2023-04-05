import { useEffect, useState } from "react";

import importedContent from "../data/content.json";

import { spellArticle } from "../lib/textFunctions";
import rollDie from "../lib/rollDie";

import { Props, Content } from "../../types";

const content: Content = importedContent;

function Test({ state, dispatch }: Props) {
  const [testTake, setTestTaken] = useState(false);
  const { chapter } = state;
  const testAttribute = content[chapter].test;
  const testCase = state.alice[`${testAttribute}`];

  function sumDie(die: number[]) {
    return die.reduce((acc, cur) => acc + cur, 0);
  }

  function resolveTest(attribute: string) {
    let result: [boolean, number[]] | [] = [];
    if (attribute === "agility") {
      const [...die] = rollDie(2);
      const sum = sumDie(die);
      result = [sum <= testCase, [...die]];
    }
    console.log(result);
    return result;
  }

  const handleTest = () => {
    const test = resolveTest(testAttribute ?? "");
  };

  useEffect(() => {
    const candidateChapters = content[chapter].options;
  }, [chapter]);

  return (
    <div>
      <button type="button" onClick={() => handleTest()}>
        Take {spellArticle(testAttribute ?? "")} test
      </button>
    </div>
  );
}

export default Test;
