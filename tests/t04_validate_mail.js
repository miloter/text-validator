import TextValidator from '../text-validator.js';

const tv = new TextValidator();

console.log(tv.validateMail('mail@mail.com') || tv.getLastMessage());    
console.log(tv.validateMail('mail@.com') || tv.getLastMessage());    
console.log(tv.validateMail('mail@mail.com', 'e-mail') || tv.getLastMessage());    
console.log(tv.validateMail('mail-too-long12345678901@mail.com') ||
    tv.getLastMessage());    
console.log(tv.validateMail('mail-too-long-allowerd-12345678901@mail.com', {
    maxLength: 64 }) || tv.getLastMessage());    