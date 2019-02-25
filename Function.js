$(document).ready(function(){
    $("#myBtn").mouseleave(function () {
           $("#test").hide();
    });
});
function DollarConverter() {
    localStorage.setItem("num", parseFloat(document.getElementById("inputDollars").value));
    console.log(localStorage.getItem("num"));
if(localStorage.getItem ("num")<0){
alert("The Dollar cannot be Negitive")
throw('Value cannot be less than zero');
}else{
localStorage.setItem("res",(localStorage.getItem("num")*70));
console.log(localStorage.getItem("res"));
document.getElementById("output").value=localStorage.getItem("res");
}
}

function mouse() {
    $("#test").show();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
           if (this.readyState == 4 && this.status == 200) {
                  document.getElementById("test").innerHTML =
                         this.responseText;
           }
    };
    xhttp.open("GET", 'https://thesimpsonsquoteapi.glitch.me/quotes?count=4', true);
    xhttp.send();
}