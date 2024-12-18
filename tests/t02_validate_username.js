import TextValidator from '../text-validator.js';

const tv = new TextValidator();

if(tv.validateUsername('uk8977df91', {
    maxLength: 11,
    fieldTitle: 'Usuario'
})) {
    console.log('Passed validation');
} else {
    console.log(tv.getLastMessage());
}
if(tv.validateUsername('uk8977df91', {
    maxLength: 5,
    fieldTitle: 'Usuario'
})) {
    console.log('Passed validation');
} else {
    console.log(tv.getLastMessage());
}
if(tv.validateUsername('1234')) {
    console.log('Passed validation');
} else {
    console.log(tv.getLastMessage());
}
