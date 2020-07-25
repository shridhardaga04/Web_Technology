var ipbox = document.getElementById("clc-ip");

//Clear input-box
function clr(){
    ipbox.value = "";
}

//Display on input-box
function dis(t){
    ipbox.value += t;
}

//Evaluation
function solve(){
    var temp = ipbox.value;
    var ans = eval(temp);
    ipbox.value = ans;
}

//Getting answer by enter and equal key by keypress
document.addEventListener("keydown", function(e){
    if(event.keyCode === 187 || event.keyCode === 13) solve();
})