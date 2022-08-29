// convert number to word
// PIAIC77870

let units : string[] = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
let tens : string[] = [
  "",
  "ten",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

let numString : string = "7860000293";

let number : number
number = parseInt(numString);

numString = number.toString();

let numArr : string[]
numArr = numString.split("");

let result : string = "chose a number between 0-9,999,999,999";

let resultArr : string[]

let unitF = (e) => units[e];

let tensF = (e) => tens[e[0]] + " " + units[e[1]];

let hundredF = (e) => {
  let x = e.shift();
  return units[x] + (x == 0 ? " " : " hundred ") + tensF(e);
};

let thousandF = (e) => {
  let x = e.shift();
  return unitF(x) + (x == 0 ? " " : " thousand ") + hundredF(e);
};

let tenThousandF = (e) => {
  let x = e.shift();
  let y = e.shift();
  return tensF([x, y]) + (x == 0 && y == 0 ? " " : " thousand ") + hundredF(e);
};

let hunThousandF = (e) => {
  let x = e.shift();
  let y = e.shift();
  let z = e.shift();
  return (
    hundredF([x, y, z]) +
    (x == 0 && y == 0 && z == 0 ? " " : " thousand ") +
    hundredF(e)
  );
};

let milF = (e) => {
  let x = e.shift();
  return unitF(x) + (x == 0 ? " " : " million ") + hunThousandF(e);
};

let tMilF = (e) => {
  let x = e.shift();
  let y = e.shift();
  return (
    tensF([x, y]) + (x == 0 && y == 0 ? " " : " million ") + hunThousandF(e)
  );
};

let hMilF = (e) => {
  let x = e.shift();
  let y = e.shift();
  let z = e.shift();
  return (
    hundredF([x, y, z]) +
    (x == 0 && y == 0 && z == 0 ? " " : " million ") +
    hunThousandF(e)
  );
};

let bilF = (e) => {
  let x = e.shift();
  return unitF(x) + (x == 0 ? " " : " billion ") + hMilF(e);
};

if (numArr.length < 2) {
  result = unitF(numArr);
} else if (numArr.length < 3) {
  result = tensF(numArr);
} else if (numArr.length < 4) {
  result = hundredF(numArr);
} else if (numArr.length < 5) {
  result = thousandF(numArr);
} else if (numArr.length < 6) {
  result = tenThousandF(numArr);
} else if (numArr.length < 7) {
  result = hunThousandF(numArr);
} else if (numArr.length < 8) {
  result = milF(numArr);
} else if (numArr.length < 9) {
  result = tMilF(numArr);
} else if (numArr.length < 10) {
  result = hMilF(numArr);
} else if (numArr.length < 11) {
  result = bilF(numArr);
}
resultArr = result.split(" ");
resultArr = resultArr.filter((e) => e !== "");
result = resultArr.join(" ");
console.log(result);

// input : 7860000293
//  output : seven billion eight hundred sixty million two hundred ninety three