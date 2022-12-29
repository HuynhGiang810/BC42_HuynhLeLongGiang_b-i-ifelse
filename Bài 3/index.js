document.getElementById("count").onclick = function (){
let C = 0;
let L = 0;
let noOne = document.getElementById("numberOne").value;
let noTwo = document.getElementById("numberTwo").value;
let noThree = document.getElementById("numberThree").value;

let resultOne = noOne % 2;
let resultTwo = noTwo % 2;
let resultThree = noThree % 2;

if(resultOne == 0) {
    C += 1;
}else{
    L += 1;
}
if(resultTwo == 0) {
    C += 1;
}else{
    L += 1;
}
if(resultThree == 0) {
    C += 1;
}else{
    L += 1;
}
let ketqua = "Số Chẳn Là:" + C + "Số Lẻ Là:" + L;
// document.getElementById("output").style.display = block;
document.getElementById("output").innerHTML = ketqua;
}
