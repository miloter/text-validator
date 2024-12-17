import TextValidator from '../text-validator.js';

const tv = new TextValidator();

tv.validateUsername('uk8977df91', { maxLength: 11, fieldTitle: 'Usuario' });    
tv.validatePassword('ak99-America');


tv.validate('mail@mail.com', TextValidator.reMail, TextValidator.errMail);
if (tv.isNone()) {
    console.log('El e-mail es correcto');
}

const filename1 = 'a name  $ %invalid.txt';
const filename2 = 'imagen-jgp.jpg';
tv.validateFilename(filename1);
tv.validateFilename(filename2);
if (tv.isNone()) {
    console.log(`${filename2} is a valid filename`);
}

if (tv.isError()) {
    for (const msg of tv.getMsgs()) {
        console.error(msg);
    }
}

if (tv.isSuccess()) {
    for (const msg of tv.getMsgs()) {
        console.info(msg);
    }
}

if (tv.isNone()) {
    console.log('Sin errores ni éxitos');
}