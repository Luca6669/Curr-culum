function canviaNom(){
 let nombre= document.getElementById("nom").value;
 document.getElementById("nom").innerHTML= nombre
}
function canviaColor(){
 let color= document.getElementById("color").value;
document.body.style.color= color;
}
function canviaFons(){
let fons= document.getElementById("fons").value;
document.body.style.backgroundColor= fons;
}
function canviaFoto(){
let img= document.getElementById("img").value;
document.getElementById("img").src= img
}