import TextValidator from '../text-validator.js';

const tv = new TextValidator();

console.log(tv.validateReal(111, 1, 256) || tv.getLastMessage());
console.log(tv.validateReal('111', 1, 256) || tv.getLastMessage());
console.log(tv.validateReal(0, 1, 256) || tv.getLastMessage());
console.log(tv.validateReal('0', 1, 256) || tv.getLastMessage());
console.log(tv.validateReal(123.456, 1, 256) || tv.getLastMessage());
console.log(tv.validateReal('123.456', 1, 256) || tv.getLastMessage());
console.log(tv.validateReal('asdf', 1, 256) || tv.getLastMessage());
console.log(tv.validateReal(1.56, 1.5, 2.25) || tv.getLastMessage());
console.log(tv.validateReal(2.26, 1.5, 2.25) || tv.getLastMessage());