/**
 * the following functions will check every single line for a winner, indicates
 * the win by showing a line and pushs the winner in the score array
 * for the score calculation
 */
function checkForWin() {
    checkHorizontal();
    checkDiagonal();
    checkVertical();
    if (winner) {
        gameOver = true;
        setTimeout(function () { showEndscreen() }, 500);
        countScore();
    };
}

function checkHorizontal(){
    if (checkFirstLine()) {
        indicatesFirstLine();
    };
    if (checkSecondLine()) {
        indicatesSecondLine();
    }
    if (checksThirdLine()) {
        indicatesThirdLine();
    }
}

function checkDiagonal(){
    if (checkFirstDiagonal()) {
        indicatesFirstDiagonal();
    };
    if (checkSecondDiagonal()) {
        indicatesSecondDiagonal();
    };
}

function checkVertical(){
    if (checkFirstVertical()) {
        indicatesFirstVertical();
    };
    if (checkSecondVertical()) {
        indicatesSecondVertical();
    };
    if (checkThirdVertical()) {
        indicatesThirdVertical();
    };
}

function checkFirstLine() {
    return fields[0] == fields[1] && fields[1] == fields[2] && fields[0];
}

function indicatesFirstLine() {
    winner = fields[1];
    score.push(winner);
    document.getElementById('line-0').style.transform = 'scale(1)';
}

function checkSecondLine() {
    return fields[3] == fields[4] && fields[4] == fields[5] && fields[3];
}

function indicatesSecondLine() {
    winner = fields[3];
    score.push(winner);
    document.getElementById('line-1').style.transform = 'scale(1)';
}

function checksThirdLine() {
    return fields[6] == fields[7] && fields[7] == fields[8] && fields[6];
}

function indicatesThirdLine() {
    winner = fields[6];
    score.push(winner);
    document.getElementById('line-2').style.transform = 'scale(1)';
}

function checkFirstDiagonal() {
    return fields[6] == fields[4] && fields[4] == fields[2] && fields[6];
}

function indicatesFirstDiagonal() {
    winner = fields[6];
    score.push(winner);
    document.getElementById('line-7').style.transform = 'scale(1) rotate(-45deg)';
}

function checkSecondDiagonal(){
   return fields[0] == fields[4] && fields[4] == fields[8] && fields[0];
}

function indicatesSecondDiagonal() {
    winner = fields[0];
    score.push(winner);
    document.getElementById('line-6').style.transform = 'scale(1) rotate(45deg)';
}

function checkFirstVertical(){
   return fields[0] == fields[3] && fields[3] == fields[6] && fields[0];
}

function indicatesFirstVertical() {
    winner = fields[0];
    score.push(winner);
    document.getElementById('line-4').style.transform = 'scale(1) rotate(90deg)';
}

function checkSecondVertical(){
    return fields[1] == fields[4] && fields[4] == fields[7] && fields[1];
}

function indicatesSecondVertical() {
    winner = fields[1];
    score.push(winner);
    document.getElementById('line-3').style.transform = 'scale(1) rotate(90deg)';
}

function checkThirdVertical(){
    return fields[2] == fields[5] && fields[5] == fields[8] && fields[2];
}

function indicatesThirdVertical() {
    winner = fields[2];
    score.push(winner);
    document.getElementById('line-5').style.transform = 'scale(1)  rotate(90deg)';
}