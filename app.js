const characters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];

const capitals = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const specials = [
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    ",",
    "|",
    ":",
    ";",
    "<",
    ">",
    ".",
    "?",
    "/",
];

const passwordContainerOne = document.getElementById("password-container-one");
const passwordContainerTwo = document.getElementById("password-container-two");
const specialCharsCheck = document.getElementById("special-characters-check");
const numbersCheck = document.getElementById("numbers-check");
const capitalCharsCheck = document.getElementById("capital-letters-check");
const charLengthEl = document.getElementById("password-length");
const generatePasswordBtn = document.getElementById("generate-password");

const generatePassword = () => {
    let includedArrs = [characters];
    if (specialCharsCheck.checked) {
        includedArrs.push(specials);
    }
    if (capitalCharsCheck.checked) {
        includedArrs.push(capitals);
    }
    if (numbersCheck.checked) {
        includedArrs.push(numbers);
    }
    includedArrs = includedArrs.flat();
    // console.log(String(charLengthEl.value))

    let str = "";
    while (str.length < charLengthEl.value) {
        str += includedArrs[Math.floor(Math.random() * includedArrs.length)];
    }
    return str;
};

generatePasswordBtn.addEventListener("click", () => {
    passwordContainerOne.textContent = generatePassword();
    passwordContainerTwo.textContent = generatePassword();
});
