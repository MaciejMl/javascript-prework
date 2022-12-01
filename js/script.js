let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'Nieznany ruch';

if (randomNumber == 1) {
  computerMove = `kamień`;
} else if (randomNumber == 2) {
  computerMove = `papier`;
} else if (randomNumber == 3) {
  computerMove = `nożyce`;
} else computerMove;

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

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
} else printMessage('Ja wygrałem!');
