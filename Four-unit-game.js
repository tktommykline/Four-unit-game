
$( document ).ready(function() {
// name the vars of the game
    var winningNumber
    var userNumber
    var Button1
    var Button2
    var Button3
    var Button4

    var wins = 0
    var losses = 0
//make on click events for the buttons
$('#Button-1').on("click", random_buttons);

   //
// have the computer select a random number between 19 - 120    
    function random_item() {
       winningNumber = Math.floor[Math.random() * 120] + 19;
    console.log(winningNumber);
    }; 
// write something for the random numbers in the buttons
    function random_buttons(event) {
        Math.floor[Math.random() * 12];
       console.log(event.target);
    };
// write something that adds the random numbers from the buttons on each click 
        function button_numbers() {
        
        };
// logic if the "userNumber" === "winningNumber" wins +1
// logic if the "userNumber" > "winningNumber" losses +1
    if (userNumber === winningNumber) {
        wins++
    } else if (userNumber > winningNumber) {
        losses++
    };
// make sure winning or losing randomises all random numbers?????
});