function playGame(playerInput) {
  clearMessages();

  const randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  console.log('Gracz wpisał: ' + playerInput);

  const getMoveName = function (argMoveId) {
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
  };

  const computerMove = getMoveName(randomNumber);
  const playerMove = getMoveName(playerInput);

  const displayResult = function (argComputerMove, argPlayerMove) {
    printMessage(
      'Mój ruch to: ' + argComputerMove + ' a Twój ruch to: ' + argPlayerMove
    );

    console.log('kopmputera ruch to: ' + argComputerMove);
    console.log('moj ruch to: ' + argPlayerMove);

    if (argPlayerMove == 'nieznany ruch') {
      printMessage('Jeszcze raz, nieznany ruch!');
      //return 'nieznany ruch!';
    }
    if (argComputerMove == argPlayerMove) {
      printMessage('Remis!');
      return 'Remis!';
    } else if (
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
  };

  return displayResult(computerMove, playerMove);
}

let count = 0;
let ccount = 0;
const scoreOveral = function (res) {
  const printPlayerScore = function () {
    const plResult = document.querySelector('#pr-0');
    plResult.innerHTML = count;
  };

  const printComputerScore = function () {
    const cpResult = document.querySelector('#cp-0');
    cpResult.innerHTML = ccount;
  };

  const pAddPoint = function () {
    count++;
    printPlayerScore();
  };

  const cAddPoint = function () {
    ccount++;
    printComputerScore();
  };

  if (res == 'Wygrałeś!') {
    pAddPoint();
  } else if (res == 'Ja wygrałem!') {
    cAddPoint();
  }
};

document.getElementById('play-rock').addEventListener('click', function () {
  scoreOveral(playGame(1));
});
document.getElementById('play-paper').addEventListener('click', function () {
  scoreOveral(playGame(2));
});
document.getElementById('play-scissors').addEventListener('click', function () {
  scoreOveral(playGame(3));
});

//=============================================
/*if (res == 'Wygrałeś!') {
  printMsgPlayer('1');
}*/

//console.log(res);

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
