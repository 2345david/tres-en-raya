let player1 = "";
let player2 = "";
let diferent = true;
let victoryPlayer1 = 0;
let victoryPlayer2 = 0;

function confirmButton(){
    player1 = document.getElementById("name").value;
    player2 = document.getElementById("name2").value;
    return player1, player2;
}

function onButtonClicked(cells){
    const MY_SCREEN = document.getElementById(cells);
    if (document.getElementById(cells).innerHTML === ""){
    if (diferent === true){
        MY_SCREEN.innerHTML = "X";
        diferent = false;
    }else{
        MY_SCREEN.innerHTML = "O";
        diferent = true;
    }

    if (document.getElementById('cells1').innerHTML === "X" && document.getElementById('cells2').innerHTML === "X" && document.getElementById('cells3').innerHTML === "X"){
        window.alert(player1 + " WON");
        victoryPlayer1 = victoryPlayer1 + 1;
        document.getElementById('victoryPlayer1').innerHTML = victoryPlayer1;
    }else if (document.getElementById('cells4').innerHTML === "X" && document.getElementById('cells5').innerHTML === "X" && document.getElementById('cells6').innerHTML === "X"){
         window.alert(player1 + " WON");
    }else if (document.getElementById('cells7').innerHTML === "X" && document.getElementById('cells8').innerHTML === "X" && document.getElementById('cells9').innerHTML === "X"){
         window.alert(player1 + " WON");
    }else if (document.getElementById('cells1').innerHTML === "X" && document.getElementById('cells4').innerHTML === "X" && document.getElementById('cells7').innerHTML === "X"){
         window.alert(player1 + " WON");
    }else if (document.getElementById('cells2').innerHTML === "X" && document.getElementById('cells5').innerHTML === "X" && document.getElementById('cells8').innerHTML === "X"){
         window.alert(player1 + " WON");
    }else if (document.getElementById('cells3').innerHTML === "X" && document.getElementById('cells6').innerHTML === "X" && document.getElementById('cells9').innerHTML === "X"){
         window.alert(player1 + " WON");
    }else if (document.getElementById('cells1').innerHTML === "X" && document.getElementById('cells5').innerHTML === "X" && document.getElementById('cells9').innerHTML === "X"){
         window.alert(player1 + " WON");
    }else if (document.getElementById('cells3').innerHTML === "X" && document.getElementById('cells5').innerHTML === "X" && document.getElementById('cells7').innerHTML === "X"){
         window.alert(player1 + " WON");
    }else if (document.getElementById('cells1').innerHTML === "O" && document.getElementById('cells2').innerHTML === "O" && document.getElementById('cells3').innerHTML === "O"){
         window.alert(player2 + " WON");
    }else if (document.getElementById('cells4').innerHTML === "O" && document.getElementById('cells5').innerHTML === "O" && document.getElementById('cells6').innerHTML === "O"){
         window.alert(player2 + " WON");
    }else if (document.getElementById('cells7').innerHTML === "O" && document.getElementById('cells8').innerHTML === "O" && document.getElementById('cells9').innerHTML === "O"){
         window.alert(player2 + " WON");
    }else if (document.getElementById('cells1').innerHTML === "O" && document.getElementById('cells4').innerHTML === "O" && document.getElementById('cells7').innerHTML === "O"){
         window.alert(player2 + " WON");
    }else if (document.getElementById('cells2').innerHTML === "O" && document.getElementById('cells5').innerHTML === "O" && document.getElementById('cells8').innerHTML === "O"){
         window.alert(player2 + " WON");
    }else if (document.getElementById('cells3').innerHTML === "O" && document.getElementById('cells6').innerHTML === "O" && document.getElementById('cells9').innerHTML === "O"){
         window.alert(player2 + " WON");
    }else if (document.getElementById('cells1').innerHTML === "O" && document.getElementById('cells5').innerHTML === "O" && document.getElementById('cells9').innerHTML === "O"){
         window.alert(player2 + " WON");
    }else if (document.getElementById('cells3').innerHTML === "O" && document.getElementById('cells5').innerHTML === "O" && document.getElementById('cells7').innerHTML === "O"){
         window.alert(player2 + " WON");
    }else if(document.getElementById('cells1').innerHTML != "" && document.getElementById('cells2').innerHTML != "" && document.getElementById('cells3').innerHTML != "" && document.getElementById('cells4').innerHTML != "" 
    && document.getElementById('cells5').innerHTML != "" && document.getElementById('cells6').innerHTML != "" && document.getElementById('cells7').innerHTML != "" 
    && document.getElementById('cells8').innerHTML != "" && document.getElementById('cells9').innerHTML != "") 
    {
         window.alert("ha habido un empate");
    }

}
}






/*function contador( eleccionJugador, eleccionOponente){
    if (eleccionJugador == 1 && eleccionOponente ==  0) {
        victory1 = victory1 + 1;
        document.getElementById('victoryPlayer1').innerHTML
    }else if (eleccionJugador == 0 && eleccionOponente == 1){
        victory2 = victory2 + 1;
        document.getElementById('victoryPlayer2').innerHTML
    }else{
        window.alert("al ser empate nadie se lleba puntos");
    }
}*/


function deleteAll(){
    for ( let i = 1; i < 10; i++){
    document.getElementById('cells' + i).innerHTML = "";
    }
    diferent = true;
    player1 = "";
    player2 = "";
}


