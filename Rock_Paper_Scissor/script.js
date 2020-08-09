var cmpChoice = $('#coputer_choice');
var userChoice = $('#your_choice');
var displayResult = $('#result');
var displayMyScore = $('#my_Score');
var displayCmpScore = $('#coputer_score');
let userChosen;
let cmpChosen;
let myScore = 0;
let cmpScore = 0;
var result;
var possibleChoices = document.querySelectorAll('.fa')

// User Choice
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChosen = e.target.id
    generatedComputerChoice()
    console.log('Computer: '+cmpChosen)
    console.log('User: '+e.target.id)
    results()
    finalResult()
    userChoice.html(userChosen)
    cmpChoice.html(cmpChosen)
    displayResult.html(result)
    displayCmpScore.html(cmpScore+'/5')
    displayMyScore.html(myScore+'/5')
}))

// Computer Choice
function generatedComputerChoice() {
    let randomNum = Math.round(Math.random()* 3);
    if (randomNum === 1) {
        return cmpChosen = 'Rock'
    } else if (randomNum === 2) {
        return cmpChosen = 'Paper'
    } else if (randomNum === 3) {
        return cmpChosen = 'Scissor'
    }
}

// Compute Result
function results() {
    if(cmpChosen == userChosen){
        myScore = myScore    
        return result = 'Tie !!'
    } else if (cmpChosen === 'Rock' && userChosen === 'Paper') {
        myScore += 1
        return result = 'You Win :)'
    } else if (cmpChosen === 'Rock' && userChosen === 'Scissor') {
        cmpScore += 1 
        return result = 'You Lost :('
    } else if (cmpChosen === 'Paper' && userChosen === 'Rock') {
        cmpScore += 1 
        return result = 'You Lost :('
    } else if (cmpChosen === 'Paper' && userChosen === 'Scissor') {
        myScore += 1
        return result = 'You Win :)'
    } else if (cmpChosen === 'Scissor' && userChosen === 'Rock') {
        myScore += 1
        return result = 'You Win :)'
    } else if (cmpChosen === 'Scissor' && userChosen === 'Paper') {
        cmpScore += 1 
        return result = 'You Lost :('
    }
}

// Final Winner
function finalResult(){
    if(cmpScore + myScore === 5){
        $('#myGame').css("opacity", "0.5")
        $('#finalScore').css('display', 'block')
        $('#myGame').css('pointer-events','none')
        $('#myGame').click(function(){return false;});
        
        if(myScore > cmpScore){
            $('#final_result').html(' You Won :) ')
        }
        else{
            $('#final_result').html(' You Lost :( ')
        }

        // Refresh Page
        $('#replay').on('click',function(){
            window.location.reload();
        })
    }
}