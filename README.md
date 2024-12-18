# Text validation system with success or error messages
Provides validation regular expressions, validation methods, and a success/error message handling system.

## Note:
text-validator is an ESM module so you will need to add to your package.json: "type": "module"

## Installation
```bash/powershell
npm install @miloter/text-validator
```

## Examples
### Validate integer number in a range
```js
import TextValidator from '@miloter/text-validator';

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
```

### Validate real number in a range
```js
import TextValidator from '@miloter/text-validator';

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
if(tv.validateReal(0, 1, 256)) {
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
```

### Validate a username
```js
import TextValidator from '@miloter/text-validator';

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
```

### Validate a password
```js
import TextValidator from '@miloter/text-validator';

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
```

### Validate a email
```js
import TextValidator from '@miloter/text-validator';

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
```

### Validate a filename
```js
import TextValidator from '@miloter/text-validator';

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
```

### Custom validation
```js
import TextValidator from '@miloter/text-validator';

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
```
