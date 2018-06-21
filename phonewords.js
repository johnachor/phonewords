const getPossibleLetters = (numberChar) => {
  const keypadLayout = {
    "2": ["A", "B", "C"],
    "3": ["D", "E", "F"],
    "4": ["G", "H", "I"],
    "5": ["J", "K", "L"],
    "6": ["M", "N", "O"],
    "7": ["P", "Q", "R", "S"],
    "8": ["T", "U", "V"],
    "9": ["W", "X", "Y", "Z"],
  };
  return keypadLayout[numberChar];
};

// expects an integer (or string representing an integer) containing no 1s or 0s
const getWordMap = (intInput) => {
  if (typeof intInput === "number") intInput = intInput.toString();
  return intInput.split('').map(getPossibleLetters);
};

const getPermutations = (wordMap, prefix) => {
  prefix = prefix || '';
  if (!wordMap.length) return prefix;

  return wordMap[0].reduce((result, value) => {
    return result.concat(getPermutations(wordMap.slice(1), prefix + value));
  }, []);
};

const spellAllWords = (numberInput) => {
  return getPermutations(getWordMap(numberInput));
};
