
$( document ).ready(function() {
    var winningNumber
    random_item()


// name the vars of the game
    var userNumber = 0
    var Button1 = Math.floor(Math.random() * 12);
    var Button2 = Math.floor(Math.random() * 12);
    var Button3 = Math.floor(Math.random() * 12);
    var Button4 = Math.floor(Math.random() * 12);
    console.log(Button1)
    console.log(Button2)
    console.log(Button3)
    console.log(Button4)
    var wins = 0
    var losses = 0
    
//make on click events for the buttons
$('#Button-1').on("click", function(){
    $('#userNumber').text(userNumber)
    userNumber += Button1
    console.log(userNumber);  
    endGame()   
});

$('#Button-2').on("click", function(){
    $('#userNumber').text(userNumber)
    userNumber += Button2 
    console.log(userNumber) 
    endGame()     
});
$('#Button-3').on("click", function(){
    $('#userNumber').text(userNumber)
        userNumber += Button3
        console.log(userNumber)
        endGame()
});
$('#Button-4').on("click", function(){
    $('#userNumber').text(userNumber)
        userNumber += Button4
        console.log(userNumber)
        endGame()
});

// have the computer select a random number between 19 - 120    
    function random_item() {
       winningNumber = Math.floor(Math.random() * 120) + 19;
    console.log(winningNumber);
    $('#Winning-number').html(winningNumber)
    }; 
// write something for the random numbers in the buttons
    
// write something that adds the random numbers from the buttons on each click 
       
        
// logic if the "userNumber" === "winningNumber" wins +1
// logic if the "userNumber" > "winningNumber" losses +1
   function endGame() {
if (userNumber === winningNumber) {
    wins++
    } else if (userNumber > winningNumber) {
    losses++
    };
// make sure winning or losing randomises all random numbers?????
if(wins === 1 || losses === 1) {
    alert("Refresh to play again!")
        }    
   };
});