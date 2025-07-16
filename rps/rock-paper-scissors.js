
let Wins = 0; Losses = 0; Tie = 0;

function play(playerMove){
    const moves = ['✊🏾', '✋🏾', '✌🏾'];
    const computerMove = moves[Math.floor(Math.random() * 3)];

    let result = '';

    if( playerMove === computerMove){

        result = 'Tie.';
        Tie += 1;
    }else if (
        (playerMove === '✊🏾' && computerMove === '✌🏾')||
        (playerMove === '✋🏾' && computerMove === '✊🏾')||
        (playerMove === '✌🏾' && computerMove === '✋🏾')
    ){
        result = 'You win.';
        Wins += 1;
    }else{
        result = 'You Lose.';
        Losses += 1;
    }

    
    document.getElementById('YouC').innerHTML = `You 
    <span class="player-move">${playerMove}</span>
     <span class="computer-move">${computerMove}</span>
      computer`;
    document.getElementById('countsrps').innerHTML = `Wins: ${Wins}, Losses: ${Losses}, Ties: ${Tie}`;
}

