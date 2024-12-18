import TextValidator from '../text-validator.js';

const tv = new TextValidator();

console.log(tv.validateUsername('uk8977df91', {
    maxLength: 11,
    fieldTitle: 'Usuario'
}) || tv.getLastMessage());
console.log(tv.validateUsername('uk8977df91', {
    maxLength: 5,
    fieldTitle: 'Usuario'
}) || tv.getLastMessage());
console.log(tv.validateUsername('1234') || tv.getLastMessage());

