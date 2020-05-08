function getUserChoice() {
    let Input = $('#userInput').val().toLowerCase();
    //Input = Input.toLowerCase();
    if (Input === 'rock' || Input === 'paper' || Input === 'scissors' || Input === 'flamethrower') {
        console.log(Input);
        return Input;

    } else {
        console.log("that's not a valid choice");
        alert("That's not a valid input!");
    }

};


//console.log(getUserChoice('flamethrower'));

function getComputerChoice() {
    Input2 = Math.floor(Math.random() * 3);
    switch (Input2) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
};

//console.log(getComputerChoice());

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "The game is a tie!";
    } else if (userChoice === 'rock' && computerChoice === 'paper') {
        return "The computer won!";
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        return "The player won!";
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
        return "The computer won!";
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        return "The player won!";
    } else if (userChoice === 'scissors' && computerChoice === 'rock') {
        return "The computer won!";
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        return "The player won!";
    } else if (userChoice === 'flamethrower') {
        return "The player won!";
    }
};

//console.log(determineWinner('rock', 'paper'));

function playGame() {
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();
    if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors' || userChoice === 'flamethrower') {
        $('#result').hide().delay(540).show(540);
        document.getElementById("gameArea").innerHTML = "<h1> Game Results </h1> <h3>Player Choice is: " + userChoice + "</h3> <h3> Computer Choice is: " + computerChoice + "</h3>";
        console.log("Your choice is: " + userChoice);
        console.log("The computer's choice is: " + computerChoice);
        console.log(determineWinner(userChoice, computerChoice));
        document.getElementById("result").innerHTML = determineWinner(userChoice, computerChoice);
        $('#userInput').val('');
    } else {
        $('#userInput').val('');
    }
};

function clearInput() {
    $('this').val('')
}

$('#play').click(playGame);
$('#userInput').keypress(function(event) {
    //var keycode = (event.keyCode ? event.keyCode : event.which);
    if (event.keyCode == '13') {
        playGame();
    }
});

//magic 8ball itt kezdődik....

let userName = $("#name").val();



userName ? console.log('Hello ' + userName + '!') :
    console.log('Hello!');

let userQuestion = "What is happening?";
console.log(userName + " asked: " + userQuestion);

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";

switch (randomNumber) {
    case 1:
        eightBall = 'It is certain'
        break;
    case 2:
        eightBall = 'It is decidedly so'
        break;
    case 3:
        eightBall = 'Reply hazy try again'
        break;
    case 4:
        eightBall = 'Cannot predict now'
        break;
    case 5:
        eightBall = 'Do not count on it'
        break;
    case 6:
        eightBall = 'My sources say no'
        break;
    case 7:
        eightBall = 'Outlook not so good'
        break;
    case 8:
        eightBall = 'Signs point to yes'
        break;
    default:
        eightBall = 'Ask again'
        break;
};

console.log(eightBall);