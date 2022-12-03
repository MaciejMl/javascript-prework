function playGame(playerInput) {
  clearMessages();
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  /*let playerInput = prompt(
    'Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce'
  );*/
  let computerMove = getMoveName(randomNumber);
  let playerMove = getMoveName(playerInput);

  console.log('Wylosowana liczba to: ' + randomNumber);

  console.log('Gracz wpisał: ' + playerInput);

  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return 'kamień';
    }
    if (argMoveId == 2) {
      return 'papier';
    }
    if (argMoveId == 3) {
      return 'nożyce';
    }

    printMessage('Nie znam ruchu o Id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

  function displayResult(argComputerMove, argPlayerMove) {
    printMessage(
      'Mój ruch to: ' + argComputerMove + ' a Twój ruch to: ' + argPlayerMove
    );

    console.log('kopmputera ruch to: ' + argComputerMove);
    console.log('moj ruch to: ' + argPlayerMove);

    if (argPlayerMove == 'nieznany ruch') {
      printMessage('Jeszcze raz, nieznany ruch!');
      return 'nieznany ruch!';
    }
    if (argComputerMove == argPlayerMove) {
      printMessage('Remis!');
      return 'Remis!';
    }
    if (
      (argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
      (argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
      (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
    ) {
      printMessage('Wygrałeś!');
      return 'Wygrałeś!';
    } else {
      printMessage('Ja wygrałem!');
      return 'Ja wygrałem!';
    }
  }

  res = displayResult(computerMove, playerMove);
  console.log(res);
}

document.getElementById('play-rock').addEventListener('click', function () {
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function () {
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function () {
  playGame(3);
});

/*if (randomNumber == 1) {
  computerMove = `kamień`;
} else if (randomNumber == 2) {
  computerMove = `papier`;
} else if (randomNumber == 3) {
  computerMove = `nożyce`;
} else computerMove;

printMessage('Mój ruch to: ' + computerMove);

if (playerInput == '1') {
  playerMove = 'kamień';
} else if (playerInput == '2') {
  playerMove = 'papier';
} else if (playerInput == '3') {
  playerMove = 'nożyce';
} else playerMove;

printMessage('Twój ruch to: ' + playerMove);

if (playerMove == 'nieznany ruch') {
  printMessage('Nieznany ruch! Jeszcze raz!');
} else if (computerMove == playerMove) {
  printMessage('Remis!');
} else if (
  (computerMove == 'kamień' && playerMove == 'papier') ||
  (computerMove == 'papier' && playerMove == 'nożyce') ||
  (computerMove == 'nożyce' && playerMove == 'kamień')
) {
  printMessage('Wygrałeś!');
} else {
  printMessage('Ja wygrałem!');
}
*/
