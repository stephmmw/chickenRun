document.addEventListener("DOMContentLoaded",function(){ // Start after page loads
    const canvas = document.getElementById('gameCanvas');
    const gameContainer = document.getElementById('gameContainer');

    if(canvas.getContext){
        const ctx = canvas.getContext('2d');

    }

    homeScreen();
});

// Create home screen items
const buttons = [
    // ['buttonId, buttonText]
    ['newGame', 'New Game'],
    ['continueGame', 'Continue'],
    ['gameSettings', 'Settings'],
    ['exitGame', 'Exit']
];

function homeScreen(){
    // homescreen
    const buttonContainer = document.getElementById('buttons');

    //Home screen content

    //const buttons = [newGameButton, continueGameButton, settingsButton, exitGameButton];

    for (i=0; i < buttons.length; i++){
        const homeButton = document.createElement('button');
        homeButton.setAttribute('id', buttons[i][0]);
        homeButton.setAttribute('class', 'button'); 
        homeButton.setAttribute('onclick', 'gameAction(this)'); 
        homeButton.setAttribute('title', buttons[i][1]);
        homeButton.innerText = buttons[i][1];
        buttonContainer.appendChild(homeButton);
    }       
}

function gameAction(btn){
    var buttonId = document.getElementById(btn.id).getAttribute('id');
    for(i=0; i < buttons.length; i++){
        if(buttonId == buttons[i][0]){
            console.log('You Pressed '+ buttons[i][1]);
        }        
    }
}