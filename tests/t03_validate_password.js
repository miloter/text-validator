import TextValidator from '../text-validator.js';

const tv = new TextValidator();

console.log(tv.validatePassword('1234', { maxLength: 16,
    fieldTitle: 'Password' }) || console.log(tv.getLastMessage()));    
console.log(tv.validateUsername('uk8977df91') || tv.getLastMessage());

