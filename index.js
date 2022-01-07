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

atBashValues = {
  '&#x5D0;': 400,
  '&#x5D1;': 300,
  '&#x5D2;': 200,
  '&#x5D3;': 100,
  '&#x5D4;': 90,
  '&#x5D5;': 80,
  '&#x5D6;': 70,
  '&#x5D7;': 60,
  '&#x5D8;': 50,
  '&#x5D9;': 40,
  '&#x5DA;': 30, // ך
  '&#x5DB;': 30,
  '&#x5DC;': 20,
  '&#x5DD;': 10, // ם
  '&#x5DE;': 10,
  '&#x5DF;': 9, // ן
  '&#x5E0;': 9,
  '&#x5E1;': 8,
  '&#x5E2;': 7,
  '&#x5E3;': 6, // ף
  '&#x5E4;': 6,
  '&#x5E5;': 5, // ץ
  '&#x5E6;': 5,
  '&#x5E7;': 4,
  '&#x5E8;': 3,
  '&#x5E9;': 2,
  '&#x5EA;': 1,
}
console.log(atBashValues)

let string = "אֶל־בֵּ֣ית ׀ מִשְׁתֵּ֣ה הַיַּ֗יִן";

function gematria(input, encodedVals) {
  input = filterHebrew(input)
  input = trimWhiteSpace(input)
  return calculate(input, encodedVals)
}

function atBashGematria(input, atBashValues) {
  input = filterHebrew(input)
  input = trimWhiteSpace(input)
  return calculate(input, atBashValues)
}

function rasheiTeivosGematria(input, encodedVals) {
  const details = {rashei: true}
  return addOneLetterCalculation(input, details, encodedVals)
}

function sofeiTeivosGematria(input, encodedVals) {
  const details = {sofei: true}
  return addOneLetterCalculation(input, details, encodedVals)
}

function trimWhiteSpace(str) {
  return str.replace(/\s+/g, '');
}

function filterHebrew(str) {
  var re = /[\u05D0-\u05EA\s]/g;
  return ((str || '').match(re) || []).join('');
}

function calculate(str, object) {
  let gematria = 0;

  for (let i = 0; i < str.length; i++) {
    encodedLetter = he.encode(str[i]);
    gematria += object[encodedLetter]
  }
  return gematria;
}

function addOneLetterCalculation(str, details, encodedVals) {
  let gematria = 0;
  let charIndex;
    str.split(/[\s\-־|׀:׃]+/).forEach(word => {
      if (details.rashei) {
        charIndex = 0;
      } else if (details.sofei) {
        let letter = word.slice(-1);
        charIndex = word.lastIndexOf(letter);
      }
      encodedLetter = he.encode(word[charIndex]);
      gematria += encodedVals[encodedLetter];
    });
    return gematria;
}

let output = atBashGematria(string, atBashValues);
console.log(`AtBash gematria of ${string} is: ${output}`);

output = gematria(string, alephBeisValues);
console.log(`gematria of ${string} is: ${output}`);

output = rasheiTeivosGematria(string, alephBeisValues)
console.log(`Gematria of Roshei Teivos for: ${string} is: ${output}`);

output = sofeiTeivosGematria(string, alephBeisValues)
console.log(`Gematria of Sofei Teivos for: ${string} is: ${output}`);
