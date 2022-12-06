const beginGame = function () {
  const playGame = function (playerInput) {
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
  };

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

  const chooseMove = function () {
    document.getElementById('play-rock').addEventListener('click', function () {
      scoreOveral(playGame(1));
    });
    document
      .getElementById('play-paper')
      .addEventListener('click', function () {
        scoreOveral(playGame(2));
      });
    document
      .getElementById('play-scissors')
      .addEventListener('click', function () {
        scoreOveral(playGame(3));
      });
  };
  chooseMove();
};

beginGame();
