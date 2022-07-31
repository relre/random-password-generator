let pwCharacters = [];
const alphabetCha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numberCha = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbolCha = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
let numberChecked = false;
let symbolChecked = false;

const pwRange = document.getElementById("pwRange");
const output = document.getElementById("rangeOutput");
const copyText = document.getElementById("pwInput");
output.innerHTML = pwRange.value;

pwRange.oninput = function() {
    output.innerHTML = this.value;
    generatePassword()
    if(this.value < 23) {
        copyText.style.fontSize = "25px";
    }
    else if(this.value < 31) {
        copyText.style.fontSize = "large";
    }
    else if(this.value < 35) {
        copyText.style.fontSize = "medium";
    }
    else if(this.value < 46) {
        copyText.style.fontSize = "small";
    }
    else if(this.value < 51) {
        copyText.style.fontSize = "x-small";
    }
    else {
        copyText.style.fontSize = "25px";
    }
}

function copyFu() {
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
}

function generatePassword() {
    copyText.value = "";
    pwCharacters = [];
    pwCharacters.push(...alphabetCha);

    if(numbers.checked) {
        pwCharacters.push(...numberCha);
    }
    else {
        pwCharacters.pop(...numberCha);

    }
    if(symbols.checked) {
        pwCharacters.push(...symbolCha);
    }
    else {
        pwCharacters.pop(...symbolCha);
    }

    for(let i = 0; i < pwRange.value; i++) {
        copyText.value += pwCharacters[Math.floor(Math.random() * pwCharacters.length)];
    }
}

generatePassword();