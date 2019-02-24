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


