let player_char='0';
let cpu_char='X';
let player='player';

let player_win=0;
let cpu_win=0;

let running=true;

let items=document.querySelectorAll('.grid-item');


let grid=[]

for (let i=0; i<3;i++){
    grid.push(['','',''])
}

items.forEach((element,index)=>{
    element.onclick=()=>{
        if (element.textContent=='' && running){
            let i,j;
             [i,j]=transform(index);
             if (player=='player'){
                 element.textContent=player_char;
                 player='cpu';
                 grid[i][j]='p';
             }
             else if (player=='cpu'){
                 element.textContent=cpu_char;
                 player='player';
                 grid[i][j]='c';
             }

        }
    }
})


function reset(){
    for (let i=0;i<9;i++){
        items[i].textContent='';
    }  
}

function setX(){
    player_char='X';
    cpu_char='0';
}

function set0(){
    player_char='0';
    cpu_char='X';
}

function isGameOver(tab){
    for (let i = 0; i < 3; i++) {
        if (tab[i][0] != 0 && tab[i][0] == tab[i][1] && tab[i][0] == tab[i][2])
            return true;
        if (tab[0][i] != 0 && tab[0][i] == tab[1][i] && tab[0][i] == tab[2][i])
            return true;
    }
    if (tab[0][0] != 0 && tab[0][0] == tab[1][1] && tab[0][0] == tab[2][2])
        return true;
    if (tab[0][2] != 0 && tab[0][2] == tab[1][1] && tab[0][2] == tab[2][0])
        return true;

    return false;
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
            return [0, 2]; break;
        case 3:
            return [1, 0]
            break;
        case 4:
            return [1, 1]
            break;
        case 5:
            return [1, 2]; break;
        case 6:
            return [2, 0]
            break;
        case 7:
            return [2, 1]
            break;
        case 8:
            return [2, 2]; break;
    }
}

