// getAlphabetType : "consonant" or "vowel"
// splitNameIntoConsonantAndVowels
// getLetterCount

//Rule1 Surnmae
//collectThreeConsonants
//Rule 2 Surname
//addVowelsIfLessThanThreeConsonants
// Rule 3 Surname
//addXIfLessThanThreeCharacters

function getAlphabetType(letter) {
  letter = letter.toLowerCase();

  const possibleLetters = "abcdefghijklmnopqrstuvwxyz";

  if (!possibleLetters.includes(letter)) {
    throw new Error("Invalid Input Please pass alphabets only");
  }

  const vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(letter)) {
    return "vowel";
  }
  return "consonant";
}

const ouput = getAlphabetType("A");
console.log(ouput);

function splitNameIntoConsonantAndVowels(name) {

}

console.log(splitNameIntoConsonantAndVowels("Senthil"));


function fiscalCode(data){

  const fromName = getCharactersFromName(data.name)
  const fromSurName = getCharactersFromSurName(data.surname)
  const fromGender
  const fromDoB

  return

}

console.log(fiscalCode({name:"sowmiya",surname:"pandian",gender:"F",dob:"04/11/2001"}))


