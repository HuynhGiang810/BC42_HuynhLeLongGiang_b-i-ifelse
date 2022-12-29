document.getElementById("check").onclick = function (){
let x = +document.getElementById("noOne").value;
let y = +document.getElementById("noTwo").value;
let z = +document.getElementById("noThree").value;
let typeOfTriangle;
if(x + y > z && x + z > y && z + y > x){
    if(x*x == y*y + z*z || y*y == x*x + z*z || z+z == x*x + y*y) {
typeOfTriangle = "Tam Giác Vuông";
    }
    else if(x == y && y == z && x == z){
        typeOfTriangle = "Tam Giác Đều";
    }
    else if(x == y || y == z){
        typeOfTriangle = "Tam Giác Cân";
    }
    else {
        typeOfTriangle = "Tam Giác Khác";
    }
    }
    let outPut = typeOfTriangle;
    document.getElementById("output").innerHTML = outPut;

}



