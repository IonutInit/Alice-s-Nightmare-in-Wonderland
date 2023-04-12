export function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function spellArticle(word: string) {
  return /^[aeiou]/i.test(word) ? `an ${word}` : `a ${word}`;
}

export function describeSpecialAbility(word: string) {
  if (word === "Curioser") {
    return "Curioser and Curioser";
  }
  if (word === "ThePen") {
    return "The Pen is Mightier";
  }
  return word;
}
