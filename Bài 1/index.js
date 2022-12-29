document.getElementById("sapxep").onclick = function () {
    

let numberOne = +document.getElementById("numberOne").value;
let numberTwo = +document.getElementById("numberTwo").value;
let numberThree = +document.getElementById("numberThree").value;
let max = 0;
if(numberOne > numberTwo) {
max = numberOne;
numberOne = numberTwo;
numberTwo = max;
}
if(numberOne > numberThree) {
    max = numberOne;
    numberOne = numberThree;
    numberThree = max;
}
if(numberTwo > numberThree) {
    max = numberTwo;
    numberTwo = numberThree;
    numberThree = max;
}

let result = numberOne + "," + numberTwo + "," + numberThree;
document.getElementById("result").value = result;

};
