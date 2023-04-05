function rollDie(n: number) {
  const rolled = [];
  const roll = () => Math.floor(Math.random() * 6) + 1;
  for (let i = 0; i < n; i += 1) {
    rolled.push(roll());
  }
  return rolled;
}

export default rollDie;
