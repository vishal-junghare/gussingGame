//console.log(Math.random()*100); 
// this fuction are use random function find example 1.0,22.1,45.26
//console.log(Math.ceil(4.4)); 
// this function is use round up float to integer value
/* this program start */
// let isNumberRandom =(Math.random()*100)
// console.log(Math.ceil(isNumberRandom));
 //8************************ this run commond **************//
let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random());
console.log(randomNumber);
function checkGuess() {
    let gussesNumber = parseInt(userInput.value);
    if (gussesNumber > randomNumber) {
        gameResult.textContent = "TO HIGH! TRY AGAIN";

        gameResult.style.backgroundColor = "#1e217c";
    }
    else if (gussesNumber < randomNumber) {
        gameResult.textContent = "TO LOW!TRY AGAIN";

        gameResult.style.backgroundColor = "#1e217c";

    }
    else if (gussesNumber === randomNumber) {
        gameResult.textContent = "COngralations !! u got it right ";

        gameResult.style.backgroundColor = "green";

    }
}