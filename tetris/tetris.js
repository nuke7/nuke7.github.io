document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    let squares = Array.from(document.querySelectorAll('.grid div'));
    const scoreDisplay = document.querySelector('#score');
    const startBtn = document.querySelector('#start-button');
    const width = 10;
    let nextRandom = 0;
    let timerId;
    let score = 0;
    var classes = ["tetromino1", "tetromino2", "tetromino3", "tetromino4"];




    //shapes
    const lTetromino = [
        [1, width + 1, width * 2 + 1, 2],
        [width, width + 1, width + 2, width * 2 + 2],
        [1, width + 1, width * 2 + 1, width * 2],
        [width, width * 2, width * 2 + 1, width * 2 + 2]
    ];

    const zTetromino = [
        [0, width, width + 1, width * 2 + 1],
        [width + 1, width + 2, width * 2, width * 2 + 1],
        [0, width, width + 1, width * 2 + 1],
        [width + 1, width + 2, width * 2, width * 2 + 1]
    ];

    const tTetromino = [
        [1, width, width + 1, width + 2],
        [1, width + 1, width + 2, width * 2 + 1],
        [width, width + 1, width + 2, width * 2 + 1],
        [1, width, width + 1, width * 2 + 1]
    ];

    const oTetromino = [
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1]
    ];

    const iTetromino = [
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3],
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3]
    ];

    const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];

    let currentPosition = 4;
    let currentRotation = 0;

    //random selection
    let random = Math.floor(Math.random() * theTetrominoes.length)
    console.log(random);

    let current = theTetrominoes[random][currentRotation];

    //first rotation
    function draw() {
        current.forEach(index => {
            squares[currentPosition + index].classList.add(classes[(Math.floor(Math.random() * classes.length))]);
        });
    };

    function undraw() {
        current.forEach(index => {
            squares[currentPosition + index].classList.remove('tetromino1', 'tetromino2', 'tetromino3', 'tetromino4');
        })
    }

    //console.log(currentPosition);
    //console.log(squares);

    //movement timer
    //timerId = setInterval(moveDown, 900);

    //controlling with keycode

    //event listener for keys and controlling the shapes
    function control(event) {
        if (event.keyCode === 37) {
            moveLeft();
        } else if (event.keyCode === 38) {
            rotation();
        } else if (event.keyCode === 39) {
            moveRight();
        } else if (event.keyCode === 40) {
            moveDown();
        }
    };

    document.addEventListener('keydown', control);




    //movement code
    function moveDown() {
        undraw();
        currentPosition += width;
        draw();
        stop();
    };

    //stopping function
    function stop() {
        if (current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
            current.forEach(index => squares[currentPosition + index].classList.add('taken'));
            //new tetris element falls
            random = nextRandom;
            nextRandom = Math.floor(Math.random() * theTetrominoes.length);
            current = theTetrominoes[random][currentRotation];
            currentPosition = 3;
            draw();
            displayShape();
            addScore();
            gameOver();
        }
    };

    function moveLeft() {
        undraw();
        const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)

        if (!isAtLeftEdge) currentPosition -= 1;

        if (current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
            currentPosition += 1;
        };
        draw();
    }


    //move right
    function moveRight() {
        undraw();
        const isAtRightEdge = current.some(index => (currentPosition + index) % width === width - 1);

        if (!isAtRightEdge) { currentPosition += 1 };

        if (current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
            currentPosition -= 1;
        }
        draw();
    };

    //rotation at the edge
    function isAtRight() {
        return current.some(index => (currentPosition + index + 1) % width === 0);
    };

    function isAtLeft() {
        return current.some(index => (currentPosition + index) % width === 0);
    };

    function checkRotatedPosition(P) {
        P = currentPosition; //get current position.  Then, check if the piece is near the left side.
        if ((P + 1) % width < 4) { //add 1 because the position index can be 1 less than where the piece is (with how they are indexed).     
            if (isAtRight()) { //use actual position to check if it's flipped over to right side
                currentPosition += 1; //if so, add one to wrap it back around
                checkRotatedPosition(P); //check again.  Pass position from start, since long block might need to move more.
            }
        } else if (P % width > 5) {
            if (isAtLeft()) {
                currentPosition -= 1;
                checkRotatedPosition(P);
            }
        }
    };

    function rotation() {
        undraw();
        currentRotation++;
        if (currentRotation === current.length) { //if there's no more rotation versions, start from the first rotation
            currentRotation = 0;
        };
        current = theTetrominoes[random][currentRotation];
        draw();
    };



    // show next in mini grid

    const displaySquares = document.querySelectorAll('.mini-grid div');
    const displayWidth = 4;
    let displayIndex = 0;

    //tetrominos without rotation
    const upNext = [
        [1, displayWidth + 1, displayWidth * 2 + 1, 2], //L
        [0, displayWidth, displayWidth + 1, displayWidth * 2 + 1], //z
        [1, displayWidth, displayWidth + 1, displayWidth + 2], //t
        [0, 1, displayWidth, displayWidth + 1], //o
        [1, displayWidth + 1, displayWidth * 2 + 1, displayWidth * 3 + 1], //i
    ];

    //display up next
    function displayShape() {
        displaySquares.forEach(square => {
            square.classList.remove('tetromino2');
        });
        upNext[nextRandom].forEach(index => {
            displaySquares[displayIndex + index].classList.add('tetromino2');
        });
    };

    $('#left-arrow').click(moveLeft);
    $('#right-arrow').click(moveRight);
    $('#rotate-arrow').click(rotation);

    //start button functionality

    $("#start-button").click(function() {
        if (timerId) {
            clearInterval(timerId);
            timerId = null;
        } else {
            draw();
            timerId = setInterval(moveDown, 850);
            nextRandom = Math.floor(Math.random() * theTetrominoes.length);
            displayShape();
        }
    });

    $("#easy").click(function() {
        if (timerId) {
            clearInterval(timerId);
            timerId = null;
        } else {
            draw();
            timerId = setInterval(moveDown, 1100);
            nextRandom = Math.floor(Math.random() * theTetrominoes.length);
            displayShape();
        }
    });

    $("#hard").click(function() {
        if (timerId) {
            clearInterval(timerId);
            timerId = null;
        } else {
            draw();
            timerId = setInterval(moveDown, 450);
            nextRandom = Math.floor(Math.random() * theTetrominoes.length);
            displayShape();
        }
    });

    $("#normal").click(function() {
        if (timerId) {
            clearInterval(timerId);
            timerId = null;
        } else {
            draw();
            timerId = setInterval(moveDown, 850);
            nextRandom = Math.floor(Math.random() * theTetrominoes.length);
            displayShape();
        }
    });

    function addScore() {
        for (let i = 0; i < 199; i += width) {
            const row = [i, i + 1, i + 2, i + 3, i + 4, i + 5, i + 6, i + 7, i + 8, i + 9]

            if (row.every(index => squares[index].classList.contains('taken'))) {
                score += 10;
                scoreDisplay.innerHTML = score;
                row.forEach(index => {
                    squares[index].classList.remove('taken');
                    squares[index].classList.remove('tetromino1', 'tetromino2', 'tetromino3', 'tetromino4');
                });
                const squaresRemoved = squares.splice(i, width);
                squares = squaresRemoved.concat(squares);
                squares.forEach(cell => grid.appendChild(cell));

            }
        }
    };

    //game over function

    function gameOver() {
        if (current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
            scoreDisplay.innerHTML = 'end';
            clearInterval(timerId);
        }
    };




})