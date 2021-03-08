function disemvowel(str) {
  const regexpattern = /[^aeiou]/gi;
  return str.match(regexpattern).join("");
}

// best practice
function disemvowelBest(str) {
  return str.replace(/[aeiou]/gi, "");
}

const string = "This website is for losers LOL!";
console.log(disemvowel(string));
