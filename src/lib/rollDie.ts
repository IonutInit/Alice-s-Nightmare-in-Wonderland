export function rollDie(n: number) {
  const rolled = [];
  const roll = () => Math.floor(Math.random() * 6) + 1;
  for (let i = 0; i < n; i += 1) {
    rolled.push(roll());
  }
  return rolled;
}

export function sumDie(die: number[]) {
  return die.reduce((acc, cur) => acc + cur, 0);
}

export function rollResults(dice: number[]): string {
  const len = dice.length;
  if (len === 1) {
    return `You rolled a ${dice[0]}.`;
  }
  if (len === 2) {
    return `You rolled a ${dice[0]} and a ${dice[1]}.`;
  }
  let resultString = "You rolled ";
  for (let i = 0; i < len; i += 1) {
    if (i === len - 1) {
      resultString += "and ";
    }
    resultString += `a ${dice[i]}`;
    if (i !== len - 1) {
      resultString += ", ";
    }
  }
  return `${resultString}.`;
}
