import TextValidator from '../text-validator.js';

const tv = new TextValidator();

const filename1 = 'a name  $ %invalid.txt';
const filename2 = 'imagen-jgp.jpg';


if (tv.validateFilename(filename1)) {
    console.log(`${filename1} is a valid filename`);
} else {
    console.log(tv.getLastMessage());
}

if (tv.validateFilename(filename2)) {
    console.log(`${filename2} is a valid filename`);
} else {
    console.log(tv.getLastMessage());
}
