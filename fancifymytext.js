function biggerText() {
    document.getElementById("text_area").style.fontSize = "24pt";
}

function setTextWeight(enable = true) {
    //alert("Hello, world!");
    if(enable)
        document.getElementById("text_area").style.fontWeight = "bold";
    else
        document.getElementById("text_area").style.fontWeight = "normal";
}

var colorEnabled = false;
function toggleColor() {
    colorEnabled = !colorEnabled;
    if(colorEnabled) {
        document.getElementById("text_area").style.color = "blue";
        document.getElementById("text_area").style.textDecoration = "underline";
    }
    else {
        document.getElementById("text_area").style.color = "black";
        document.getElementById("text_area").style.textDecoration = "none";
    }
}

function moo() {
    document.getElementById("text_area").style.textTransform = "uppercase";
    var text = document.getElementById('text_area').value;
    var parts = text.split(".");
    var result = parts.join("-Moo.");
    document.getElementById("text_area").value = result;
}