let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'Nieznany ruch';

if (randomNumber == 1) {
  computerMove = `kamień`;
}
if (randomNumber == 2) {
  computerMove = `papier`;
}
if (randomNumber == 3) {
  computerMove = `nożyce`;
} else computerMove;

printMessage('Mój ruch to: ' + computerMove);
