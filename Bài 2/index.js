document.getElementById("hello").onclick = function () {
    let select = document.getElementById("chose").value;
    

    if(select == "papa") {
        document.getElementById("result").value = "Xin Chào Cha";
    }
    if(select == "mama") {
        document.getElementById("result").value = "Xin Chào Mẹ";
    }
    if(select == "brother" ) {
        document.getElementById("result").value = "Xin Chào Anh Trai"
    }
    if(select == "sister") {
        document.getElementById("result").value = "Xin Chào Em Gái"
    }
};