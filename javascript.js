let player1 = "";
let player2 = "";
let X = true;
let O = false;

function confirmButton(){
    player1 = document.getElementById("name").value;
    player2 = document.getElementById("name2").value;
    return player1, player2;
}

function onButtonClicker(button){
    button = document.getElementById("button");
}
