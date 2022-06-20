
let cSelect= null;
let playerScore = 0
let computerScore = 0

let comput = ["Rock", "Paper", "Scissor"];

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissor']
    return choices[Math.floor(Math.random() * choices.length)]
}


  const buttons = document.querySelectorAll('input');
    
  buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})
    function playRound (pSelect) {
    cSelect = computerPlay()

       if  ( (cSelect =="Scissor" && pSelect =="Paper") || (cSelect =="Rock" && pSelect =="Scissor") || (cSelect =="Paper" && pSelect =="Rock") ) {
        computerScore += 1
        result = ('You lose! ' + cSelect + ' beats ' + pSelect
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
       }
       else if  ( (cSelect =="Scissor" && pSelect =="Rock") || (cSelect =="Rock" && pSelect =="Paper") || (cSelect =="Paper" && pSelect =="Scissor") ) {
        playerScore += 1
        result = ('You win! ' + pSelect+ ' beats ' + cSelect
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)


       }
       else if (cSelect==pSelect) {
        result = ('It\'s a tie. You both chose ' + pSelect
        + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
        }

       if (playerScore==5 || computerScore==5) 
       disableButtons()
        document.querySelector('#fWinner').innerHTML= result;
        return
    };




