// alert ('hello World!');
const firstName = prompt('what is your name?');
const lastName = prompt('what is your surname ?');
const favColor = prompt('what is your favourite color');
const password = firstName + lastName + favColor + '21';

console.log(password);

document.getElementById('password').innerHTML = 'your password is: ' + password;