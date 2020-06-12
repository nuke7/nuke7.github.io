const grid = document.querySelector('.grid')
let squares = Array.from(document.querySelectorAll('.grid'));
const ScoreDisplay = document.querySelector('#score');
const StarBtn = document.querySelector('#start-button');
const width = 10;

//shapes
const lTetromino = [
    [1, width + 1, width * 2 + 1, 2],
    [width, width + 1, width + 2, width * 2 + 2],
    [1, width + 1, width * 2 + 1, width * 2],
    [width, width * 2, width * 2 + 1, width * 2 + 2]
];