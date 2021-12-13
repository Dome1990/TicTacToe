let fields = [];
let currentShape = 'cross';
let gameOver = false;
let winner;
let scoreCross = 0;
let scoreCircle = 0;
let score = [];

function fillShape(id) {
    if (fieldIsEmpty(id)) {
        fields[id] = currentShape;
        if (currentShape == 'cross') {
            currentShape = 'circle';
            document.getElementById('player-1').classList.add('player-inactive');
            document.getElementById('player-2').classList.remove('player-inactive');
        }
        else {
            currentShape = 'cross';
            document.getElementById('player-1').classList.remove('player-inactive');
            document.getElementById('player-2').classList.add('player-inactive');
        };
        draw();
        checkForWin();
        checkForUndecided();
    };
}

function fieldIsEmpty(id){
    return !fields[id] && !gameOver;
}

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

function checkForWin() {
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[1];
        score.push(winner);
        document.getElementById('line-0').style.transform = 'scale(1)';
    };
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        score.push(winner);
        document.getElementById('line-1').style.transform = 'scale(1)';
    }
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        score.push(winner);
        document.getElementById('line-2').style.transform = 'scale(1)';
    };
    if (fields[6] == fields[4] && fields[4] == fields[2] && fields[6]) {
        winner = fields[6];
        score.push(winner);
        document.getElementById('line-7').style.transform = 'scale(1) rotate(-45deg)';
    };
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        score.push(winner);
        document.getElementById('line-6').style.transform = 'scale(1) rotate(45deg)';
    };
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        score.push(winner);
        document.getElementById('line-4').style.transform = 'scale(1) rotate(90deg)';
    };
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        score.push(winner);
        document.getElementById('line-3').style.transform = 'scale(1) rotate(90deg)';
    };
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        score.push(winner);
        document.getElementById('line-5').style.transform = 'scale(1)  rotate(90deg)';
    };
    if (winner) {
        gameOver = true;
        setTimeout(function () { showEndscreen() }, 500);
        countScore();
    };
}

function countScore() {
    scoreCircle = 0;
    scoreCross = 0;
    for (let i = 0; i < score.length; i++) {
        if (score[i] == 'cross') {
            scoreCross++;
        }
        else if (score[i] == 'circle') {
            scoreCircle++;
        };
    };
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

function checkForUndecided(){
    if(fields.length == 9 && !fields.includes(undefined)){
        showEndscreen();
    }
}