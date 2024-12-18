import TextValidator from '../text-validator.js';

const tv = new TextValidator();

if (tv.validateInt(111, 1, 256)) {
    console.log('Passed validation');
} else {
    console.log(tv.getLastMessage());
}
if(tv.validateInt('111', 1, 256)) {
    console.log('Passed validation');
} else {
    console.log(tv.getLastMessage());
}
if(tv.validateInt(0, 1, 256) ) {
    console.log('Passed validation');
} else {
    console.log(tv.getLastMessage());
}
if(tv.validateInt('0', 1, 256)) {
    console.log('Passed validation');
} else {
    console.log(tv.getLastMessage());
}
if(tv.validateInt('123.456', 1, 256)) {
    console.log('Passed validation');
} else {
    console.log(tv.getLastMessage());
}
if(tv.validateInt('asdf', 1, 256)) {
    console.log('Passed validation');
} else {
    console.log(tv.getLastMessage());
}