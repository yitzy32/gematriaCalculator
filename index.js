regularEncodedValues = {
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
console.log(regularEncodedValues)

let string = "שירה";

console.log(string)
let calculateGematria = function(input, encodedVals) {
  gematria = 0

  for (let i = 0; i < input.length; i++) {
    encodedLetter = he.encode(input[i]);
    gematria += encodedVals[encodedLetter]
  }
  return gematria;
}
let output = calculateGematria(string, regularEncodedValues);
console.log(`gematria of ${string} is: ${output}`);

/*

letterValues = {
  א : 1,
  ב : 2,
  ג : 3,
  ד : 4,
  ה : 5,
  ו : 6,
  ז : 7,
  ח : 8,
  ט : 9,
  י : 10,
  כ : 20,
  ל : 30,
  מ : 40,
  ם : 40,
  נ : 50,
  ן : 50,
  ס : 60,
  ע : 70,
  פ : 80,
  ף : 80,
  צ : 90,
  ץ : 90,
  ק : 100,
  ר : 200,
  ש : 300,
  ת : 400,

}
console.log(letterValues);
console.log(letterValues["א"]);
*/