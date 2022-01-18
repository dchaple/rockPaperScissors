const getUserChoice = userInput=> {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else {
    console.log('Incorrect Input, please try again!');
  }
  
  };
  
  function getComputerChoice() {
    const number = Math.floor(Math.random() * 3);
    switch (number) {
      case 0: 
      return 'rock';
      break; 
      case 1:
      return 'paper';
      break;
      case 2: 
      return 'scissors';
      break;
    }
  
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    };
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    };
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
      
      }
  };
  
  const playGame = () => {
    const userChoice = getUserChoice('scissors', 'rock', 'paper');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw:' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();
  
  