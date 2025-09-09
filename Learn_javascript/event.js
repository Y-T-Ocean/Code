function textStyle() {
    text.style.backgroundColor = "pink";
    text.style.fontSize = "2em";
    text.style.color = "Blue";
}

function textStyle2() {
    text.style.padding = "15px 0";
    text.style.border = "10px solid red";
}

function eraseTextStyle() {
    text.style.backgroundColor = "";
    text.style.fontSize = "";
    text.style.color = "";
}
function a() {
    textStyle();
    textStyle2();
}
text.addEventListener("mouseover", a );
text.addEventListener("mouseout", function () {
eraseTextStyle() ; 
    text.removeEventListener("mouseover", a);

});