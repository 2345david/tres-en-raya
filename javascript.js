let player1 = "";
let player2 = "";
let diferent = true;
let victoryPlayer1 = 0;
let victoryPlayer2 = 0;
let yesRandom = "";

function confirmButton(){
    player1 = document.getElementById("name").value;
    player2 = document.getElementById("name2").value;
    document.getElementById('namePlayer1').innerHTML = document.getElementById("name").value;
    document.getElementById('namePlayer2').innerHTML = document.getElementById("name2").value;
    console.log(player1, player2);
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
         victoryPlayer1 = victoryPlayer1 + 1;
         document.getElementById('victoryPlayer1').innerHTML = victoryPlayer1;
    }else if (document.getElementById('cells7').innerHTML === "X" && document.getElementById('cells8').innerHTML === "X" && document.getElementById('cells9').innerHTML === "X"){
         window.alert(player1 + " WON");
         victoryPlayer1 = victoryPlayer1 + 1;
         document.getElementById('victoryPlayer1').innerHTML = victoryPlayer1;
    }else if (document.getElementById('cells1').innerHTML === "X" && document.getElementById('cells4').innerHTML === "X" && document.getElementById('cells7').innerHTML === "X"){
         window.alert(player1 + " WON");
         victoryPlayer1 = victoryPlayer1 + 1;
         document.getElementById('victoryPlayer1').innerHTML = victoryPlayer1;
    }else if (document.getElementById('cells2').innerHTML === "X" && document.getElementById('cells5').innerHTML === "X" && document.getElementById('cells8').innerHTML === "X"){
         window.alert(player1 + " WON");
         victoryPlayer1 = victoryPlayer1 + 1;
         document.getElementById('victoryPlayer1').innerHTML = victoryPlayer1;
    }else if (document.getElementById('cells3').innerHTML === "X" && document.getElementById('cells6').innerHTML === "X" && document.getElementById('cells9').innerHTML === "X"){
         window.alert(player1 + " WON");
         victoryPlayer1 = victoryPlayer1 + 1;
         document.getElementById('victoryPlayer1').innerHTML = victoryPlayer1;
    }else if (document.getElementById('cells1').innerHTML === "X" && document.getElementById('cells5').innerHTML === "X" && document.getElementById('cells9').innerHTML === "X"){
         window.alert(player1 + " WON");
         victoryPlayer1 = victoryPlayer1 + 1;
         document.getElementById('victoryPlayer1').innerHTML = victoryPlayer1;
    }else if (document.getElementById('cells3').innerHTML === "X" && document.getElementById('cells5').innerHTML === "X" && document.getElementById('cells7').innerHTML === "X"){
         window.alert(player1 + " WON");
         victoryPlayer1 = victoryPlayer1 + 1;
         document.getElementById('victoryPlayer1').innerHTML = victoryPlayer1;
    }else if (document.getElementById('cells1').innerHTML === "O" && document.getElementById('cells2').innerHTML === "O" && document.getElementById('cells3').innerHTML === "O"){
         window.alert(player2 + " WON");
         victoryPlayer2 = victoryPlayer2 + 1;
         document.getElementById('victoryPlayer2').innerHTML = victoryPlayer2;
    }else if (document.getElementById('cells4').innerHTML === "O" && document.getElementById('cells5').innerHTML === "O" && document.getElementById('cells6').innerHTML === "O"){
         window.alert(player2 + " WON");
         victoryPlayer2 = victoryPlayer2 + 1;
         document.getElementById('victoryPlayer2').innerHTML = victoryPlayer2;
    }else if (document.getElementById('cells7').innerHTML === "O" && document.getElementById('cells8').innerHTML === "O" && document.getElementById('cells9').innerHTML === "O"){
         window.alert(player2 + " WON");
         victoryPlayer2 = victoryPlayer2 + 1;
         document.getElementById('victoryPlayer2').innerHTML = victoryPlayer2;
    }else if (document.getElementById('cells1').innerHTML === "O" && document.getElementById('cells4').innerHTML === "O" && document.getElementById('cells7').innerHTML === "O"){
         window.alert(player2 + " WON");
         victoryPlayer2 = victoryPlayer2 + 1;
         document.getElementById('victoryPlayer2').innerHTML = victoryPlayer2;
    }else if (document.getElementById('cells2').innerHTML === "O" && document.getElementById('cells5').innerHTML === "O" && document.getElementById('cells8').innerHTML === "O"){
         window.alert(player2 + " WON");
         victoryPlayer2 = victoryPlayer2 + 1;
         document.getElementById('victoryPlayer2').innerHTML = victoryPlayer2;
    }else if (document.getElementById('cells3').innerHTML === "O" && document.getElementById('cells6').innerHTML === "O" && document.getElementById('cells9').innerHTML === "O"){
         window.alert(player2 + " WON");
         victoryPlayer2 = victoryPlayer2 + 1;
         document.getElementById('victoryPlayer2').innerHTML = victoryPlayer2;
    }else if (document.getElementById('cells1').innerHTML === "O" && document.getElementById('cells5').innerHTML === "O" && document.getElementById('cells9').innerHTML === "O"){
         window.alert(player2 + " WON");
         victoryPlayer2 = victoryPlayer2 + 1;
         document.getElementById('victoryPlayer2').innerHTML = victoryPlayer2;
    }else if (document.getElementById('cells3').innerHTML === "O" && document.getElementById('cells5').innerHTML === "O" && document.getElementById('cells7').innerHTML === "O"){
         window.alert(player2 + " WON");
         victoryPlayer2 = victoryPlayer2 + 1;
         document.getElementById('victoryPlayer2').innerHTML = victoryPlayer2;
    }else if(document.getElementById('cells1').innerHTML != "" && document.getElementById('cells2').innerHTML != "" && document.getElementById('cells3').innerHTML != "" && document.getElementById('cells4').innerHTML != "" 
    && document.getElementById('cells5').innerHTML != "" && document.getElementById('cells6').innerHTML != "" && document.getElementById('cells7').innerHTML != "" 
    && document.getElementById('cells8').innerHTML != "" && document.getElementById('cells9').innerHTML != "") 
    {
         window.alert("ha habido un empate");
    }
    if (victoryPlayer1 == 3){
          window.alert("Felicidades eres el ganador supremo " + player1)
          document.getElementById('victoryPlayer1').innerHTML = "0";
          document.getElementById('victoryPlayer2').innerHTML = "0";
          victoryPlayer1 = "";
          player1 = "";
          player2 = "";
     }else if (victoryPlayer2 == 3){
          window.alert("Felicidades eres el ganador supremo " + player2)
          document.getElementById('victoryPlayer1').innerHTML = "0";
          document.getElementById('victoryPlayer2').innerHTML = "0";
          victoryPlayer2 = "";
          player1 = "";
          player2 = "";
}
}
}



function deleteAll(){
     for ( let i = 1; i < 10; i++){
     document.getElementById('cells' + i).innerHTML = "";
     }
     diferent = true;
     yesRandom = "";
     
 }

 function deleteScoreBoard(){
     document.getElementById('namePlayer1').innerHTML = "Player1";
     document.getElementById('namePlayer2').innerHTML = "Player2";
     document.getElementById('victoryPlayer1').innerHTML = "0";
     document.getElementById('victoryPlayer2').innerHTML = "0";
 }






function generarRandom() {
     let randomNumber = Math.floor(Math.random() * 9) + 1;
     if(yesRandom === "" ){
     if (randomNumber == 1){
          yesRandom = "q"
          document.getElementById('cells1').innerHTML = "X";
          diferent = false;
     }else if (randomNumber == 2){
          yesRandom = "q"
          document.getElementById('cells2').innerHTML = "X";
          diferent = false;
     }else if (randomNumber == 3){
          yesRandom = "q"
          document.getElementById('cells3').innerHTML = "X";
          diferent = false;
     }else if (randomNumber == 4){
          yesRandom = "q"
          document.getElementById('cells4').innerHTML = "X";
          diferent = false;
     }else if (randomNumber == 5){
          yesRandom = "q"
          document.getElementById('cells5').innerHTML = "X";
          diferent = false;
     }else if (randomNumber == 6){
          yesRandom = "q"
          document.getElementById('cells6').innerHTML = "X";
          diferent = false;
     }else if (randomNumber == 7){
          yesRandom = "q"
          document.getElementById('cells7').innerHTML = "X";
          diferent = false;
     }else if (randomNumber == 8){
          yesRandom = "q"
          document.getElementById('cells8').innerHTML = "X";
          diferent = false;
     }else if (randomNumber == 9){
          yesRandom = "q"
          document.getElementById('cells9').innerHTML = "X";
          diferent = false;
     }
}

}

