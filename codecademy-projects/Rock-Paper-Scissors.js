const getUserChoice = userInput => {
	userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error!');
  }
}

console.log(getUserChoice('knife'));

function getComputerChoice() {
  let randHandNum = Math.floor(Math.random() * 3)
  switch (randHandNum) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
      }
}

console.log(getComputerChoice());

function determineWinner (userChoice, computerChoice) {
  if (userChoice === 'rock') {
	 if (computerChoice === 'paper') {
      return 'Computer won'
    	} else {
      	return 'User won'
  		}
  }
	if (userChoice === 'paper') {
   if (computerChoice === 'scissors') {
    	return 'Computer won'
  		} else if (computerChoice === 'rock') {
        return 'User won'
    	}
  }
  if (userChoice === 'scissors') {
   if (computerChoice === 'rock') {
    	return 'Computer won'
  		} else if (computerChoice === 'paper') {
        return 'User won'
      }
  }
  if (userChoice === 'bomb') {
    return 'user won'
  }
}

console.log(determineWinner ('paper', 'rock'));

//Number 12
const playGame= () => {
  let userChoice = getUserChoice('bomb')
  let computerChoice = getComputerChoice()
  console.log(`User played ${userChoice}`)
  console.log(`Computer played ${computerChoice}`)
  console.log(determineWinner(userChoice, computerChoice))
};

playGame();

/*LINKS FOR BUILDING SYNTHS
  https://codesandbox.io/live/BnPMJ
  https://tonejs.github.io/
*/
