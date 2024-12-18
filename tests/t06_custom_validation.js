import TextValidator from '../text-validator.js';

const tv = new TextValidator();

const d1 = '2025-03-29';
const d2 = '2024-12-18';
const msg = 'The provided date not is great than 2024-12-31';

if (tv.validateAssert(new Date(d1) > new Date('2024-12-31'), msg)) {
    console.log('Passed validation');
} else {
    console.log(tv.getLastMessage());
}

if (tv.validateAssert(new Date(d2) > new Date('2024-12-31'), msg)) {
    console.log('Passed validation');
} else {
    console.log(tv.getLastMessage());
}
