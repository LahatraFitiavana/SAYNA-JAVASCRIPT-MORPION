let player_char = '0';
let cpu_char = 'X';
let player = 'player';

let player_wins = 0;
let cpu_wins = 0;

let player_losses = 0;
let cpu_losses = 0;

let running = true;

let items = document.querySelectorAll('.grid-item');
let chars = document.querySelector('.chars');
let now = document.querySelector('.now');

let player_score = 0;
let cpu_score = 0;

let grid = []

for (let i = 0; i < 3; i++) {
    grid.push(['', '', ''])
}

let cpu_choices = [...grid]


function choiseCase(element, id) {

    let index = id.split("")[4] - 1;
    let i, j;
    [i, j] = transform(index);
    element.textContent = player_char;
    grid[i][j] = 'p';
    isGameOver(grid);
    player = 'cpu';
    now.innerHTML = `<p>${player}'s turn</p>`;
    cpuPlay();


}

function cpuPlay() {
    let empties = [];
    let indices = [];
    let i, j;
    let rand;
    items.forEach((item, index) => {
        if (item.textContent == '')
            empties.push(item);
        indices.push(index);
    })
    rand = Math.ceil(Math.random() * empties.length - 1);
    setTimeout(() => {
        empties[rand].textContent = cpu_char

    }, 1000);
    [i, j] = transform(indices[rand]);
    grid[i][j] = 'c';
    isGameOver(grid);
    player = 'player';
    now.innerHTML = `<p>${player}'s turn</p>`;
}

function play(){
    for(let i=0;i<9;i++){
        items[i].disabled=false;
    }
    if (player == 'cpu') {
        let rand = Math.ceil(Math.random() * items.length - 1);
        let i,j;
        [i, j] = transform(rand);
        items[rand].textContent = cpu_char;
        grid[i][j] = 'c';
        player = 'player';
        now.innerHTML = `<p>${player}'s turn</p>`;
    }
}

function reset() {

    for (let i = 0; i < 9; i++) {
        items[i].textContent = '';
        items[i].disabled=true;
    }
    player_char = '0';
    cpu_char = 'X';
    chars.innerHTML = ``;
    grid = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]
    if (player == 'player') {
        player = 'cpu';
    } else
        player = 'player';
    chars.innerHTML = `<p> by default player ${player_char} cpu ${cpu_char}</p>`;
    now.innerHTML = `<b> ${player}'s turn</b>`;
}



function setX() {
    player_char = 'X';
    cpu_char = '0';
    chars.innerHTML = `<p>player ${player_char} cpu ${cpu_char}</p>`;
}

function set0() {
    player_char = '0';
    cpu_char = 'X';
    chars.innerHTML = `<p>player ${player_char} cpu ${cpu_char}</p>`;
}

function isGameWon(tab) {
    for (let i = 0; i < 3; i++) {
        if (tab[i][0] != '' && tab[i][0] == tab[i][1] && tab[i][0] == tab[i][2])
            return true;
        if (tab[0][i] != '' && tab[0][i] == tab[1][i] && tab[0][i] == tab[2][i])
            return true;
    }
    if (tab[0][0] != '' && tab[0][0] == tab[1][1] && tab[0][0] == tab[2][2])
        return true;
    if (tab[0][2] != '' && tab[0][2] == tab[1][1] && tab[0][2] == tab[2][0])
        return true;

    return false;
}

function isGameOver(tab) {
    let temp = true;
    if (isGameWon(tab))
        return temp;
    else {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (tab[i][j] == '')
                    return false;
            }
        }
        return temp;
    }
}

let transform = (i) => {
    switch (i) {
        case 0:
            return [0, 0]
            break;
        case 1:
            return [0, 1]
            break;
        case 2:
            return [0, 2];
            break;
        case 3:
            return [1, 0]
            break;
        case 4:
            return [1, 1]
            break;
        case 5:
            return [1, 2];
            break;
        case 6:
            return [2, 0]
            break;
        case 7:
            return [2, 1]
            break;
        case 8:
            return [2, 2];
            break;
    }
}


