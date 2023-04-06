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

export function rollResults(results: number[]): string {
  const len = results.length;
  if (len === 1) {
    return `You rolled a ${results[0]}`;
  }
  if (len === 2) {
    return `You rolled a ${results[0]} and a ${results[1]}`;
  }
  let rollStr = "You rolled ";
  for (let i = 0; i < len; i += 1) {
    if (i === len - 1) {
      rollStr += "and ";
    }
    rollStr += `a ${results[i]}`;
    if (i !== len - 1) {
      rollStr += ", ";
    }
  }
  return `${rollStr}.`;
}
