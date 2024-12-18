import TextValidator from '../text-validator.js';

const tv = new TextValidator();

if (tv.validateMail('mail@mail.com')) {
    console.log('Passed validation');
} else {
    console.log(tv.getLastMessage());
}
if (tv.validateMail('mail@.com')) {
    console.log('Passed validation');
} else {
    console.log(tv.getLastMessage());
}
if (tv.validateMail('mail@mail.com', 'e-mail')) {
    console.log('Passed validation');
} else {
    console.log(tv.getLastMessage());
}
if (tv.validateMail('mail-too-long12345678901@mail.com')) {
    console.log('Passed validation');
} else {
    console.log(tv.getLastMessage());
}
if (tv.validateMail('mail-too-long-allowerd-12345678901@mail.com', {
    maxLength: 64
})) {
    console.log('Passed validation');
} else {
    console.log(tv.getLastMessage());
}