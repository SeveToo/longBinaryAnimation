const BinaryNumbers = document.querySelector(".BinaryNumbers");

const OneThousandNumbers = [];
const numbersInDec = []; //512, 256...
const HowManyNumbersToGenerate = 1023; //1023 is Max

const BITS_NUMBER = 10;
const SPEED = 10;

const numberRepresentationInDec = function (to) {
  let nr = 1;
  for (let i = 0; i < to; i++) {
    numbersInDec.unshift(nr);
    nr *= 2;
  }
};

numberRepresentationInDec(10);

const autoScroll = function () {
  BinaryNumbers.scrollTop += 3;
};

setInterval(autoScroll, SPEED * 2.3);

const convertDecToBinary = function (nr) {
  let binarySolutionTab = [];
  let binSolutionString = "";
  let i = 0;
  while (i < 10) {
    binarySolutionTab.unshift(nr % 2);
    nr = (nr - (nr % 2)) / 2;
    i++;
  }
  for (let i = 0; i < 10; i++) {
    binSolutionString += binarySolutionTab[i];
  }
  return binarySolutionTab;
  // return binSolutionString;
};

let liczbaNr = 0;
const start = function () {
  liczbaNr == HowManyNumbersToGenerate && clearInterval(show);
  OneThousandNumbers[liczbaNr] = convertDecToBinary(liczbaNr);
  createBinaryRow(convertDecToBinary(liczbaNr), liczbaNr);
  liczbaNr++;
};
const show = setInterval(start, SPEED * 50);

// start();

// for (let i = 0; i <= 1023; i++) {
//   OneThousandNumbers[i] = convertDecToBinary(i);
//   // console.log(i + ". " + convertDecToBinary(i));
//   createBinaryRow(convertDecToBinary(i), i);
// }

const createDot = function (tab, nr) {
  const dot = document.createElement("div");
  dot.classList.add("binDot");
  dot.textContent = numbersInDec[nr];
  if (tab[nr]) dot.classList.add("active");
  return dot;
};

const makeLabelInDec = function (nr) {
  const labelInDec = document.createElement("div");
  labelInDec.classList.add("nrInDec");
  labelInDec.textContent = nr;
  return labelInDec;
};

const createBinaryRow = function (tab, nr) {
  const row = document.createElement("div");
  row.classList.add("binRow");
  row.classList.add("newBinRow");
  setInterval(() => {
    row.classList.remove("newBinRow");
  }, 400);

  for (let i = 0; i < BITS_NUMBER; i++) {
    const dot = createDot(tab,i)
    row.append(dot);
  }

  row.append(makeLabelInDec(nr));
  BinaryNumbers.append(row);
};
// createBinaryRow([0, 0, 0, 0, 0, 0, 1, 0, 1, 0], 10);
