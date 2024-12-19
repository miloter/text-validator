import TextValidator from '../text-validator.js';

const tv = new TextValidator();

if(tv.validateReal(111, 1, 256)) {
    console.log('Passed validation');
} else {
    console.log(tv.getLastMessage());
}
if(tv.validateReal('111', 1, 256)) {
    console.log('Passed validation');
} else {
    console.log(tv.getLastMessage());
}
if(tv.validateReal(true, 1, 256)) {
    console.log('Passed validation');
} else {
    console.log(tv.getLastMessage());
}
if(tv.validateReal('0', 1, 256)) {
    console.log('Passed validation');
} else {
    console.log(tv.getLastMessage());
}
if(tv.validateReal(123.456, 1, 256)) {
    console.log('Passed validation');
} else {
    console.log(tv.getLastMessage());
}
if(tv.validateReal('123.456', 1, 256)) {
    console.log('Passed validation');
} else {
    console.log(tv.getLastMessage());
}
if(tv.validateReal('asdf', 1, 256)) {
    console.log('Passed validation');
} else {
    console.log(tv.getLastMessage());
}
if(tv.validateReal(1.56, 1.5, 2.25)) {
    console.log('Passed validation');
} else {
    console.log(tv.getLastMessage());
}
if(tv.validateReal(2.26, 1.5, 2.25)) {
    console.log('Passed validation');
} else {
    console.log(tv.getLastMessage());
}