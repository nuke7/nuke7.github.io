const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
const startButton = document.getElementById('start');
let currentlyPlaying = false;



$('.door-row').hide();

function isBot(door) {
    if (door.src === botDoorPath) {
        return true;
    } else {
        return false;
    }
};

function isClicked(door) {
    if (closedDoorPath === door.src) {
        return false;
    } else {
        return true;
    }
};

function playDoor(door) {
    numClosedDoors--;
    if (isBot(door)) {
        gameOver();
    } else if (numClosedDoors === 1) {
        //startButton.innerHTML = "You win! Play again?";
        gameOver('win');
    }
};

function gameOver(status) {
    if (status === 'win') {
        startButton.innerHTML = "You win! Play again?";
        $('.door-row').delay(1500).toggle(850);
    } else {
        startButton.innerHTML = "Game Over! Play again?";
        $('.door-row').delay(1000).toggle(850);
    }
    currentlyPlaying = false;
};




doorImage1.onclick = () => {
    if (isClicked(doorImage1) === false && currentlyPlaying === true) {
        let choreDoor = Math.floor(Math.random() * numClosedDoors);
        if (choreDoor === 0) {
            doorImage1.src = botDoorPath;
        } else if (choreDoor === 1) {
            doorImage1.src = spaceDoorPath;
        } else if (choreDoor === 2) {
            doorImage1.src = beachDoorPath;
        }
        playDoor(doorImage1);
    }
};

doorImage2.onclick = () => {
    if (isClicked(doorImage2) === false && currentlyPlaying === true) {
        let choreDoor = Math.floor(Math.random() * numClosedDoors);
        if (choreDoor === 0) {
            doorImage2.src = botDoorPath;
        } else if (choreDoor === 1) {
            doorImage2.src = beachDoorPath;
        } else if (choreDoor === 2) {
            doorImage2.src = spaceDoorPath;
        }
        playDoor(doorImage2);
    }
};

doorImage3.onclick = () => {
    if (isClicked(doorImage3) === false && currentlyPlaying === true) {
        let choreDoor = Math.floor(Math.random() * numClosedDoors);
        if (choreDoor === 0) {
            doorImage3.src = botDoorPath;
        } else if (choreDoor === 1) {
            doorImage3.src = spaceDoorPath;
        } else if (choreDoor === 2) {
            doorImage3.src = beachDoorPath;
        }
        playDoor(doorImage3);
    }
};

function startRound() {
    numClosedDoors = 3;
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    currentlyPlaying = true;
    startButton.innerHTML = "Good Luck!";
    $('.door-row').show(500);
    //randomChoreDoorGenerator();
};

startButton.onclick = () => {
    if (currentlyPlaying === false) {
        startRound();
    }
    $('.door-row').show(700);
};



/*randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors);
    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = spaceDoorPath;
        openDoor3 = beachDoorPath;
    } else if (choreDoor === 1) {
        openDoor2 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if (choreDoor === 2) {
        openDoor3 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor1 = spaceDoorPath;
    }
};*/