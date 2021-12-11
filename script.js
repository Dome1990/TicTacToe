let fields = [];
let currentShape = 'cross';
let winner;

function fillShape(id) {
    fields[id] = currentShape;
    if (currentShape == 'cross') {
        currentShape = 'circle';
    }
    else {
        currentShape = 'cross';
    };
    draw();
    checkForWin();
}

function draw(){
    for (let i = 0; i < fields.length; i++){
        if(fields[i] == 'cross'){
            document.getElementById('cross-' +i).classList.remove('d-none');
        };
        if(fields[i] == 'circle'){
            document.getElementById('circle-' +i).classList.remove('d-none');
        };
    }
}

function checkForWin(){
    if(fields[0] == fields[1] && fields[1] == fields[2] && fields[0]){
        winner = fields[0];
    }
    else if(fields[3] == fields[4] && fields[4] == fields[5] && fields[3]){
        winner = fields[3];
    }
    else if(fields[6] == fields[7] && fields[7] == fields[8] && fields[6]){
        winner = fields[6];
    }
    else if(fields[6] == fields[4] && fields[4] == fields[2] && fields[6]){
        winner = fields[6];
    }
    else if(fields[0] == fields[4] && fields[4] == fields[8] && fields[0]){
        winner = fields[0];
    }
    else if(fields[0] == fields[3] && fields[3] == fields[6] && fields[0]){
        winner = fields[0];
    }
    else if(fields[1] == fields[4] && fields[4] == fields[7] && fields[1]){
        winner = fields[1];
    }
    else if(fields[2] == fields[5] && fields[5] == fields[8] && fields[2]){
        winner = fields[2];
    }
    if (winner){
    printOutWinner();
    }
}

function printOutWinner(){
console.log(winner+' hat gewonnen');
}