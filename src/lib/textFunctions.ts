export function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function spellArticle(word: string) {
  return /^[aeiou]/i.test(word) ? `an ${word}` : `a ${word}`;
}
