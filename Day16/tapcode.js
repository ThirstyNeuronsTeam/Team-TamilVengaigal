//

const tapCode = {
  A: ". .",
  B: ". ..",
  C: ". ...",
  D: ". ....",
  E: ". .....",
  F: ".. .",
  G: ".. ..",
  H: ".. ...",
  I: ".. ....",
  J: ".. .....",
  L: "... .",
  M: "... ..",
  N: "... ...",
  O: "... ....",
  P: "... .....",
  Q: ".... .",
  R: ".... ..",
  S: ".... ...",
  T: ".... ....",
  U: ".... .....",
  V: "..... .",
  W: "..... ..",
  X: "..... ...",
  Y: "..... ....",
  Z: "..... .....",
  K: ". ...",
};
const alphabets = {
  ". .": "A",
  ". ..": "B",
  ". ...": "C",
  ". ....": "D",
  ". .....": "E",
  ".. .": "F",
  ".. ..": "G",
  ".. ...": "H",
  ".. ....": "I",
  ".. .....": "J",
  "... .": "L",
  "... ..": "M",
  "... ...": "N",
  "... ....": "O",
  "... .....": "P",
  ".... .": "Q",
  ".... ..": "R",
  ".... ...": "S",
  ".... ....": "T",
  ".... .....": "U",
  "..... .": "V",
  "..... ..": "W",
  "..... ...": "X",
  "..... ....": "Y",
  "..... .....": "Z",
  ". ...": "K",
};

const tapCodeSample = ". .. ... .. .... .";

const tapCodeSplit = tapCodeSample.split(" ");

const len = tapCodeSplit.length;

for (let index = 0; index < len / 2; index++) {
    //index = 0 (0,2)
    //index = 1 (2,4)
    //index = 2 (4.6)

  const pairOfDots = tapCodeSplit.slice(index*2, index*2+2).join(" ");
  const character = alphabets[pairOfDots];
}

//loop length -  12 - 6 . 6 -3
//first letter
/* const pairOfDotsFirst = tapCodeSplit.slice(0,2).join(" ")
const characterFirst =alphabets[pairOfDotsFirst]
//second letter

const pairOfDotScond=tapCodeSplit.slice(2,4).join(" ")
const characterScond= alphabets[pairOfDotScond]

const pairOfDotThird=tapCodeSplit.slice(4,6).join(" ")
const characterThird= alphabets[pairOfDotThird]  */
