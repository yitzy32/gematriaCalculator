alephBeisValues = {
  '&#x5D0;': 1,
  '&#x5D1;': 2,
  '&#x5D2;': 3,
  '&#x5D3;': 4,
  '&#x5D4;': 5,
  '&#x5D5;': 6,
  '&#x5D6;': 7,
  '&#x5D7;': 8,
  '&#x5D8;': 9,
  '&#x5D9;': 10,
  '&#x5DA;': 20, // ך
  '&#x5DB;': 20,
  '&#x5DC;': 30,
  '&#x5DD;': 40, // ם
  '&#x5DE;': 40,
  '&#x5DF;': 50, // ן
  '&#x5E0;': 50,
  '&#x5E1;': 60,
  '&#x5E2;': 70,
  '&#x5E3;': 80, // ף
  '&#x5E4;': 80,
  '&#x5E5;': 90, // ץ
  '&#x5E6;': 90,
  '&#x5E7;': 100,
  '&#x5E8;': 200,
  '&#x5E9;': 300,
  '&#x5EA;': 400,
}
console.log(alephBeisValues)

let string = "וַֽיְהִי־עֶ֥רֶב וַֽיְהִי־בֹ֖קֶר י֥וֹם שְׁלִישִֽׁי׃";

let calculateGematria = function(input, encodedVals) {

  input = trimOffWhiteSpace(input)
  input = getRidOfExtraUnicodeChars(input)

  gematria = 0

  for (let i = 0; i < input.length; i++) {
    encodedLetter = he.encode(input[i]);
    gematria += encodedVals[encodedLetter]
  }
  return gematria;
}

function trimOffWhiteSpace(string) {
  return string.replace(/\s+/g, '');
}

function getRidOfExtraUnicodeChars(string) {
  let encodedArray = he.encode(string).split(";");
  let trimmedString = "";
  encodedArray.forEach(unicode => {
    unicode += ";";
    if (alephBeisValues[unicode]) {
      trimmedString += he.decode(unicode);
    }
  });
  return trimmedString;
}

let output = calculateGematria(string, alephBeisValues);
console.log(`gematria of ${string} is: ${output}`);