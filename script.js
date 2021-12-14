let fields = [];
let currentShape = 'cross';
let gameOver = false;
let winner;
let scoreCross = 0;
let scoreCircle = 0;
let score = [];

/**
 * checks the selected field for previous input and fills it if its still empty
 * @param {int} id the number of the selected field
 */
function fillShape(id) {
    if (fieldIsEmpty(id)) {
        fields[id] = currentShape;
        if (currentShape == 'cross') {
            secondPlayerTurn();
        }
        else {
            firstPlayerTurn();
        };
        draw();
        checkForWin();
        checkForUndecided();
    };
}

/**
 * 
 * @param {int} id of the selected field
 * @returns true if the field ist empty
 */
function fieldIsEmpty(id) {
    return !fields[id] && !gameOver;
}

/**
 * changes the indication of which players turn it is
 */
function firstPlayerTurn() {
    currentShape = 'cross';
    document.getElementById('player-1').classList.remove('player-inactive');
    document.getElementById('player-2').classList.add('player-inactive');
}

function secondPlayerTurn() {
    currentShape = 'circle';
    document.getElementById('player-1').classList.add('player-inactive');
    document.getElementById('player-2').classList.remove('player-inactive');
}

/**
 * displays all crosses/circles which are placed in the fields and are saved in the fields array
 */
function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        };
        if (fields[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
        };
    }
}

function countScore() {
    resetScore();
    countPoints();
    printScore();
}

function resetScore() {
    scoreCircle = 0;
    scoreCross = 0;
}

function countPoints(){
    for (let i = 0; i < score.length; i++) {
        if (score[i] == 'cross') {
            scoreCross++;
        }
        else if (score[i] == 'circle') {
            scoreCircle++;
        };
    };
}

function printScore(){
    document.getElementById('score-circle').innerHTML = scoreCircle;
    document.getElementById('score-cross').innerHTML = scoreCross;
}

function showEndscreen() {
    document.getElementById('game-over').classList.remove('d-none');
}

function restartGame() {
    gameOver = false;
    fields = [];
    winner = false;
    document.getElementById('game-over').classList.add('d-none');
    for (let i = 0; i < 9; i++) {
        document.getElementById('circle-' + i).classList.add('d-none');
        document.getElementById('cross-' + i).classList.add('d-none');
    };
    for (let i = 0; i < 8; i++) {
        document.getElementById('line-' + i).style.transform = 'scale(0)';
    };
}

/**
 * if the fields array is full and no empty elements are included 
 * there is no winner and the endscreen will be showed
 */
function checkForUndecided() {
    if (fields.length == 9 && !fields.includes(undefined)) {
        showEndscreen();
    }
}