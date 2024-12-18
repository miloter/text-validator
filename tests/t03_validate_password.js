import TextValidator from '../text-validator.js';

const tv = new TextValidator();

if(tv.validatePassword('1234', { maxLength: 16, fieldTitle: 'Password' })) {
    console.log('Passed validation');
} else {
    console.log(tv.getLastMessage());
}
    
if (tv.validateUsername('uk8977df91')) {
    console.log('Passed validation');
} else {
    console.log(tv.getLastMessage());
}