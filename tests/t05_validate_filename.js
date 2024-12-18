import TextValidator from '../text-validator.js';

const tv = new TextValidator();

const filename1 = 'a name  $ %invalid.txt';
const filename2 = 'imagen-jgp.jpg';

tv.validateFilename(filename1);
if (tv.validateFilename(filename2)) {
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