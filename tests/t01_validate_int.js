import TextValidator from '../text-validator.js';

const tv = new TextValidator();

console.log(tv.validateInt(111, 1, 256) || tv.getLastMessage());
console.log(tv.validateInt('111', 1, 256) || tv.getLastMessage());
console.log(tv.validateInt(0, 1, 256) || tv.getLastMessage());
console.log(tv.validateInt('0', 1, 256) || tv.getLastMessage());
console.log(tv.validateInt('123.456', 1, 256) || tv.getLastMessage());
console.log(tv.validateInt('asdf', 1, 256) || tv.getLastMessage());