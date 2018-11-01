const number = document.getElementById("number");
const submitButton = document.getElementById("submit");
const pMessage = document.querySelector('.message');
//Generate random number here once...
let randNumber = Math.floor(Math.random() * 10) + 1;
let numOfGuesses = 3;
document.body.addEventListener('mousedown', reloadThePage);
function reloadThePage(e){
    if(e.target.className === "PlayAgain"){
        window.location.reload();
    }
}



submitButton.addEventListener('click', checkGuessing);

function checkGuessing(e) {

    let numberValue = parseInt(number.value);
    //el-input tamam
    if (numberValue > 0 && numberValue < 11) {
        if (numberValue === randNumber) { //right guessing
            showMessage("green", `${numberValue} is correct!`);
            number.disabled = true;
            submitButton.value = "Play Again";
            submitButton.className = "PlayAgain";

        } else { //Wrong guessing
            numOfGuesses -= 1;
            if (numOfGuesses === 0) {
                showMessage("red", `Game over. The correct answer was ${randNumber}`);
                number.disabled = true;
                submitButton.value = "Play Again";
                submitButton.className = "PlayAgain";
            } else {
                
                showMessage("red", `${numberValue} is not correct, you have ${numOfGuesses} guesses left!`);
                number.value = "";
            }
        }

    } else { //WRONG INPUT aslun
        showMessage("red", 'Please check your number!');
    }
    e.preventDefault();
}

function showMessage(color, msg) {
    pMessage.innerHTML = msg;
    pMessage.style.color = color;
    number.style.borderColor = color;
}