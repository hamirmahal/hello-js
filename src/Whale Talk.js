let input = "All sea creatures are beautiful.";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

for (let inputLetter = 0; inputLetter < input.length; inputLetter++) {
  //console.log(input[inputLetter])
	for (let vowel = 0; vowel < vowels.length; vowel++) {
    if (input[inputLetter] === vowels[vowel]) {
      if (input[inputLetter] === "e") resultArray.push("ee");
    } else if (input[inputLetter] === "u") {
      resultArray.push("uu");
    } 
  }
}

console.log(resultArray.join("").toUpperCase());