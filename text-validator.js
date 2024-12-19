/**
 * Aporta expresiones regulares de validación, métodos de validación y
 * un sistema de gestión de mensajes de éxito o error.
 */
export default class TextValidator {
    /**
     * Localización del usuario.
     */
    static get locale() {
        return Intl.DateTimeFormat().resolvedOptions().locale;
    }
    /**
     * Valida la existencia de algún carácter distinto de espacio en blanco.
     */
    static get reNoEmpty() { return /^(?=.*\S).+$/s; }
    /**
     * Valida cualquier cadena de caracteres.
     */
    static get reStr() { return /^.*$/s; }
    /**
     * Valida la existencia de al menos un carácter de palabra.
     */
    static get reAnyWordChar() { return /^(?=.*[\p{L}\d_]).+$/su; }
    /**
     * Valida un nombre de usuario de entre 4 y 16 caracteres y que comienze por
     * al menos dos letras. Solo puede contener números, letras, guiones bajos
     * medios y puntos.
     */
    static get reUsername() { return /^(?=\p{L}\p{L})[\p{L}\d_.-]{4,16}$/u; }
    /**
     * Valida una contraseña de entre 4 y 32 caracteres y que contenga un
     * dígito, una minúscula y una mayúscula. Solo puede contener números,
     * letras, guiones bajos, medios y puntos.
     */
    static get rePassword() { return /^(?=.*\d)(?=.*\p{Ll})(?=.*\p{Lu})[\p{L}\d_.-]{4,32}$/u; }
    /**
     * Valida un e-mail.
     */
    static get reMail() { return /^[_a-z]([.-]?[0-9a-z]+)*@[_a-z]([.-]?[0-9a-z]+)*\.[a-z]{2,8}$/i; }
    /**
     * Valida un nombre de fichero:     
     *      Puede comenzar por: ., _, -.
     *      El siguiente carácter: una letra o un número.
     *      Le seguiran 0 o más caracteres: letra, numero, _, ., -, o espacio [ ].
     *      Terminará con: una letra o un número.
     */
    static get reFilename() { return /^[._-]?(?=[\p{L}\d_])(?!_)[\p{L}\d_. -]*(?=[\p{L}\d_])(?!_)[\p{L}\d_]$/u; }
    /**
     * Valida cualquier extensión incluso vacía en el nombre de fichero.
     */
    static get reAnyExt() { return /^.+(?:\.[0-9a-z]+)?$/i; }
    /**
     * Valida la extensión de un fichero de imagen.
     */
    static get reImgExt() { return /^.+\.(?:png|jpg|jpeg|bmp|gif)$/i; }
    /**
     * Valida una sección de URL compuesta únicamente de letras
     * números, guiones bajos o medios.
     */
    static get reURLSection() { return /^[\p{L}\d_-]+$/u; }
    /**
     * Valida un número entero (solo la sintaxis, puede estar fuera de rango).
     */
    static get reNumInt() { return /^[+-]?\d+$/; }
    /**
     * Valida un número real (solo la sintaxis, puede estar fuera de rango).
     */
    static get reNumReal() { return /^[+-]?(?:\d+(?:\.(?:\d+)?)|\.\d+)(?:[Ee][+-]?\d+)?$/; }
    /**
     * Mensaje de error para un usuario no válido
     */
    static get errUsername() {
        switch (TextValidator.locale.substring(0, 2)) {
            case 'es':
                return 'Usuario no válido: El usuario tendrá ' +
                    'entre 4 y 16 caracteres, comenzará por dos letras y solo puede ' +
                    'contener números, letras, guiones bajos, guiones medios y puntos';
            case 'en':
            default:
                return 'Invalid Username: The username will be ' +
                    'between 4 and 16 characters long, will start with two letters, and can only ' +
                    'contain numbers, letters, underscores, hyphens, and points';
        }
    }
    /**
     * Mensaje de error para una contraseña no válida.
     */
    static get errPassword() {
        switch (TextValidator.locale.substring(0, 2)) {
            case 'es':
                return 'Contraseña no válida: La contraseña ' +
                    'tendrá entre 4 y 32 caracteres y contendrá al menos, un dígito, una ' +
                    'minúscula y una mayúscula; además solo puede contener números, ' +
                    'letras, guiones bajos, medios y puntos';
            case 'en':
            default:
                return 'Invalid password: The password ' +
                    'must be between 4 and 32 characters long and contain at least one digit, one ' +
                    'lowercase letter and one uppercase letter; it can only contain numbers, ' +
                    'letters, underscores, hyphens and periods';
        }
    }
    /**
     * Mensaje de error para un e-mail no válido.
     */
    static get errMail() {
        switch (TextValidator.locale.substring(0, 2)) {
            case 'es':
                return 'El e-mail no es válido o tiene una longitud excesiva';
            case 'en':
            default:
                return 'The email is invalid or too long';
        }
    }
    /**
     * Mensaje de error para un nombre de fichero incorrecto.
     */
    static get errFilename() {
        switch (TextValidator.locale.substring(0, 2)) {
            case 'es':
                return 'El nombre del fichero no reune los ' +
                    'requisitos. Puede comenzar por ".", "_" o "-", el siguiente ' +
                    'carácter será una letra o un número, le seguiran 0 o más caracteres ' +
                    'de tipo letra, numero, ".", "_", espacio o "-", y terminará con: una letra ' +
                    'o un número';
            case 'en':
            default:
                return 'The file name does not meet the ' +
                    'requirements. It may start with a ".", "_" or "-", the next ' +
                    'character will be a letter or a number, followed by 0 or more characters ' +
                    'of the type letter, number, ".", "_", space or "-", and it will end with: a letter ' +
                    'or a number';
        }
    }
    /**
     * Mensaje de error para una extensión de fichero no válida.    
     */
    static get errFilenameExt() {
        switch (TextValidator.locale.substring(0, 2)) {
            case 'es':
                return 'La extensión del fichero no es válida';
            case 'en':
            default:
                return 'The file extension is not valid';
        }
    }

    /**
     * Mensaje de error si se excede la longitud de un nombre de fichero.     
     */
    static get errFilenameLength() {
        switch (TextValidator.locale.substring(0, 2)) {
            case 'es':
                return `#msgHeader#Longitud del nombre de fichero excedida, tamaño: #filenameLength#, máximo: #maxLength#`;
            case 'en':
            default:
                return `#msgHeader#Filename length exceeded, size: #filenameLength#, maximum: #maxLength#`;
        }
    }

    /**
     * Mensaje de error si se excede el tamaño máximo de un fichero.     
     */
    static get errFileSize() {
        switch (TextValidator.locale.substring(0, 2)) {
            case 'es':
                return `#msgHeader#Longitud de fichero excedida, tamaño: #fileSize#, máximo: #maxFileSize#`;
            case 'en':
            default:
                return `#msgHeader#File length exceeded, size: #fileSize#, maximum: #maxFileSize#`;
        }
    }

    /**
     * Devuelve el mensaje de error cuando la longitud del texto en un campo es mayor de la permitida.
     */
    static get errTextLength() {
        switch (TextValidator.locale.substring(0, 2)) {
            case 'es':
                return '#msgHeader#Longitud excedida, tamaño: #textLength#, máximo: #maxLength#';
            case 'en':
            default:
                return '#msgHeader#Length exceeded, size: #textLength#, maximum: #maxLength#';
        }
    }
    /**
     * Mensaje de error para una sección de URL inválida
     */
    static get errURLSection() {
        switch (TextValidator.locale.substring(0, 2)) {
            case 'es':
                return 'Una sección de URL puede estar ' +
                    'compuesta únicamente de letras números, guiones bajos o medios. ' +
                    'Ejemplo: bienvenidos-usuarios_y_amigos';
            case 'en':
            default:
                return 'A URL section may be ' +
                    'composed only of letters, numbers, underscores or hyphens. ' +
                    'Example: welcome-users_and_friends';
        }
    }

    /**
     * Mensaje de error si un número entero no es válido o no esta en el rango requerido.     
     */
    static get errRangeNumInt() {
        switch (TextValidator.locale.substring(0, 2)) {
            case 'es':
                return `#msgHeader#'#number#' no es un número entero o no está en el rango: [#minValue#, #maxValue#]`;
            case 'en':
            default:
                return `#msgHeader#'#number#' is not a integer number or is not in the range: [#minValue#, #maxValue#]`;
        }
    }

    /**
     * Mensaje de error si un número real no es válido o no esta en el rango requerido.     
     */
    static get errRangeNumReal() {
        switch (TextValidator.locale.substring(0, 2)) {
            case 'es':
                return `#msgHeader#'#number#' no es un número real o no está en el rango: [#minValue#, #maxValue#]`;
            case 'en':
            default:
                return `#msgHeader#'#number#' is not a real number or is not in the range: [#minValue#, #maxValue#]`;
        }
    }

    // Tipos de mensaje que puede haber
    /**
     * Ningún mensaje
     */
    static get #msgNone() { return 0; }
    /**
     * Hay mensajes de éxito
     */
    static get #msgSuccess() { return 1; }
    /**
     * Hay mensajes de error
     */
    static get #msgError() { return 2; }

    #typeMsgs; // Tipo de mensajes
    #msgs; // Lista de mensajes

    constructor() {
        this.#typeMsgs = TextValidator.#msgNone;
        this.#msgs = [];
    }

    /**
     * Agrega un nuevo mensaje de error a la lista.
     * @param {string} message Mensaje de error.
     */
    addError(message) {
        this.#msgs.push({ message, category: 'error' });
        this.#typeMsgs = TextValidator.#msgError;
    }

    /**
     * Agrega un nuevo mensaje de éxito a la lista.
     * @param {string} message Mensaje de éxito.
     */
    addSuccess(message) {
        this.#msgs.push({ message, category: 'success' });
        this.#typeMsgs = TextValidator.#msgSuccess;
    }

    /**
     * Valida contenido en formato de cadena. Si no pasa la validación se
     * agregará el mensaje a los errores.
     * @param {string} text Texto a validar.
     * @param {RegExp} re Expresión regular de validación.
     * @param {string} msgError Mensaje de error en caso de no pasar la validación.
     * @param {object} {     
     *      maxLength = 4096,
     *      ignoreEmpty = false,
     *      fieldTitle = ''
     * } Opciones de validación adicionales.
     * @returns {boolean} true si pasa la validación o false en caso contrario.
     */
    validate(text, re, msgError, {
        errTextLength = TextValidator.errTextLength,
        maxLength = 4096,
        ignoreEmpty = false,
        fieldTitle = ''
    } = {}) {
        let pass = true;
        if (!text && ignoreEmpty) {
            return pass;
        }

        const msgHeader = fieldTitle && `"${fieldTitle}": `;

        if (!re.test(text)) {
            pass = false;
            this.addError(`${msgHeader}${msgError}`);
        }

        if (text.length > maxLength) {
            pass = false;
            this.addError(errTextLength
                .replace('#msgHeader#', msgHeader)
                .replace('#textLength#', text.length)
                .replace('#maxLength#', maxLength));
        }

        return pass;
    }

    /**
     * Valida el nombre de un fichero. Si no pasa la validación se
     * agregará el mensaje a los errores.
     * @param {string} filename Nombre del fichero a validar.
     * @param {object} {
     *      errFilename = TextValidator.errFilename,
     *      errFilenameExt = TextValidator.errFilenameExt,
     *      errFilenameLength = TextValidator.errFilenameLength,
     *      reExt = TextValidator.reAnyExt,
     *      maxLength = 128,
     *      ignoreEmpty = false,
     *      fieldTitle = ''    
     * } Opciones de validación adicionales.
     * @param {RegExp} reExt Expresión regular de validación de la extensión.
     * @param {number} maxLength Lóngitud máxima del nombre de fichero.
     * @param {boolean} ignoreEmpty Indica si se ignoran los nombres de fichero vacíos.     
     * @param {string} fieldTitle Nombre del campo opcional.
     * @returns {boolean} true si pasa la validación o false en caso contrario.
     */
    validateFilename(filename, {
        errFilename = TextValidator.errFilename,
        errFilenameExt = TextValidator.errFilenameExt,
        errFilenameLength = TextValidator.errFilenameLength,
        reExt = TextValidator.reAnyExt,
        maxLength = 128,
        ignoreEmpty = false,
        fieldTitle = ''
    } = {}) {
        let pass = true;
        if (!filename && ignoreEmpty) {
            return pass;
        }

        const msgHeader = fieldTitle && `"${fieldTitle}": `;

        if (!TextValidator.reFilename.test(filename)) {
            pass = false;
            this.addError(`${msgHeader}${errFilename}`);
        }
        if (!reExt.test(filename)) {
            pass = false;
            this.addError(errFilenameExt);
        }

        if (filename.length > maxLength) {
            pass = false;
            this.addError(errFilenameLength
                .replace('#msgHeader#', msgHeader)
                .replace('#filenameLength#', filename.length)
                .replace('#maxLength#', maxLength));
        }

        return pass;
    }

    /**
     * Valida el nombre de un fichero. Si no pasa la validación se
     * agregará el mensaje a los errores.
     * @param {string} filename Nombre del fichero a validar.
     * @param {object} {
     *      errFilename = TextValidator.errFilename,
     *      errFilenameExt = TextValidator.errFilenameExt,
     *      errFilenameLength = TextValidator.errFilenameLength,
     *      reExt = TextValidator.reAnyExt,
     *      maxLength = 128,
     *      ignoreEmpty = false,
     *      fieldTitle = ''    
     * } Opciones de validación adicionales.
     * @param {RegExp} reExt Expresión regular de validación de la extensión.
     * @param {number} maxLength Lóngitud máxima del nombre de fichero.
     * @param {boolean} ignoreEmpty Indica si se ignoran los nombres de fichero vacíos.     
     * @param {string} fieldTitle Nombre del campo opcional.
     * @returns {boolean} true si pasa la validación o false en caso contrario.
     */
    validateFileSize(fileSize, maxFileSize, {
        errFileSize = TextValidator.errFileSize,
        fieldTitle = ''
    } = {}) {
        let pass = true;

        const msgHeader = fieldTitle && `"${fieldTitle}": `;

        if (fileSize > maxFileSize) {
            pass = false;
            this.addError(errFileSize
                .replace('#msgHeader#', msgHeader)
                .replace('#fileSize#', fileSize)
                .replace('#maxFileSize#', maxFileSize));
        }

        return pass;
    }

    /**
     * Valida un nombre de usuario.
     * @param {string} text Un texto con un nombre de usuario.
     * @returns {boolean}
     */
    validateUsername(text, { maxLength = 16, fieldTitle = '' } = {}) {
        return this.validate(text, TextValidator.reUsername,
            TextValidator.errUsername, { maxLength, fieldTitle });
    }

    /**
     * Valida una contraseña.
     * @param {string} text Un texto con una contraseña.
     * @returns {boolean}
     */
    validatePassword(text, { maxLength = 32, fieldTitle = '' } = {}) {
        return this.validate(text, TextValidator.rePassword,
            TextValidator.errPassword, { maxLength, fieldTitle });
    }

    /**
     * Valida un e-mail.
     * @param {string} text Un texto con un e-mail.
     * @returns {boolean}
     */
    validateMail(text, { maxLength = 32, fieldTitle = '' } = {}) {
        return this.validate(text, TextValidator.reMail,
            TextValidator.errMail, { maxLength, fieldTitle });
    }

    /**
     * Valida un número entero dentro de un rango.
     * @param {number|string} value Número a validar.
     * @param {number} minValue Mínimo valor incluido.
     * @param {number} maxValue Máximo valor incluido.
     * @param {object} {
     *      errRangeNumInt = TextValidator.errRangeNumInt,
     *      fieldTitle = ''
     * } Propiedades de validación opcionales.
     */
    validateInt(value, minValue, maxValue, {
        errRangeNumInt = TextValidator.errRangeNumInt,
        fieldTitle = ''
    } = {}) {
        const num = Number(value);
        let pass = true;
        const msgHeader = fieldTitle && `"${fieldTitle}": `;

        if (!(TextValidator.reNumInt.test(value) && isFinite(num)) || num < minValue || num > maxValue) {
            pass = false;
            this.addError(errRangeNumInt
                .replace('#msgHeader#', msgHeader)
                .replace('#number#', value)
                .replace('#minValue#', minValue)
                .replace('#maxValue#', maxValue)
            );
        }

        return pass;
    }

    /**
     * Valida un número real dentro de un rango.
     * @param {number|string} value Número a validar.
     * @param {number} minValue Mínimo valor incluido.
     * @param {number} maxValue Máximo valor incluido.
     * @param {object} {
     *      errRangeNumReal = TextValidator.errRangeNumReal,
     *      fieldTitle = ''
     * } Propiedades de validación opcionales.
     */
    validateReal(value, minValue, maxValue, {
        errRangeNumReal = TextValidator.errRangeNumReal,
        fieldTitle = ''
    } = {}) {
        const num = Number(value);
        let pass = true;
        const msgHeader = fieldTitle && `"${fieldTitle}": `;

        if (!(TextValidator.reNumReal.test(value) && isFinite(num)) || num < minValue || num > maxValue) {
            pass = false;
            this.addError(errRangeNumReal
                .replace('#msgHeader#', msgHeader)
                .replace('#number#', value)
                .replace('#minValue#', minValue)
                .replace('#maxValue#', maxValue)
            );
        }

        return pass;
    }

    /**
     * Si una aserción no es true se agrega un mensaje de error personalizado.
     * Si el mensaje no se suministra no se agrega a los errores.
     * De devuelve el valor de la aserción.
     * @param {boolean} assertTrue 
     * @param {string} msgError 
     * @returns {boolean}
     */
    validateAssert(assertTrue, msgError = '') {
        if (!assertTrue && msgError) {
            this.addError(msgError);
        }

        return assertTrue;
    }

    /**
     * Devuelve un valor que indica si se han producido errores.
     * @returns {boolean}
     */
    isError() {
        return this.#typeMsgs === TextValidator.#msgError;
    }

    /**
     * Devuelve un valor que indica si se han producido éxitos.
     * @returns {boolean}
     */
    isSuccess() {
        return this.#typeMsgs === TextValidator.#msgSuccess;
    }

    /**
     * Devuelve un valor que indica si no se han producido éxitos ni errores.
     * @returns {boolean}
     */
    isNone() {
        return this.#typeMsgs === TextValidator.#msgNone;
    }

    /**
     * Devuelve la lista de mensajes.        
     * @returns {object[]} Una lista de objetos conteniendo la lista de
     * mensajes, donde cada mensaje es de la forma:
     *      { 'message': '...', 'category': 'success' | 'error' }
     */
    getMsgs() {
        return this.#msgs;
    }

    /**
     * Devuelve el último mensaje de la lista de mensajes o undefined
     * si no hay ningún mensaje en la lista.    
     * @returns {string} El texto del mensaje.
     */
    getLastMessage() {
        return this.#msgs.length > 0 ?
            this.#msgs[this.#msgs.length - 1].message : undefined;
    }
}
