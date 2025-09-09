

// function textStyle() {
//     text.style.backgroundColor = "red";
//     text.style.fontSize = "20px";
//     text.style.color = "white";
// }


function triangleArea(width, height) {
   var output = (width * height) / 2;
   return output;
}

function triangleAreaBtn() {
    var w= width.valueAsNumber;
    var h= height.valueAsNumber;
    var output = triangleArea(w, h);
    alert(output)
}
